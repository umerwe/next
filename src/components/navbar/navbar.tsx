"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BellIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import SearchBar from "./search-bar/search-bar";
import { navLinks } from "@/data/navlinks";
import Brand from "./brand";
import { useLayoutVisibility } from "@/hooks/use-layout-visibility";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { showSearchBar } = useLayoutVisibility();

  return (
    <div className="bg-header">
      <nav className="w-full px-7 md:px-11 py-4 flex items-center justify-between">
        <Brand />

        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-10 mr-10">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-white hover:underline">
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center bg-white rounded-full pl-3 pr-2 py-1 space-x-2 w-fit">
            <BellIcon className="h-5 w-5 text-green-500" />
            <Image
              src="/profile-img.webp"
              alt="User Avatar"
              className="rounded-full"
              width={28}
              height={28}
            />
          </div>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-white focus:outline-none">
            {mobileOpen ? <XMarkIcon className="w-10 h-10" /> : <Bars3Icon className="w-10 h-10" />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="md:hidden px-4 pb-4 space-y-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-white hover:underline"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}

      {showSearchBar && <SearchBar />}
    </div>
  );
}
