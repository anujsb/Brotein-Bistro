import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div className="w-full  snap-start min-h-screen px-10 py-20  flex flex-col justify-center items-center ">
      <div className="mb-10">
        <h1 className="text-5xl font-bold text-gray-800">Our Services</h1>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-8 w-full max-w-7xl">
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <img
            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            alt="card-image"
            className="rounded-t-xl w-full h-48 object-cover"
          />
          <h2 className="text-2xl font-semibold mt-4">healthy Cafe</h2>
          <p className="text-gray-600 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio.
          </p>
          <Link to="/" className="text-black mt-4 inline-block">
            Get Directions
          </Link>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <img
            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            alt="card-image"
            className="rounded-t-xl w-full h-48 object-cover"
          />
          <h2 className="text-2xl font-semibold mt-4">Monthly Subscriptions</h2>
          <p className="text-gray-600 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio.
          </p>
          <Link to="/" className="text-black mt-4 inline-block">
            Learn More
          </Link>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <img
            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            alt="card-image"
            className="rounded-t-xl w-full h-48 object-cover"
          />
          <h2 className="text-2xl font-semibold mt-4 capitalize">
            Suppliments From leading brand
          </h2>
          <p className="text-gray-600 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio.
          </p>
          <Link to="/" className="text-black mt-4 inline-block"></Link>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <img
            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            alt="card-image"
            className="rounded-t-xl w-full h-48 object-cover"
          />
          <h2 className="text-2xl font-semibold mt-4 capitalize">
            Online delivery
          </h2>
          <p className="text-gray-600 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio.
          </p>
          <Link to="/" className="text-black mt-4 inline-block">
            Order Online
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Products;
