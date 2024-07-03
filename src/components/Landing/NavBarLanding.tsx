import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="w-screen max-h-20 backdrop-blur-sm shadow-md fixed grid grid-flow-col z-20 ">
      {/* <div className="flex flex-row w-full"> */}
      <div className="flex justify-start items-center">
        <img src="logo.png" alt="logo" className="h-20 max-h-16 m-1" />
      </div>
      <div className="flex justify-end items-center lg:mx-5 md:mx-5 sm:mx-3">
        <Link
          className="bg-[#FBE7CB] rounded-full font-semibold py-2 px-4 m-1 shadow-md"
          role="button"
          to="/"
        >
          Order Now
        </Link>
        <a
          href="https://app.broteinbistro.com/plansdetails"
          className="rounded-full font-semibold  py-2 px-4 m-1 border-black border shadow-md"
          role="button"
        >
          See Plans
        </a>

        {/* <div>
          <img className="w-10 h-10" src="ham.svg" alt="ham" role="button" />
        </div> */}
      </div>
      {/* </div> */}
    </nav>
  );
};

export default NavBar;
