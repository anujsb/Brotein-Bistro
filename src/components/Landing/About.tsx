const About = () => {
  return (
    <section className="w-full  snap-start">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="lg:flex justify-start hidden md:flex">
          <img className="h-screen shadow-lg rounded-r-lg " src="/about3.jpg" alt="" />
        </div>
        <div className="px-10 py-20">
          <div>
            <h1 className="text-slate-500 mb-2">ABOUT BROTEIN BISTRO</h1>
          </div>
          <div className="text-4xl md:text-6xl uppercase font-semibold leading-tight col-span-1 md:col-span-2 mb-2">
            Empowering your
            <br /> fitness journey
          </div>
          <p className="m-2">
            At BROTEIN BISTRO, we prioritize health and fitness with a diverse
            menu of nutritious meals and protein-packed smoothies. Enjoy
            delicious, wellness-focused food whether you're a gym-goer,
            health-conscious, or simply love good food. Experience the perfect
            fusion of health and flavor at BROTEIN BISTRO!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
