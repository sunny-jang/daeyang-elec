import Link from "next/link";
import { COMPANY, NAV_ITEMS } from "@/constants/company";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-primary-dark)] text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="md:col-span-1">
            <div className="font-bold text-xl mb-2">{COMPANY.name}</div>
            <div className="text-sm text-gray-300 mb-4">{COMPANY.nameEn}</div>
            <div className="text-sm text-gray-300 space-y-1">
              <p>사업자등록번호. {COMPANY.businessNumber}</p>
              <p>Tel. {COMPANY.phone}</p>
              <p>Email. {COMPANY.email}</p>
              {COMPANY.address && <p>{COMPANY.address}</p>}
            </div>
          </div>

          {/* Nav links */}
          {NAV_ITEMS.map((item) => (
            <div key={item.label}>
              <h3 className="font-semibold mb-3 text-[var(--color-accent)]">
                {item.label}
              </h3>
              <ul className="space-y-2 text-sm text-gray-300">
                {"children" in item && item.children ? (
                  item.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        className="hover:text-white transition-colors"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))
                ) : (
                  <li>
                    <Link
                      href={item.href}
                      className="hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
