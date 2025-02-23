import FeaturedCourses from "./components/FeaturedCourses";
import HeroSection from "./components/HeroSection";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[.96] antialiased bg-grid-white/[.02]">
      <div className="min-h-screen pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
        <HeroSection />
        <FeaturedCourses />
      </div>
    </main>
  );
}
