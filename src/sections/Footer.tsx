import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaBluesky } from "react-icons/fa6";
import { Link } from "react-router";

export default function Footer() {
  return (
    <div className="bg-black text-white font-pjs">
      <div className="flex flex-col md:flex-row py-12 gap-12 justify-center-safe">
        <div className="flex flex-col items-center md:items-start">
          <p className="text-2xl">CONTACT US</p>
          <div className="flex flex-col md:flex-row gap-3 mt-4 items-center">
            <input
              type="text"
              placeholder="Name"
              className="border-b border-white p-1 font-pjs focus:outline-none"
            />
            <input
              type="text"
              placeholder="Email"
              className="border-b border-white p-1 font-pjs focus:outline-none"
            />
          </div>
          <div className="flex justify-center">
            <textarea
              placeholder="Message"
              className="mt-4 md:w-134 h-30 border border-white p-1 font-pjs rounded-xl focus:outline-none"
            />
          </div>
          <div className="flex justify-center">
            <button className="mt-3 border border-white px-2 py-1.5 rounded-md font-pjs font-semibold hover:bg-white hover:text-[#2a2633] cursor-pointer">
              Submit
            </button>
          </div>
        </div>
        <div className="hidden md:block border-r border-gray-400"></div>
        <div className="flex flex-col items-center md:items-start">
          <p className="text-2xl">LINKS</p>
          <div className="flex flex-col mt-4 gap-2">
            <Link
              to="/"
              className="text-gray-400 hover:text-white hover:underline"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-400 hover:text-white hover:underline"
            >
              About Us
            </Link>
            <Link
              to="/products"
              className="text-gray-400 hover:text-white hover:underline"
            >
              Products
            </Link>
            <Link
              to="/articles"
              className="text-gray-400 hover:text-white hover:underline"
            >
              Articles
            </Link>
            <div className="flex gap-3 mt-2 pt-3 px-0.5 text-xl border-t border-gray-400">
              <a href="http://twitter.com">
                <FaTwitter />
              </a>
              <a href="http://facebook.com">
                <FaFacebook />
              </a>
              <a href="http://bsky.app">
                <FaBluesky />
              </a>
              <a href="http://instagram.com">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
