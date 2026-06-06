import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import { COMPANY, PRODUCTS, PRODUCT_CATEGORIES } from "@/constants/company";

export const metadata = {
  title: `주요개발제품 | ${COMPANY.name}`,
};

export default function ProductsPage() {
  return (
    <>
      <PageHero title="주요개발제품" description="대양전자의 주요 개발 제품 라인업" />
      <section className="max-w-6xl mx-auto px-4 py-16">
        {PRODUCT_CATEGORIES.map((category) => {
          const items = PRODUCTS.filter((p) => p.categoryId === category.id);
          if (items.length === 0) return null;
          return (
            <div key={category.id} id={category.id} className="mb-16 scroll-mt-28">
              <h2 className="text-2xl font-bold text-[var(--color-primary-dark)] mb-6 pb-3 border-b-2 border-[var(--color-primary)] inline-block">
                {category.name}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {items.map((product) => (
                  <Link
                    key={product.id}
                    href={`/products/${product.id}`}
                    className="border border-[var(--color-gray-200)] rounded-xl overflow-hidden hover:shadow-lg transition-shadow group"
                  >
                    <div className="relative aspect-[4/3] bg-white overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-[var(--color-primary-dark)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-[var(--color-gray-600)] text-sm leading-relaxed">
                        {product.description}
                      </p>
                      <div className="mt-4 text-[var(--color-primary)] text-sm font-semibold">
                        자세히 보기 &rarr;
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
