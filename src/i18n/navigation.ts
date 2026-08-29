import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

/**
 * 语言感知的导航 API。
 * 用这里导出的 Link / redirect / usePathname / useRouter
 * 替换 next/link 与 next/navigation，链接会自动带上当前语言前缀。
 */
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
