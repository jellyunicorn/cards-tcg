import { Link } from "react-router";
import Footer from "../sections/Footer";
import Navbar from "../sections/Navbar";
import graphic from "../assets/404.png"

export default function NotFound() {
  return (
    <div className="font-pjs">
      <Navbar />
      <div className="flex flex-col items-center-safe my-8 gap-4">
        <img
          src={graphic}
          alt="404 Not Found"
          className="h-64 object-scale-down"
        />
        <div className="flex flex-col gap-2 items-center-safe">
          <p className="text-4xl font-extrabold tracking-wide">
            404 Page Not Found
          </p>
          <p className="text-xl">Sorry, we couldn't find what you were looking for.</p>
        </div>
        <div className="flex justify-center-safe">
          <Link
            to="/"
            className="bg-[#5540dd] hover:bg-[#6377fc] px-3 py-2 rounded-md font-semibold text-white"
          >
            Return Home
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
