import Image from "next/image";

interface PageHeroProps {
  title: string;
  description?: string;
  image?: string;
  imagePosition?: string;
}

export default function PageHero({ title, description, image, imagePosition = "center" }: PageHeroProps) {
  return (
    <section className="relative bg-[var(--color-primary-dark)] text-white py-16 overflow-hidden">
      {image && (
        <>
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            style={{ objectPosition: imagePosition }}
            priority
          />
          <div className="absolute inset-0 bg-[var(--color-primary-dark)]/70" />
        </>
      )}
      <div className="relative max-w-6xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
        {description && (
          <p className="mt-3 text-gray-300 text-lg">{description}</p>
        )}
      </div>
    </section>
  );
}
