"use client";

import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { categories } from "@/data/categories";

export function useShouldShowSearchBar() {
  const pathname = usePathname();
  const locale = useLocale();

  const localePrefix = `/${locale}`;
  
  const normalizedPathname =
    pathname.startsWith(localePrefix)
      ? pathname.slice(localePrefix.length) || "/"
      : pathname;

  return categories.some((category) => {
    if (category.link === "/") {
      return normalizedPathname === "/";
    }
    return normalizedPathname === category.link;
  });
}
