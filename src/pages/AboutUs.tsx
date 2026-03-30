import Footer from "../sections/Footer";
import Navbar from "../sections/Navbar";
import AboutUsPersonalMessage from "../sections/AboutUsPersonalMessage";
import AboutUsTeam from "../sections/AboutUsTeam";
import AboutUsCulture from "../sections/AboutUsCulture";

export default function AboutUs() {
  return (
    <div>
      <Navbar />
      <AboutUsPersonalMessage />
      <AboutUsCulture />
      <AboutUsTeam />
      <Footer />
    </div>
  );
}
