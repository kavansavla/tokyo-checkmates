import Image from "next/image";
import type { Metadata } from "next";
import ImageCarousel from "@/components/ImageCarousel";

export const metadata: Metadata = {
  title: "About Us | Tokyo Chess Club (JP)",
};

export default function AboutPageJP() {
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
      東京チェックメイツは、東京を拠点とするチェス愛好家たちの活気あるコミュニティです。毎週集まり、地元のパブで飲みながら、ラピッドやブリッツの親しみやすい対局を楽しんでいます。経験豊富な方も初心者の方も、ぜひ私たちと一緒に、チェスと戦略、そして楽しい時間を過ごしましょう。
    </p>
  </div>
</section>
      <ImageCarousel />

      {/* Info Section: Join Us, Location, Time */}
      <section className="flex justify-center px-4 mt-8">
        <div className="text-center bg-black text-white p-6 rounded-2xl shadow-sm max-w-xl w-full">
          <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-4">
            <strong>参加しませんか？</strong></p>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-4">
            <strong>場所:</strong> <a href="https://maps.app.goo.gl/ZMcn8KGN32huFjpM7" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-400">THE ALDGATE British Pub</a>
          </p>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            <strong>時間:</strong> 毎週水曜日 19:30から</p>
        </div>
      </section>
      {/* End Info Section */}
      
      <div className="flex justify-center mt-8">
        <a
          href="/en/about"
          className="bg-black hover:bg-gray-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200"
        >
          English
        </a>
      </div>
      
    </main>
  );
}
