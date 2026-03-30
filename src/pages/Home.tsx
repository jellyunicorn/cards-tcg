import Footer from "../sections/Footer";
import HomeHero from "../sections/HomeHero";
import HomeTestimonials from "../sections/HomeTestimonials";
import Navbar from "../sections/Navbar";
import HomeOverview from "../sections/HomeOverview";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HomeHero />
      <HomeOverview />
      <HomeTestimonials />
      <Footer />
    </div>
  );
}
