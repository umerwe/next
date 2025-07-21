"use client";

import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { categories } from "@/data/categories";

export function useLayoutVisibility() {
  const pathname = usePathname();
  const locale = useLocale();

  const localePrefix = `/${locale}`;
  const normalizedPath =
    pathname.startsWith(localePrefix)
      ? pathname.slice(localePrefix.length) || "/"
      : pathname;

  const segments = normalizedPath.split("/").filter(Boolean);
  const basePath = `/${segments.slice(0, 2).join("/")}`; // e.g., /listing/room567

  const isHomePage = normalizedPath === "/";
  const isDetailPage = segments.length > 2; // e.g., /listing/veh341/C6F0Y3
  const isCategoryPage = categories.some((cat) => cat.link === basePath);

  return {
  showCategories: isCategoryPage && !isDetailPage,
  showSearchBar: (isHomePage || isCategoryPage) && !isDetailPage,
};

}
