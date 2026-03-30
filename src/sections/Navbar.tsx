import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router";
import useAuth from "../stores/useAuth";
import { FaUser } from "react-icons/fa";
import { HiXMark } from "react-icons/hi2";

export default function Navbar() {
  const { user, logout } = useAuth();
  const [linksBarOpen, setLinksBarOpen] = useState<boolean>(false);
  return (
    <div className="bg-[#76c1ff] font-pjs flex flex-col">
      <div className="flex flex-wrap items-center justify-between px-6 md:px-12 py-3">
        <div className="order-1 md:order-1 max-w-37.5">
          <img
            src="/src/assets/logo.png"
            alt="Company logo"
            className="w-[80%] h-[80%]"
          />
        </div>

        {/** Layout desktop */}
        <div className="hidden md:flex md:order-2 flex-wrap items-center justify-between gap-6">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/about" className="hover:underline">
            About Us
          </Link>
          <Link to="/products" className="hover:underline">
            Products
          </Link>
          <Link to="/articles" className="hover:underline">
            Articles
          </Link>
        </div>
        {user === null ? (
          <div className="hidden md:flex md:order-3 flex-wrap items-center justify-between gap-6">
            <Link to="/login" className="hover:underline">
              Login
            </Link>
            <Link to="/register" className="hover:underline">
              Register
            </Link>
          </div>
        ) : (
          <div className="hidden md:flex md:order-3 flex-wrap items-center justify-between gap-6">
            <div className="flex flex-row gap-2 items-center-safe">
              <FaUser />
              <p className="font-semibold">Hello, {user.name}</p>
            </div>
            <Link to="/create-article" className="hover:underline">
              Create Article
            </Link>
            <button onClick={logout} className="hover:underline cursor-pointer">
              Logout
            </button>
          </div>
        )}

        {/** Layout mobile */}
        <div className="block order-2 md:hidden">
          <button onClick={() => setLinksBarOpen(!linksBarOpen)} className="cursor-pointer">
            {linksBarOpen ? (
              <HiXMark className="text-xl" />
            ) : (
              <RxHamburgerMenu className="text-xl" />
            )}
          </button>
        </div>
      </div>
      {linksBarOpen && (
        <div className="flex flex-col">
          {user === null ? (
            <div className="flex flex-col md:hidden bg-gray-200 items-end justify-between px-6 pb-3 pt-2 gap-2">
              <Link to="/login" className="hover:underline">
                Login
              </Link>
              <Link to="/register" className="hover:underline">
                Register
              </Link>
            </div>
          ) : (
            <div className="flex flex-col md:hidden bg-gray-200 items-end justify-between px-6 pb-3 pt-2 gap-2">
              <div className="flex gap-2 items-center">
                <FaUser />
                <p className="font-bold">Hello, {user.name}</p>
              </div>
              <Link to="/create-article" className="hover:underline">
                Create Article
              </Link>
              <button onClick={logout} className="hover:underline cursor-pointer">
                Logout
              </button>
            </div>
          )}
          <div className="flex flex-col md:hidden px-6 pb-3 pt-2 gap-2 items-start bg-gray-200 border-t border-gray-400">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <Link to="/about" className="hover:underline">
              About Us
            </Link>
            <Link to="/products" className="hover:underline">
              Products
            </Link>
            <Link to="/articles" className="hover:underline">
              Articles
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
