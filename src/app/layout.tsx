/**
 * 根 layout —— 仅做透传。
 *
 * 真正的 <html> / <body> 与 Header/Footer 在 src/app/[locale]/layout.tsx 中输出，
 * 因为只有那里才能拿到当前语言。Next.js 要求 app/ 根目录必须存在 layout，
 * 所以这里保留一个最小实现。
 */
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
