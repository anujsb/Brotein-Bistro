import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-screen max-h-20 backdrop-blur-sm shadow-md fixed grid grid-flow-col">
      <div className="flex justify-between items-center w-full p-4">
        <img src="logo.png" alt="logo" className="h-14 max-h-16 m-1" />
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <img className="w-10 h-10" src="ham.svg" alt="ham" />
          </button>
        </div>
        <div className="hidden md:flex justify-end items-center space-x-5 mx-5">
          <Link
            className="bg-[#FBE7CB] rounded-full font-semibold py-2 px-4 shadow-md"
            role="button"
            to="/"
          >
            Order Now
          </Link>
          <Link
            className="rounded-full font-semibold py-2 px-4 border-black border shadow-md"
            role="button"
            to="/"
          >
            See Plans
          </Link>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-white w-full shadow-md">
          <Link
            className="bg-[#FBE7CB] rounded-full font-semibold py-2 px-4 my-2 shadow-md w-11/12 text-center"
            role="button"
            to="/"
            onClick={() => setIsOpen(false)}
          >
            Order Now
          </Link>
          <Link
            className="rounded-full font-semibold py-2 px-4 my-2 border-black border shadow-md w-11/12 text-center"
            role="button"
            to="/"
            onClick={() => setIsOpen(false)}
          >
            See Plans
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
