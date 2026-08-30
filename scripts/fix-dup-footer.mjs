import fs from "node:fs";

// 手动把原始 JSON 文本解析为对象，同时记录每个顶层 key 的原始文本段
// 以便合并重复的 footer 对象
function parseAndCollect(raw) {
  // 用 JS 的 JSON.parse，但先处理：因为 JSON.parse 只保留最后一个重复 key，
  // 我们需要手动探测。这里直接让 JSON.parse 解析，然后我们只修复 footer。

  // 简化：直接找文件里所有顶层 footer 块，合并它们的属性
  const footers = [];
  let searchFrom = 0;
  while (true) {
    const p = raw.indexOf('\n  "footer": {', searchFrom);
    if (p === -1) break;
    const start = p + "\n  ".length;
    const braceStart = raw.indexOf("{", start);

    let depth = 0, inStr = false, esc = false, i = braceStart;
    for (; i < raw.length; i++) {
      const c = raw[i];
      if (inStr) {
        if (esc) { esc = false; continue; }
        if (c === "\\") { esc = true; continue; }
        if (c === '"') inStr = false;
        continue;
      }
      if (c === '"') { inStr = true; continue; }
      if (c === "{") depth++;
      else if (c === "}") { depth--; if (depth === 0) break; }
    }
    footers.push({
      start,
      end: i + 1,
      obj: JSON.parse(raw.slice(braceStart, i + 1)),
    });
    searchFrom = i + 1;
  }

  return { footers, parsed: JSON.parse(raw) };
}

const TOP = {};

for (const file of ["en.json", "ru.json"]) {
  const raw = fs.readFileSync(`./messages/${file}`, "utf8");
  const { footers, parsed } = parseAndCollect(raw);

  if (footers.length <= 1) {
    console.log(file, "只有一个 footer，无需修复");
    continue;
  }

  // 合并所有 footer：后面的覆盖前面的（与 JSON.parse 行为一致），
  // 但我们要保留完整内容，所以按"后出现优先"合并
  const merged = {};
  for (const f of footers) {
    Object.assign(merged, f.obj);
  }

  // 用 JSON.parse 的结果（它已经保留了最后一个 footer）作为基础，
  // 再把 merged 的完整 footer 塞回去 —— 但这会破坏缩进格式。
  // 更好的做法：重写整个文件。
  const newRaw = raw.slice(0, footers[0].start)
    + JSON.stringify(merged, null, 2).split("\n").map(l => "  " + l).join("\n")
    + raw.slice(footers[footers.length - 1].end);

  fs.writeFileSync(`./messages/${file}`, newRaw, "utf8");
  console.log(file, `已修复：合并 ${footers.length} 个 footer`);
}
