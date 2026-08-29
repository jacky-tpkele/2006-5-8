/**
 * IndexNow 批量推送脚本
 *
 * 用法:
 *   node scripts/indexnow.mjs                    # 推送 sitemap 里全部 URL
 *   node scripts/indexnow.mjs <url1> <url2> ...  # 推送指定 URL
 *
 * IndexNow 覆盖 Bing / Yandex / Seznam / Naver。Google 不支持该协议。
 */

const KEY = "ddcef329118402e99fb5cecaf95d5047";
const HOST = "www.tpkele.com";
const SITE = `https://${HOST}`;
const ENDPOINT = "https://api.indexnow.org/indexnow";
const BATCH_SIZE = 100; // IndexNow 单次上限 10000，保守分批便于定位问题

async function fetchSitemapUrls() {
  const res = await fetch(`${SITE}/sitemap.xml`);
  if (!res.ok) throw new Error(`拉取 sitemap 失败: HTTP ${res.status}`);
  const xml = await res.text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
}

async function submit(urlList) {
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: HOST, key: KEY, urlList }),
  });
  return { status: res.status, body: await res.text().catch(() => "") };
}

function explain(status) {
  switch (status) {
    case 200: return "成功，已接受";
    case 202: return "已接受，但密钥仍在验证中";
    case 400: return "请求格式错误";
    case 403: return "密钥验证失败 — 检查密钥文件是否可访问";
    case 422: return "URL 不属于该 host，或密钥与 host 不匹配";
    case 429: return "请求过于频繁，稍后重试";
    default: return "未知响应";
  }
}

async function main() {
  const args = process.argv.slice(2);
  const urls = args.length > 0 ? args : await fetchSitemapUrls();

  const invalid = urls.filter((u) => !u.startsWith(SITE));
  if (invalid.length > 0) {
    console.error(`✗ 以下 URL 不属于 ${SITE}，已中止:\n  ${invalid.join("\n  ")}`);
    process.exit(1);
  }

  console.log(`密钥文件: ${SITE}/${KEY}.txt`);
  console.log(`待推送 ${urls.length} 条 URL\n`);

  let failed = 0;
  for (let i = 0; i < urls.length; i += BATCH_SIZE) {
    const batch = urls.slice(i, i + BATCH_SIZE);
    const n = Math.floor(i / BATCH_SIZE) + 1;
    try {
      const { status, body } = await submit(batch);
      const ok = status === 200 || status === 202;
      if (!ok) failed++;
      console.log(`${ok ? "✓" : "✗"} 批次 ${n} (${batch.length} 条) → HTTP ${status} ${explain(status)}`);
      if (!ok && body) console.log(`  响应: ${body.slice(0, 200)}`);
    } catch (err) {
      failed++;
      console.log(`✗ 批次 ${n} 请求异常: ${err.message}`);
    }
  }

  console.log(
    failed === 0
      ? "\n全部提交成功。Bing / Yandex 通常数小时内开始抓取。"
      : `\n有 ${failed} 个批次失败，见上方响应码说明。`
  );
  process.exit(failed === 0 ? 0 : 1);
}

main().catch((err) => {
  console.error(`脚本异常: ${err.message}`);
  process.exit(1);
});
