const Contact = () => {
  return (
    <section className="w-full h-screen snap-start  p-20 ">
      <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
      <p>Address: 123 Healthy Way, Fit Town, Wellness State</p>
      <p>Phone: (123) 456-7890</p>
      <p>Email: info@broteinbistro.com</p>
      <div className="my-4">
        {/* Embed Google Map */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345095677!2d144.9537353155042!3d-37.81720997975186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d28b5b4b7d95!2sMelbourne!5e0!3m2!1sen!2sau!4v1575281672344!5m2!1sen!2sau"
          width="100%"
          height="300"
          frameBorder="0"
          style={{ border: 0 }}
          // allowFullScreen=""
          aria-hidden="false"
          // tabIndex="0"
        ></iframe>
      </div>
      <form className="flex flex-col">
        <label htmlFor="name" className="mt-4">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="p-2 border border-gray-300 rounded"
          required
        />
        <label htmlFor="email" className="mt-4">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="p-2 border border-gray-300 rounded"
          required
        />
        <label htmlFor="message" className="mt-4">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="p-2 border border-gray-300 rounded"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded mt-4"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
