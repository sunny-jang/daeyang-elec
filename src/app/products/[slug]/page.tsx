import { notFound } from "next/navigation";
import PageHero from "@/components/ui/PageHero";
import { COMPANY, PRODUCTS } from "@/constants/company";

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

  return (
    <>
      <PageHero title="주요개발제품" description={product.name} />
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Product image placeholder */}
          <div className="bg-[var(--color-gray-100)] rounded-xl h-80 flex items-center justify-center text-6xl">
            {product.icon}
          </div>

          {/* Product info */}
          <div>
            <h2 className="text-3xl font-bold text-[var(--color-primary-dark)] mb-4">
              {product.name}
            </h2>
            <p className="text-[var(--color-gray-600)] leading-relaxed mb-8">
              {product.description}
            </p>

            <h3 className="text-lg font-semibold text-[var(--color-gray-800)] mb-4">
              주요 특징
            </h3>
            <ul className="space-y-2 text-[var(--color-gray-600)]">
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-primary)] mt-1">•</span>
                제품 특징을 입력해 주세요
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-primary)] mt-1">•</span>
                제품 특징을 입력해 주세요
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-primary)] mt-1">•</span>
                제품 특징을 입력해 주세요
              </li>
            </ul>

            <h3 className="text-lg font-semibold text-[var(--color-gray-800)] mt-8 mb-4">
              제품 사양
            </h3>
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["모델명", "모델명을 입력해 주세요"],
                  ["규격", "규격을 입력해 주세요"],
                  ["특징", "특징을 입력해 주세요"],
                ].map(([label, value]) => (
                  <tr key={label} className="border-b border-[var(--color-gray-200)]">
                    <td className="py-3 font-medium text-[var(--color-gray-800)] w-32">
                      {label}
                    </td>
                    <td className="py-3 text-[var(--color-gray-600)]">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
