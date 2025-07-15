"use client";

import { categories } from "@/data/categories";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useLocale } from "next-intl";

const Categories = () => {
  const pathname = usePathname();
  const locale = useLocale();

  const localePrefix = `/${locale}`;
  const normalizedPathname = pathname.startsWith(localePrefix)
    ? pathname.slice(localePrefix.length) || "/"
    : pathname;

  return (
    <div className="flex flex-wrap justify-between px-9 my-4 gap-y-4">
      <div className="flex flex-wrap gap-4 min-w-0 flex-grow">
        {categories.map((item, index) => {
          const isActive =
            normalizedPathname === item.link ||
            (normalizedPathname === "/" && item.link === "/");

          const Icon = item.icon;

          return (
            <Link
              key={index}
              href={item.link}
              locale={locale} 
              className={`flex items-center gap-2 px-5.5 py-2.5 rounded-full cursor-pointer transition-colors duration-200
                ${
                  isActive
                    ? "bg-transparent text-header border-2 border-[#01c89b] border-t-[#01c89b] border-r-[#01c89b] border-b-[#059afc] border-l-[#059afc]"
                    : "bg-gray-100 text-gray-400 border border-transparent hover:border-[#01c89b]"
                }
              `}
            >
              <Icon
                className={`w-5 h-5 ${isActive ? "text-aqua" : "text-gray-500"}`}
              />
              <h1 className="text-sm font-semibold">{item.name}</h1>
            </Link>
          );
        })}
      </div>

      <div className="my-auto flex-shrink-0">
        <AdjustmentsHorizontalIcon
          className="w-10 h-10 stroke-[#01c89b] border-2 rounded-md p-1.5
          border-t-[#01c89b] border-r-[#01c89b] border-b-[#059afc]
           border-l-[#059afc]"
        />
      </div>
    </div>
  );
};

export default Categories;
