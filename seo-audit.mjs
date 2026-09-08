import fs from "node:fs";

const src = fs.readFileSync("src/data/site.ts", "utf8");
const re = /seo(Title|Description):\s*"((?:[^"\\]|\\.)*)"/g;

const rows = [];
let m;
while ((m = re.exec(src))) {
  const value = JSON.parse(`"${m[2]}"`);
  const limit = m[1] === "Title" ? 60 : 160;
  if (value.length > limit) {
    rows.push({
      line: src.slice(0, m.index).split("\n").length,
      kind: m[1],
      len: value.length,
      limit,
      value,
    });
  }
}

const titles = rows.filter((r) => r.kind === "Title");
const descs = rows.filter((r) => r.kind === "Description");
console.log(`超标总数: ${rows.length}  (title ${titles.length} / desc ${descs.length})`);
console.log("");
for (const r of rows) {
  console.log(`L${r.line}\t${r.kind}\t${r.len}/${r.limit}\t${r.value}`);
}
