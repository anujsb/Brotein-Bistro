import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="w-full h-screen  snap-start bg ">
      {/* <div className="grid md:grid-flow-col lg:grid-flow-col sm:grid-flow-row md:grid-cols-2 lg:grid-cols-2 h-screen"> */}
      <div className="grid h-screen sm:grid-flow-row md:grid-flow-col lg:grid-flow-col sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div className="flex justify-end order-1 md:order-2">
          {/* <img className="h-screen " src="line.png" alt="line" /> */}
          <img className="bg-hero " src="hero6.png" alt="hero-image" />
        </div>
        <div className=" order-2 md:order-1 flex flex-col justify-center items-center">
          {/* <div className="lg:mt-20 md:mt-20 sm:mt-0 flex flex-col items-center"> */}
          {/* <div className=" "> */}
            <h1 className="text-6xl font-bold ">
              The Muscle <br /> Friendly Bistro
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
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
