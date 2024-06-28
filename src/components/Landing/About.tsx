const About = () => {
  return (
    <section className="w-full  snap-start px-10 py-20 ">
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 md:p-20"> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <div>
          <h1 className="text-slate-500">ABOUT BROTEIN BISTRO</h1>
        </div>
        <div className="text-4xl md:text-6xl uppercase font-semibold leading-tight col-span-1 md:col-span-2">
          Empowering your
          <br /> fitness journey
        </div>

        <div className="p-4 flex justify-center ">
          <img className="h-72" src="/about3.jpg" alt="" />
        </div>
        <div className="p-4 text-base md:text-">
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
