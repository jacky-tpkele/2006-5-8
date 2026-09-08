import type { MetadataRoute } from "next";
import { standards } from "@/data/standards";
export default function sitemap():MetadataRoute.Sitemap{const base="https://www.tpkele.com";return[{url:`${base}/resources/standards-database`,changeFrequency:"weekly",priority:.9},...standards.map((s)=>({url:`${base}/resources/standards-database/${s.slug}`,changeFrequency:"monthly" as const,priority:.7}))]}
