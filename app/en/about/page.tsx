// app/en/about/page.tsx
import { sanityClient } from "@/lib/sanity";
import ImageCarousel from "@/components/ImageCarousel";
import Image from "next/image"; // Add this import if not already present


export const revalidate = 86400; // 24 hours

interface InfoSection {
  joinText: string;
  locationName: string;
  locationLink: string;
  time: string;
}

interface AboutPageProps {
  description: string;
  infoSection: InfoSection;
}

export default async function AboutPage() {
  // Fetch the English About page content from Sanity
  const query = `*[_type == "aboutPage" && language == "EN"][0]{
    description,
    infoSection
  }`;

  const data: AboutPageProps = await sanityClient.fetch(query);
  const { description, infoSection } = data;

  // Fetch gallery images
const galleryQuery = `*[_type == "gallery"]{
  "images": images[].asset->url
}`;
const galleryData: { images: string[] }[] = await sanityClient.fetch(galleryQuery);
const galleryImages = galleryData.length > 0 ? galleryData[0].images : [];


  return (
    <main className="w-full min-h-screen py-5 bg-black text-white">
      {/* Logo Section */}
      <header className="flex justify-center items-center py-6">
        <Image
          src="/images/logos/Logo black.png"
          alt="Tokyo Chess Club Logo"
          width={120}
          height={120}
          className="rounded"
          priority
        />
      </header>
      {/* Description */}
      <section className="flex justify-center px-4">
        <div className="text-center bg-black text-white p-6 rounded-2xl shadow-sm">
          <p className="text-lg leading-relaxed">{description}</p>
        </div>
      </section>
      <ImageCarousel images={galleryImages} />


      {/* Info Section */}
      <section className="flex justify-center px-4 mt-8">
        <div className="text-center bg-black text-white p-6 rounded-2xl shadow-sm max-w-xl w-full">
          <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-4">
            <strong>{infoSection.joinText}</strong>
          </p>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-4">
            <strong>Location:</strong>{" "}
            <a
              href={infoSection.locationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-400"
            >
              {infoSection.locationName}
            </a>
          </p>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            <strong>Time:</strong> {infoSection.time}
          </p>
        </div>
      </section>
      {/* JP About Button */}
      <div className="flex justify-center mt-8">
        <a
          href="/jp/about"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200"
        >
          日本語
        </a>
      </div>
    </main>
  );
}
