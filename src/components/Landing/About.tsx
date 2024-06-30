const About = () => {
  return (
    <section className="w-full snap-start">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Desktop Image */}
        <div className="hidden md:flex justify-start">
          <img className="h-screen shadow-lg rounded-r-lg" src="/about3.jpg" alt="image desktop" />
        </div>

        <div className="px-10 py-20">
          <div>
            <h1 className="text-slate-500 mb-2">ABOUT BROTEIN BISTRO</h1>
          </div>
          <div className="text-4xl md:text-6xl uppercase font-semibold leading-tight col-span-1 md:col-span-2 mb-2">
            Empowering your
            <br /> fitness journey
          </div>

          {/* Mobile Image */}
          <div className="flex justify-start md:hidden">
            <img className="shadow-lg rounded-lg mb-2" src="/about3.jpg" alt="image mobile" />
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
