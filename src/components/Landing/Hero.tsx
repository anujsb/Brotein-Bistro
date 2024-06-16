import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="w-full h-screen  snap-start bg ">
      <div className="grid md:grid-flow-col lg:grid-flow-col sm:grid-flow-row md:grid-cols-2 lg:grid-cols-2 h-screen">
        <div className="h-full flex justify-end order-1 md:order-2">
          {/* <img className="h-screen " src="line.png" alt="line" /> */}
          <img className="bg-hero " src="hero6.png" alt="hero-image" />
        </div>
        <div className="flex flex-col justify-center items-center order-2 md:order-1">
          <h1 className="text-7xl font-bold">
            The <br /> Muscle <br /> Friendly <br /> Bistro
          </h1>
          {/* <p className=" ">
            Personalized diet plans
            <br /> delivered to your door.
          </p> */}
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
