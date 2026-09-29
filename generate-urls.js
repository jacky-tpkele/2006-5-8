const site = { url: "https://www.tpkele.com" };
const locales = ["en", "ru"];

const staticPaths = [
  "/",
  "/about",
  "/products",
  "/projects",
  "/projects/zimbabwe-sirdc-solar-project",
  "/solar-dc-protection",
  "/blog",
  "/contact",
  "/resources",
  "/resources/technical-guides",
  "/resources/application-solutions",
  "/resources/market-access-advisor",
  "/resources/standards-database",
  "/resources/buyer-support",
  "/resources/faq",
  "/mcb-manufacturer",
  "/spd-manufacturer",
  "/ats-manufacturer",
  "/combiner-box-manufacturer",
  "/energy-meter-manufacturer",
  "/voltage-protector-manufacturer",
];

console.log("=== 完整的网站 URL 列表（用于 Google Search Console 提交）===\n");

console.log("【核心页面 - 优先提交】");
staticPaths.forEach(path => {
  locales.forEach(locale => {
    const url = path === "/" 
      ? `${site.url}/${locale}` 
      : `${site.url}/${locale}${path}`;
    console.log(url);
  });
});

console.log("\n【新增 RESOURCES 页面 - 重点提交】");
const resourcePages = [
  "/resources",
  "/resources/technical-guides",
  "/resources/application-solutions",
  "/resources/market-access-advisor",
  "/resources/standards-database",
  "/resources/buyer-support",
  "/resources/faq",
];

resourcePages.forEach(path => {
  locales.forEach(locale => {
    console.log(`${site.url}/${locale}${path}`);
  });
});

console.log("\n【新增 PROJECTS 页面 - 重点提交】");
const projectPages = [
  "/projects",
  "/projects/zimbabwe-sirdc-solar-project",
];

projectPages.forEach(path => {
  locales.forEach(locale => {
    console.log(`${site.url}/${locale}${path}`);
  });
});
