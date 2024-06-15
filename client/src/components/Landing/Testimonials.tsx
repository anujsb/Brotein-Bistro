const Testimonials = () => {
  return (
    <section className="w-full h-screen snap-start  p-20 text-black">
      <h2 className="text-3xl font-bold mb-4">What Our Customers Are Saying</h2>
      <blockquote className="border-l-4 border-orange-500 pl-4 mb-4">
        <p>
          "Brotein Bistro has completely transformed the way I eat. The meals
          are delicious and perfectly tailored to my dietary needs!"
        </p>
        <cite className="block text-right text-sm text-gray-600">
          - Customer 1
        </cite>
      </blockquote>
      <blockquote className="border-l-4 border-orange-500 pl-4 mb-4">
        <p>
          "I love the convenience and the variety of options available. Highly
          recommend to anyone looking to improve their diet."
        </p>
        <cite className="block text-right text-sm text-gray-600">
          - Customer 2
        </cite>
      </blockquote>
      <blockquote className="border-l-4 border-orange-500 pl-4">
        <p>
          "Amazing service and fantastic food. Brotein Bistro has helped me stay
          on track with my health goals."
        </p>
        <cite className="block text-right text-sm text-gray-600">
          - Customer 3
        </cite>
      </blockquote>
    </section>
  );
};

export default Testimonials;
