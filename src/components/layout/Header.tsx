"use client";

import Link from "next/link";
import { useState } from "react";
import { COMPANY, NAV_ITEMS } from "@/constants/company";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-[var(--color-primary-dark)] text-white text-sm">
        <div className="max-w-6xl mx-auto px-4 py-1.5 flex justify-end gap-6">
          <span>Tel. {COMPANY.phone}</span>
          <span>{COMPANY.email}</span>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[var(--color-primary)] rounded-lg flex items-center justify-center text-white font-bold text-lg">
              DY
            </div>
            <div>
              <div className="font-bold text-lg text-[var(--color-primary-dark)] leading-tight">
                {COMPANY.name}
              </div>
              <div className="text-[11px] text-[var(--color-gray-600)] tracking-wider">
                {COMPANY.nameEn}
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="px-4 py-2 text-[15px] font-medium text-[var(--color-gray-800)] hover:text-[var(--color-primary)] transition-colors"
                >
                  {item.label}
                </Link>
                {"children" in item && item.children && (
                  <div
                    className={`absolute top-full left-0 bg-white shadow-lg rounded-md py-2 min-w-[180px] transition-all ${
                      openDropdown === item.label
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-2"
                    }`}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-[var(--color-gray-600)] hover:text-[var(--color-primary)] hover:bg-[var(--color-gray-50)]"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="메뉴 열기"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`block h-0.5 bg-[var(--color-gray-800)] transition-transform ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block h-0.5 bg-[var(--color-gray-800)] transition-opacity ${mobileOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 bg-[var(--color-gray-800)] transition-transform ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t bg-white">
          {NAV_ITEMS.map((item) => (
            <div key={item.label} className="border-b border-[var(--color-gray-100)]">
              <Link
                href={item.href}
                className="block px-4 py-3 font-medium text-[var(--color-gray-800)]"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
              {"children" in item &&
                item.children?.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className="block px-8 py-2 text-sm text-[var(--color-gray-600)]"
                    onClick={() => setMobileOpen(false)}
                  >
                    {child.label}
                  </Link>
                ))}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
