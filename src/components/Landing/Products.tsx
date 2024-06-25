import { Link } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Products = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const items = [
    {
      id: 1,
      title: "Healthy Cafe",
      imgSrc: "hero29.jpg",
      description: "Enjoy a variety of healthy meals at our cafe.",
    },
    {
      id: 2,
      title: "Monthly Subscriptions",
      imgSrc:
        "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      description: "Subscribe to our monthly plans for the best value.",
    },
    {
      id: 3,
      title: "Supplements From Leading Brand",
      imgSrc: "/suppliments.avif",
      description: "Get the best supplements from top brands.",
    },
    {
      id: 4,
      title: "Online Delivery",
      imgSrc: "/delivery.jpg",
      description: "We deliver your orders quickly and safely.",
    },
  ];

  return (
    <div className="w-full snap-start min-h-screen px-4 md:px-10 py-10 md:py-20 flex flex-col justify-center items-center">
      <div className="mb-10">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
          Our Services
        </h1>
      </div>
      <div className="grid grid-rows-4 md:grid-rows-2 gap-6 w-full max-w-7xl px-20">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 w-full">
          <motion.div
            layoutId="1"
            className="col-span-1 md:col-span-3 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 h-60 cursor-pointer"
            onClick={() => setSelectedId(1)}
          >
            <img
              src="hero29.jpg"
              alt="card-image"
              className="rounded-t-xl w-full h-36 object-cover"
            />
            <div className="px-3">
              <h2 className="text-2xl font-semibold mt-4">Healthy Cafe</h2>
              <button className="text-black mt-4 inline-block">
                Learn More
              </button>
            </div>
          </motion.div>
          <motion.div
            layoutId="2"
            className="col-span-1 md:col-span-2 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 h-60 cursor-pointer"
            onClick={() => setSelectedId(2)}
          >
            <img
              src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
              alt="card-image"
              className="rounded-t-xl w-full h-36 object-cover"
            />
            <div className="px-3">
              <h2 className="text-2xl font-semibold mt-4">
                Monthly Subscriptions
              </h2>
              <Link to="/" className="text-black mt-4 inline-block">
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 w-full">
          <motion.div
            layoutId="3"
            className="col-span-1 md:col-span-2 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 h-60 cursor-pointer"
            onClick={() => setSelectedId(3)}
          >
            <img
              src="/suppliments.avif"
              alt="card-image"
              className="rounded-t-xl w-full h-36 object-cover"
            />
            <div className="px-3">
              <h2 className="text-2xl font-semibold mt-4 capitalize">
                Supplements From Leading Brand
              </h2>
              <Link to="/" className="text-black mt-4 inline-block">
                Learn More
              </Link>
            </div>
          </motion.div>
          <motion.div
            layoutId="4"
            className="col-span-1 md:col-span-3 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 h-60 cursor-pointer"
            onClick={() => setSelectedId(4)}
          >
            <img
              src="/delivery.jpg"
              alt="card-image"
              className="rounded-t-xl w-full h-36 object-cover"
            />
            <div className="px-3">
              <h2 className="text-2xl font-semibold mt-4 capitalize">
                Online Delivery
              </h2>
              <Link to="/" className="text-black mt-4 inline-block">
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {selectedId && (
          <motion.div
            layoutId={selectedId.toString()}
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50"
          >
            <div className="bg-white rounded-xl shadow-lg max-w-lg mx-auto">
              <motion.img
                src={items.find((item) => item.id === selectedId)?.imgSrc}
                alt="card-image"
                className="rounded-t-xl w-full h-36 object-cover"
              />
              <motion.h2 className="text-3xl font-bold mt-4 px-3 mb-2">
                {items.find((item) => item.id === selectedId)?.title}
              </motion.h2>
              <motion.p className="text-gray-600 mb-4 px-3">
                {items.find((item) => item.id === selectedId)?.description}
              </motion.p>
              <motion.button
                className="text-black mb-4 inline-block px-3"
                onClick={() => setSelectedId(null)}
              >
                Close
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Products;
