import React from "react";
import Link from "next/link";

//prefetched
const Header = () => {
  return (
    <header className="flex justify-between p-5 max-w-7x1 mx-auto">
      <div className="flex items-center space-x-5">
        <Link href="/">
          <img className="w-44 object-contain cursor-pointer" src="https://links.papareact.com/yvf" alt="medium logo" />
        </Link>

        <div className="hidden md:inline-flex items-center space-x-5">
          <h3>About</h3>
          <h3>Contact</h3>
          <h3 className="text-white bg-green-600 px-4 py-1 rounded-full hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
            Follow
          </h3>
        </div>
      </div>
      <div className="flex items-center space-x-5 text-green-600 cursor-pointer">
        <h3>Sign In</h3>
        <h3 className="border px-4 py-1 rounded-full border-green-600 hover:text-white hover:bg-green-500 hover:scale-105 transition-transform duration-250 cursor-pointer">
          Get Started
        </h3>
      </div>
    </header>
  );
};

export default Header;
