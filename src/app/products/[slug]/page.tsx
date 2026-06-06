import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/ui/PageHero";
import { COMPANY, PRODUCTS, PRODUCT_CATEGORIES } from "@/constants/company";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.id === slug);
  if (!product) return {};
  return { title: `${product.name} | ${COMPANY.name}` };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.id === slug);
  if (!product) notFound();

  const category = PRODUCT_CATEGORIES.find((c) => c.id === product.categoryId);

  return (
    <>
      <PageHero title="주요개발제품" description={product.name} />
      <section className="max-w-6xl mx-auto px-4 py-16">
        {/* Top: image + overview */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="relative aspect-[4/3] bg-white border border-[var(--color-gray-200)] rounded-xl overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
          <div>
            {category && (
              <span className="inline-block text-sm font-semibold text-[var(--color-primary)] bg-[var(--color-gray-50)] px-3 py-1 rounded-full mb-4">
                {category.name}
              </span>
            )}
            <h2 className="text-3xl font-bold text-[var(--color-primary-dark)] mb-4">
              {product.name}
            </h2>
            <h3 className="text-lg font-semibold text-[var(--color-gray-800)] mb-2">
              제품 개요
            </h3>
            <p className="text-[var(--color-gray-600)] leading-relaxed">
              {product.overview}
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-[var(--color-primary-dark)] mb-6">
            주요 특징
          </h3>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
            {product.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3 text-[var(--color-gray-600)]">
                <span className="text-[var(--color-primary)] mt-1 shrink-0">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Specs table */}
        {product.specs && product.specs.length > 0 && (
          <div className="mb-16">
            <h3 className="text-xl font-bold text-[var(--color-primary-dark)] mb-6">
              주요 사양
            </h3>
            <table className="w-full text-sm border-t-2 border-[var(--color-primary)]">
              <tbody>
                {product.specs.map((spec) => (
                  <tr
                    key={spec.label}
                    className="border-b border-[var(--color-gray-200)]"
                  >
                    <th className="py-3.5 px-4 text-left font-semibold text-[var(--color-gray-800)] bg-[var(--color-gray-50)] w-44 align-top">
                      {spec.label}
                    </th>
                    <td className="py-3.5 px-4 text-[var(--color-gray-600)]">
                      {spec.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Groups (system composition / support fields) */}
        {product.groups && product.groups.length > 0 && (
          <div className="mb-16">
            <h3 className="text-xl font-bold text-[var(--color-primary-dark)] mb-6">
              {product.groups.length === 1 && product.groups[0].title === "개발 가능 지원분야"
                ? "개발 가능 지원분야"
                : "시스템 구성"}
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.groups.map((group) => (
                <div
                  key={group.title}
                  className="border border-[var(--color-gray-200)] rounded-xl p-6"
                >
                  <h4 className="font-bold text-[var(--color-primary-dark)] mb-3">
                    {group.title}
                  </h4>
                  <ul className="space-y-2">
                    {group.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-[var(--color-gray-600)]"
                      >
                        <span className="text-[var(--color-primary)] mt-0.5 shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Note */}
        {product.note && (
          <div className="mb-16 bg-[var(--color-gray-50)] border-l-4 border-[var(--color-primary)] rounded-r-lg p-6">
            <p className="text-[var(--color-gray-800)] leading-relaxed">
              {product.note}
            </p>
          </div>
        )}

        {/* CTA */}
        <div className="flex flex-wrap gap-4 pt-4 border-t border-[var(--color-gray-200)]">
          <Link
            href="/contact"
            className="px-6 py-3 bg-[var(--color-primary)] text-white font-semibold rounded-lg hover:bg-[var(--color-primary-light)] transition-colors"
          >
            이 제품 견적 문의하기
          </Link>
          <Link
            href="/products"
            className="px-6 py-3 border border-[var(--color-gray-200)] text-[var(--color-gray-800)] font-semibold rounded-lg hover:bg-[var(--color-gray-50)] transition-colors"
          >
            전체 제품 목록
          </Link>
        </div>
      </section>
    </>
  );
}
