import FeaturedCourses from "./components/FeaturedCourses";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import MovingCards from "./components/MovingCards";
import ReviewSection from "./components/ReviewSection";
import UpcomingWebinars from "./components/UpcomingWebinars";
import WhyChooseUs from "./components/WhyChooseUs";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[.96] antialiased bg-grid-white/[.02]">
      <div className="min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
        <HeroSection />
        <FeaturedCourses />
        <WhyChooseUs />
        <MovingCards />
        <UpcomingWebinars />
        <ReviewSection />
        <Footer />
      </div>
    </main>
  );
}
