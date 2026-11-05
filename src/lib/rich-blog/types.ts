/**
 * 图文工作台静态发布的文章类型。
 *
 * 工作台产出的结构比官网内置的 RichBlogArticle 多出若干字段（category、heroImageCard 等），
 * 配图块也用 url 而不是 webp/png，所以这里放宽为 any，渲染由 RichBlogArticle 组件兜底。
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type RichBlogArticle = any;
