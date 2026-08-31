"use client";

import { FormEvent, useCallback, useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";

type ChatMessage = {
  id: string;
  sender: "visitor" | "agent" | "system";
  body: string;
  created_at: string;
};

const VISITOR_ID_KEY = "tpkele_chat_visitor_id";
const SESSION_ID_KEY = "tpkele_chat_session_id";
const OPEN_KEY = "tpkele_chat_open";

function getOrCreateVisitorId(): string {
  if (typeof window === "undefined") return "";
  let id = localStorage.getItem(VISITOR_ID_KEY);
  if (!id) {
    id = (crypto.randomUUID?.() || Math.random().toString(36).slice(2) + Date.now().toString(36));
    localStorage.setItem(VISITOR_ID_KEY, id);
  }
  return id;
}

export function ChatWidget() {
  const t = useTranslations("chat");
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [started, setStarted] = useState(false);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const lastSeenAt = useRef<string | null>(null);
  const visitorIdRef = useRef<string>("");

  // 启动时从 localStorage 恢复
  useEffect(() => {
    visitorIdRef.current = getOrCreateVisitorId();
    try {
      if (localStorage.getItem(OPEN_KEY) === "1") setOpen(true);
      const persistedName = localStorage.getItem("tpkele_chat_name") || "";
      const persistedEmail = localStorage.getItem("tpkele_chat_email") || "";
      if (persistedName) setName(persistedName);
      if (persistedEmail) setEmail(persistedEmail);
      const persistedSession = localStorage.getItem(SESSION_ID_KEY);
      if (persistedSession && (persistedName || persistedEmail)) {
        // 之前已经开始过，自动续接
        startSession(persistedName, persistedEmail, true).catch(() => {});
      }
    } catch (_) {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // open 状态持久化
  useEffect(() => {
    try { localStorage.setItem(OPEN_KEY, open ? "1" : "0"); } catch (_) {}
  }, [open]);

  // 轮询新消息
  useEffect(() => {
    if (!sessionId) return;
    const id = setInterval(() => { pollNewMessages(); }, 3500);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sessionId]);

  // 自动滚到底
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const startSession = useCallback(
    async (n: string, e: string, silent = false) => {
      const visitorId = visitorIdRef.current || getOrCreateVisitorId();
      visitorIdRef.current = visitorId;
      try {
        const r = await fetch("/api/chat/visitor/start", {
          method: "POST",
          headers: { "Content-Type": "application/json", "X-Visitor-Id": visitorId },
          body: JSON.stringify({
            visitor_id: visitorId,
            name: n,
            email: e,
            page_url: typeof window !== "undefined" ? window.location.href : "",
          }),
        });
        if (!r.ok) throw new Error("start failed");
        const data = await r.json();
        setSessionId(data.session_id);
        try { localStorage.setItem(SESSION_ID_KEY, data.session_id); } catch (_) {}
        if (n) try { localStorage.setItem("tpkele_chat_name", n); } catch (_) {}
        if (e) try { localStorage.setItem("tpkele_chat_email", e); } catch (_) {}
        const msgs: ChatMessage[] = data.messages || [];
        setMessages(msgs);
        if (msgs.length) lastSeenAt.current = msgs[msgs.length - 1].created_at;
        setStarted(true);
        setError("");
      } catch (err) {
        if (!silent) setError(t("errorConnect"));
        throw err;
      }
    },
    [t]
  );

  const pollNewMessages = useCallback(async () => {
    if (!sessionId) return;
    try {
      const visitorId = visitorIdRef.current;
      const qs = lastSeenAt.current ? `&after=${encodeURIComponent(lastSeenAt.current)}` : "";
      const r = await fetch(`/api/chat/visitor/poll?session_id=${sessionId}${qs}`, {
        headers: { "X-Visitor-Id": visitorId },
      });
      if (!r.ok) return;
      const data = await r.json();
      const newMsgs: ChatMessage[] = data.messages || [];
      if (newMsgs.length) {
        setMessages((prev) => {
          const ids = new Set(prev.map((m) => m.id));
          return [...prev, ...newMsgs.filter((m) => !ids.has(m.id))];
        });
        lastSeenAt.current = newMsgs[newMsgs.length - 1].created_at;
      }
    } catch (_) {}
  }, [sessionId]);

  const handleStart = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() && !email.trim()) {
      setError(t("errorIdentity"));
      return;
    }
    startSession(name.trim(), email.trim()).catch(() => {});
  };

  const handleSend = async (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim() || !sessionId || sending) return;
    const text = input.trim();
    setInput("");
    setSending(true);
    const optimistic: ChatMessage = {
      id: "tmp-" + Date.now(),
      sender: "visitor",
      body: text,
      created_at: new Date().toISOString(),
    };
    setMessages((prev) => [...prev, optimistic]);
    try {
      const r = await fetch("/api/chat/visitor/message", {
        method: "POST",
        headers: { "Content-Type": "application/json", "X-Visitor-Id": visitorIdRef.current },
        body: JSON.stringify({ visitor_id: visitorIdRef.current, session_id: sessionId, body: text }),
      });
      if (!r.ok) throw new Error("send failed");
      const data = await r.json();
      // 用真实消息替换 optimistic
      setMessages((prev) => prev.map((m) => (m.id === optimistic.id ? data.message : m)));
      lastSeenAt.current = data.message.created_at;
    } catch (_) {
      setMessages((prev) => prev.filter((m) => m.id !== optimistic.id));
      setError(t("errorSend"));
      setInput(text);
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      {!open && (
        <button
          type="button"
          className="chat-fab"
          aria-label={t("openAria")}
          onClick={() => setOpen(true)}
        >
          <span aria-hidden="true">💬</span>
          <span className="chat-fab-label">{t("fabLabel")}</span>
        </button>
      )}

      {open && (
        <div className="chat-panel" role="dialog" aria-label={t("dialogAria")}>
          <div className="chat-panel-head">
            <div>
              <div className="chat-panel-title">{t("teamName")}</div>
              <div className="chat-panel-sub">
                <span className="chat-online-dot" /> {t("replyTime")}
              </div>
            </div>
            <button
              type="button"
              className="chat-panel-close"
              aria-label={t("closeAria")}
              onClick={() => setOpen(false)}
            >
              ×
            </button>
          </div>

          {!started ? (
            <form className="chat-pre-form" onSubmit={handleStart}>
              <p className="chat-pre-lede">{t("preLede")}</p>
              <label>
                <span>{t("nameLabel")}</span>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t("namePlaceholder")}
                  autoComplete="name"
                />
              </label>
              <label>
                <span>{t("emailLabel")}</span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t("emailPlaceholder")}
                  autoComplete="email"
                />
              </label>
              {error && <div className="chat-error">{error}</div>}
              <button type="submit" className="chat-start-btn">
                {t("startButton")}
              </button>
            </form>
          ) : (
            <>
              <div className="chat-msgs">
                {messages.length === 0 && (
                  <div className="chat-msg agent">
                    <div className="chat-msg-body">
                      {t("greeting", { name: name || t("fallbackName") })}
                    </div>
                  </div>
                )}
                {messages.map((m) => (
                  <div key={m.id} className={`chat-msg ${m.sender}`}>
                    <div className="chat-msg-body">{m.body}</div>
                    <div className="chat-msg-time">
                      {new Date(m.created_at).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
              {error && <div className="chat-error" style={{ margin: "0 14px 6px" }}>{error}</div>}
              <form className="chat-composer" onSubmit={handleSend}>
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  rows={1}
                  placeholder={t("inputPlaceholder")}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handleSend(e as unknown as FormEvent);
                    }
                  }}
                  disabled={sending}
                />
                <button type="submit" disabled={sending || !input.trim()} aria-label={t("sendAria")}>
                  ➤
                </button>
              </form>
            </>
          )}
        </div>
      )}
    </>
  );
}
