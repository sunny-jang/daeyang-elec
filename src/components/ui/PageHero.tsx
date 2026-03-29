interface PageHeroProps {
  title: string;
  description?: string;
}

export default function PageHero({ title, description }: PageHeroProps) {
  return (
    <section className="bg-[var(--color-primary-dark)] text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
        {description && (
          <p className="mt-3 text-gray-300 text-lg">{description}</p>
        )}
      </div>
    </section>
  );
}
