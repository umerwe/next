"use client"

import { useState, useRef, useEffect } from "react"
import { categories, Category } from "@/data/categories"
import { AdjustmentsHorizontalIcon, ChevronDownIcon } from "@heroicons/react/24/outline"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { useLocale } from "next-intl"

const Categories = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const locale = useLocale()

  const localePrefix = `/${locale}`
  const normalizedPathname =
    pathname.startsWith(localePrefix) ? pathname.slice(localePrefix.length) || "/" : pathname

  const activeCategory: Category =
    categories.find(
      (item) =>
        normalizedPathname === item.link || (normalizedPathname === "/" && item.link === "/")
    ) || categories[0]

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleCategorySelect = () => {
    setIsDropdownOpen(false)
  }

  return (
    <div className="flex justify-between items-center px-4 sm:px-6 md:px-9 my-4">

      {/* 🟢 Desktop layout */}
      <div className="hidden md:flex flex-wrap gap-3 flex-grow">
        {categories.map((item, index) => {
          const isActive = normalizedPathname === item.link || (normalizedPathname === "/" && item.link === "/")
          const Icon = item.icon

          return (
            <Link
              key={index}
              href={item.link}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors duration-200 ${
                isActive
                  ? "bg-transparent text-header border-2 border-t-[#01c89b] border-r-[#01c89b] border-b-[#059afc] border-l-[#059afc]"
                  : "bg-gray-100 text-gray-400 border border-transparent hover:border-[#01c89b]"
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? "text-aqua" : "text-gray-500"}`} />
              <span className="text-sm font-semibold">{item.name}</span>
            </Link>
          )
        })}
      </div>

      {/* 🔵 Mobile Dropdown */}
      <div className="md:hidden flex-grow max-w-50 relative" ref={dropdownRef}>
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="w-full flex items-center justify-between gap-3 px-5 py-3 rounded-lg border-2 border-t-[#01c89b] border-r-[#01c89b] border-b-[#059afc] border-l-[#059afc] bg-white hover:bg-gray-50 transition-colors duration-200 shadow-sm"
        >
          <div className="flex items-center gap-3">
            <activeCategory.icon className="w-5 h-5 text-aqua" />
            <span className="text-sm font-semibold text-header">{activeCategory.name}</span>
          </div>
          <ChevronDownIcon
            className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
              isDropdownOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {isDropdownOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 overflow-hidden">
            <div className="py-2">
              {categories.map((item, index) => {
                const isActive =
                  normalizedPathname === item.link ||
                  (normalizedPathname === "/" && item.link === "/")
                const Icon = item.icon

                return (
                  <Link
                    key={index}
                    href={item.link}
                    onClick={handleCategorySelect}
                    className={`flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors duration-150 ${
                      isActive ? "bg-blue-50 border-r-4 border-[#01c89b]" : ""
                    }`}
                  >
                    <Icon className={`w-5 h-5 ${isActive ? "text-[#01c89b]" : "text-gray-500"}`} />
                    <span
                      className={`text-sm font-medium ${
                        isActive ? "text-[#01c89b]" : "text-gray-700"
                      }`}
                    >
                      {item.name}
                    </span>
                    {isActive && (
                      <div className="ml-auto w-2 h-2 bg-[#01c89b] rounded-full"></div>
                    )}
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </div>

      {/* Filter Icon - Always visible */}
      <div className="flex-shrink-0 ml-4">
        <button className="p-2 rounded-lg border-2 border-t-[#01c89b] border-r-[#01c89b] border-b-[#059afc] border-l-[#059afc] bg-white hover:bg-gray-50 transition-colors duration-200 shadow-sm">
          <AdjustmentsHorizontalIcon className="w-6 h-6 text-[#01c89b]" />
        </button>
      </div>
    </div>
  )
}

export default Categories
