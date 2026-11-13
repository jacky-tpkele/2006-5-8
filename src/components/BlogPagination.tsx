"use client";

import { Link } from "@/i18n/navigation";
import { useSearchParams } from "next/navigation";

type BlogPaginationProps = {
  currentPage: number;
  totalPages: number;
  basePath: string;
};

export function BlogPagination({ currentPage, totalPages, basePath }: BlogPaginationProps) {
  const searchParams = useSearchParams();

  if (totalPages <= 1) return null;

  const getPageUrl = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    if (page === 1) {
      params.delete("page");
    } else {
      params.set("page", String(page));
    }
    const query = params.toString();
    return query ? `${basePath}?${query}` : basePath;
  };

  const pages: (number | string)[] = [];

  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
  } else {
    pages.push(1);

    if (currentPage > 3) {
      pages.push("...");
    }

    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (currentPage < totalPages - 2) {
      pages.push("...");
    }

    pages.push(totalPages);
  }

  return (
    <nav aria-label="Blog pagination" style={{ marginTop: 48, display: "flex", justifyContent: "center", gap: 8 }}>
      {currentPage > 1 && (
        <Link
          href={getPageUrl(currentPage - 1)}
          className="pagination-btn"
          aria-label="Previous page"
        >
          ← Previous
        </Link>
      )}

      {pages.map((page, index) => {
        if (page === "...") {
          return (
            <span key={`ellipsis-${index}`} className="pagination-ellipsis">
              …
            </span>
          );
        }

        const pageNum = page as number;
        const isActive = pageNum === currentPage;

        return (
          <Link
            key={pageNum}
            href={getPageUrl(pageNum)}
            className={`pagination-number ${isActive ? "active" : ""}`}
            aria-label={`Page ${pageNum}`}
            aria-current={isActive ? "page" : undefined}
          >
            {pageNum}
          </Link>
        );
      })}

      {currentPage < totalPages && (
        <Link
          href={getPageUrl(currentPage + 1)}
          className="pagination-btn"
          aria-label="Next page"
        >
          Next →
        </Link>
      )}
    </nav>
  );
}
