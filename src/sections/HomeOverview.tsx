import { Link } from "react-router";
import lgs from "../assets/lgs.jpg";

export default function HomeOverview() {
  return (
    <div className="bg-[#d1eaff] py-4 font-pjs">
      <div className="lg:grid lg:grid-cols-2 bg-white mx-8 lg:mx-40 rounded-xl shadow-xl">
        <div className="overflow-hidden rounded-t-xl lg:rounded-l-xl">
          <img
            src={lgs}
            alt="Indoors of a LGS"
            className="h-full w-auto"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col px-8 py-4 justify-center gap-8">
          <div className="flex flex-row">
            <h1 className="mt-4 text-5xl font-extrabold tracking-wide text-center lg:text-end">
              What is <span className="text-[#5540dd]">CardsTCG</span>?
            </h1>
          </div>
          <div className="text-[18px]">
            <p className="text-center lg:text-end">
              CardsTCG is a premium online trading card game vendor providing
              products from a wide variety of trading card games as well as
              curated selections of trading card game accessories. Founded in
              2021 by a group of friends, we pride ourselves with providing
              exceptional service and support with our products.
            </p>
          </div>
          <div className="flex justify-center">
            <Link
              to="/about"
              className="bg-[#5540dd] hover:bg-[#6377fc] px-3 py-2 rounded-md font-semibold text-white"
            >
              About Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
