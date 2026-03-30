import { Link } from "react-router";
import Navbar from "../sections/Navbar";
import Footer from "../sections/Footer";

export default function Unauthorized() {
  return (
    <div className="font-pjs">
      <Navbar />
      <div className="flex flex-col items-center-safe my-8 gap-4">
        <img
          src="/src/assets/403.png"
          alt="403 Forbidden"
          className="h-64 object-scale-down"
        />
        <div className="flex flex-col gap-2 items-center-safe">
          <p className="text-4xl font-extrabold tracking-wide">
            403 Forbidden
          </p>
          <p className="text-xl">
            Sorry, you are not authorized to view this page.
          </p>
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
