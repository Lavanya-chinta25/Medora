import React from "react";
import location from "../assets/map.jpg"; // Path to the map image in your assets folder

const Contact2 = () => {
  return (
    <section className="py-16 px-4 lg:px-20 bg-gray-100 top-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white shadow-md rounded-tl-[50px] rounded-br-[50px] p-8 relative border-t-8 border-b-8 border-[#185a79]">
          <h2 className="text-2xl font-bold text-[#153D55] mb-6">
            Connect with Us Today
          </h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="border border-gray-300 rounded-md py-2 px-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border border-gray-300 rounded-md py-2 px-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 rounded-md w-full py-2 px-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              placeholder="Subject"
              className="border border-gray-300 rounded-md w-full py-2 px-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="border border-gray-300 rounded-md w-full py-2 px-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
            <button
              type="submit"
              className="bg-[#185a79] text-white py-2 px-6 rounded-md hover:bg-[153d55] transition"
            >
              Send a Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-[#185a79] font-semibold">GET IN TOUCH</h3>
          <h2 className="text-2xl font-bold text-[#153d55]">
            Inquire About Upcoming Medical Camps
          </h2>
          <p className="text-gray-600">
            Reach out to learn more about our upcoming medical camps. 
            We’re committed to providing accessible healthcare to rural communities,
            offering consultations, treatments, and preventative care.
          </p>
          <div className="border rounded-lg overflow-hidden">
            <img
              src={location}
              alt="Location Map"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact2;
