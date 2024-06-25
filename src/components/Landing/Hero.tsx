import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="w-full h-screen snap-start bg ">
      <div className="grid sm:grid-flow-row md:grid-flow-col lg:grid-flow-col sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">
        {/* Conditional rendering for the image div based on screen size */}
        <div className="hidden md:flex justify-end order-1 md:order-2">
          <img className="bg-hero " src="hero6.png" alt="hero-image" />
        </div>
        <div className="order-2 md:order-1 flex flex-col justify-center items-center h-screen">
          <h1 className="text-5xl font-bold">
            The
            <br /> Muscle <br /> Friendly
            <br /> Bistro
          </h1>

          <div className="mt-10">
            <Link
              className="bg-[#FBE7CB] rounded-full font-semibold py-2 px-4 mr-5 shadow-md"
              role="button"
              to="/"
            >
              Order Now
            </Link>
            <Link
              className="rounded-full font-semibold py-2 px-4 mr-5 border-black border shadow-md"
              role="button"
              to="/"
            >
              See Plans
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
