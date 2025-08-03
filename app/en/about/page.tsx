import Image from "next/image";
import type { Metadata } from "next";
import ImageCarousel from "@/components/ImageCarousel";

export const metadata: Metadata = {
  title: "About Us | Tokyo Chess Club (EN)",
};

export default function AboutPageEN() {
  return (
    <main className="w-full py-5 bg-black text-white">
      <header className="flex justify-center items-center py-5 min-w-0">
        <Image
          src="/images/logos/Logo black.png"
          alt="Tokyo Chess Club Logo"
          width={120}
          height={120}
          className="rounded"
          />
      </header>
      <section className="flex justify-center px-4">
  <div className="text-center bg-black text-white p-6 rounded-2xl shadow-sm">
    <p className="text-lg leading-relaxed">
      Tokyo Checkmates is a vibrant community of chess lovers in Tokyo. We gather weekly for friendly rapid and blitz games, often accompanied by drinks at local pubs. Whether you're experienced or new to the game, join us for fun, strategy, and great company.
    </p>
  </div>
</section>
      <ImageCarousel />

      {/* Info Section: Join Us, Location, Time */}
      <section className="flex justify-center px-4 mt-8">
        <div className="text-center bg-black text-white p-6 rounded-2xl shadow-sm max-w-xl w-full">
          <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-4">
            <strong>Join Us</strong></p>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-4">
            <strong>Location:</strong> <a href="https://maps.app.goo.gl/ZMcn8KGN32huFjpM7" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-400">THE ALDGATE British Pub</a>
          </p>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            <strong>Time:</strong> Every Wednesday from 19:30</p>
        </div>
      </section>
      {/* End Info Section */}
      
      <div className="flex justify-center mt-8">
        <a
          href="/jp/about"
          className="bg-black hover:bg-gray-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200"
        >
          日本語
        </a>
      </div>
      
    </main>
  );
}
