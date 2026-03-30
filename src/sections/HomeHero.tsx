import { Link } from "react-router";

export default function HomeHero() {
  return (
    <div className="bg-black text-white">
      <div className="grid grid-rows-1 lg:grid-cols-2 py-8 mx-16 lg:mx-32">
        <div className="order-2 lg:order-1 flex flex-col font-pjs justify-center items-end mt-4 md:mt-0">
          <p className="font-extrabold text-xl text-[#5540dd] tracking-widest">
            FEATURED PRODUCT
          </p>
          <p className="font-bold text-3xl">
            Limit Over Collection: The Rivals
          </p>
          <p>Releases March 18th</p>
          <div className="mt-8">
            <Link
              to="products"
              className="border-2 border-[#5540dd] hover:bg-[#5540dd] px-3 py-2 rounded-md font-semibold"
            >
              Shop now
            </Link>
          </div>
        </div>
        <div className="order-1 lg:order-2 flex justify-center">
          <img
            src="src/assets/locr_booster_crop.png"
            alt="LOCR cropped"
            className="border-l border-r border-gray-500 px-2 py-0.5"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
