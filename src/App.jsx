// File: src/App.jsx
import React, { useState } from "react";
import ChatAssistant from "./components/ChatAssistant";

const App = () => {
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="font-sans text-gray-800 scroll-smooth">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
          <a
            href="#"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <img
              src="/Diamond Trading PLC logo.png"
              alt="Diamond Trading PLC Logo"
              className="h-8 md:h-10 w-auto"
              onError={(e) => {
                // Fallback if logo doesn't exist
                e.target.style.display = "none";
              }}
            />
            <h1 className="text-xl md:text-2xl font-bold text-blue-700 cursor-pointer">
              Diamond Trading PLC
            </h1>
          </a>
          <div className="hidden md:flex space-x-6 text-sm font-medium">
            <a href="#about" className="hover:text-blue-600">
              About
            </a>
            <a href="#mission" className="hover:text-blue-600">
              Mission
            </a>
            <a href="#vision" className="hover:text-blue-600">
              Vision
            </a>
            <a href="#values" className="hover:text-blue-600">
              Values
            </a>
            <a href="#services" className="hover:text-blue-600">
              Services
            </a>
            <a href="#competitive" className="hover:text-blue-600">
              Advantages
            </a>
            <a href="#contact" className="hover:text-blue-600">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
        {/* Primary Background - Factory Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('/dangotecement2.jpg')",
          }}
        ></div>

        {/* Logo Overlay - Top Area to Hide Logo/Title */}
        <div className="absolute top-0 left-0 right-0 h-1/4 bg-gradient-to-b from-blue-900/90 to-transparent"></div>

        {/* Side Overlays for Logo Areas */}
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-blue-900/80"></div>
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-900/80"></div>

        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/75 via-blue-800/65 to-blue-900/75"></div>

        {/* Content */}
        <div className="relative z-10 p-8 rounded-xl max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
            Building Ethiopia's Future
          </h2>
          <p className="text-xl md:text-2xl font-semibold drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)] max-w-3xl mx-auto">
            Delivering sustainable construction materials to major industries
            across Ethiopia with integrity and quality.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen flex items-center justify-center px-6 md:px-20 pt-20 relative bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('/10001.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="max-w-4xl w-full relative z-10 text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]">
            About Us
          </h2>
          <p className="leading-relaxed mb-6 text-lg md:text-xl font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            Diamond Trading PLC is a locally owned and registered Ethiopian
            company dedicated to providing high-quality construction materials
            to major industries across the nation.
          </p>
          <p className="leading-relaxed mb-6 text-lg md:text-xl font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            Since our establishment in 2023, we have become a trusted partner
            for leading cement manufacturers and industrial clients, delivering
            consistent product quality, dependable logistics, and professional
            service.
          </p>
          <p className="leading-relaxed text-lg md:text-xl font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            Located in Addis Ababa, Ethiopia, we take pride in contributing to
            the nation's growth by supplying materials that literally build
            Ethiopia's future.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section
        id="vision"
        className="min-h-screen flex items-center justify-center px-6 md:px-20 pt-20 relative bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('/vision.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="max-w-4xl w-full relative z-10 text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]">
            Our Vision
          </h2>
          <p className="leading-relaxed text-xl md:text-2xl max-w-3xl font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            To become the preferred supplier of construction materials in
            Ethiopia, recognized for our reliability, expertise, and commitment
            to sustainability.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section
        id="mission"
        className="min-h-screen flex items-center justify-center px-6 md:px-20 pt-20 relative bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('/10003.png')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="max-w-4xl w-full relative z-10 text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]">
            Our Mission
          </h2>
          <p className="leading-relaxed text-xl md:text-2xl max-w-3xl font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            To supply high-quality construction materials while delivering
            exceptional customer service and building long-term relationships
            with our clients and partners.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section
        id="values"
        className="min-h-screen flex items-center justify-center px-6 md:px-20 pt-20 relative bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('/10004.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="max-w-4xl w-full relative z-10 text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]">
            Our Values
          </h2>
          <ul className="list-disc list-inside space-y-4 text-lg md:text-xl font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            <li>
              <strong>Quality:</strong> We uphold the highest standards in every
              product we supply.
            </li>
            <li>
              <strong>Integrity:</strong> We operate with honesty, transparency,
              and accountability.
            </li>
            <li>
              <strong>Customer Focus:</strong> Our clients are at the center of
              everything we do.
            </li>
            <li>
              <strong>Sustainability:</strong> We promote environmentally
              responsible and energy-efficient practices.
            </li>
            <li>
              <strong>Reliability:</strong> Consistent delivery and dependable
              partnerships are the foundation of our business.
            </li>
          </ul>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="min-h-screen flex items-center justify-center px-6 md:px-20 pt-20 relative bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('/10005.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="max-w-4xl w-full relative z-10 text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]">
            Products & Services
          </h2>

          <div className="mb-8 space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                1. Construction Materials
              </h3>
              <p className="mb-4 text-lg md:text-xl leading-relaxed font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                As a leading Dangote Cement Distributor, we supply and deliver
                bulk and bagged cement across Ethiopia. Our partnerships with
                top-tier manufacturers ensure quality and reliability at every
                step.
              </p>
              <div className="mb-4">
                <p className="font-bold text-lg mb-2">Products:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Dangote Cement (All Grades)</li>
                  <li>
                    Aggregates & Related Construction Materials (on demand)
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-lg mb-2">Services:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Cement distribution and logistics</li>
                  <li>Product consultation and selection assistance</li>
                  <li>Bulk supply directly to factory or construction site</li>
                </ul>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                2. Coffee husk Supply
              </h3>
              <p className="mb-4 text-lg md:text-xl leading-relaxed font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                Diamond Trading PLC specializes in supplying high-quality coffee
                husk, an eco-friendly alternative fuel source widely used in
                Ethiopia's industrial sector.
              </p>
              <div>
                <p className="font-bold text-lg mb-2">Services:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Coffee husk supply and delivery</li>
                  <li>Product consultation and fuel optimization guidance</li>
                </ul>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                Monthly Supply Capacity
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/30">
                      <th className="p-3 font-bold">Product</th>
                      <th className="p-3 font-bold">Monthly Supply</th>
                      <th className="p-3 font-bold">Delivery</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/20">
                      <td className="p-3">Dangote Cement</td>
                      <td className="p-3">8,000 Metric Tons</td>
                      <td className="p-3">As per client preference</td>
                    </tr>
                    <tr>
                      <td className="p-3">Coffee husk</td>
                      <td className="p-3">1,800 Metric Tons</td>
                      <td className="p-3">Direct to factory plant</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                Target Market
              </h3>
              <p className="mb-4 text-lg md:text-xl leading-relaxed font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                Our products and services cater to industries seeking
                high-quality materials and sustainable fuel alternatives:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Cement Factories</li>
                <li>Gypsum Factories</li>
                <li>Ceramics Manufacturers</li>
                <li>Large-Scale Construction Companies</li>
              </ul>
            </div>
          </div>

          {/* Services Dropdown */}
          <div className="mt-8">
            <button
              onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              className="w-full md:w-auto px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white font-semibold text-lg rounded-lg shadow-lg transition-all duration-200 flex items-center justify-between gap-4"
            >
              <span>Our Services</span>
              <span className="text-xl transform transition-transform duration-200">
                {servicesDropdownOpen ? "▲" : "▼"}
              </span>
            </button>

            {servicesDropdownOpen && (
              <div className="mt-4 bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <ul className="space-y-4 text-lg md:text-xl font-semibold">
                  <li className="p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-200">
                    DANGOTE CEMENT DISTRIBUTION
                  </li>
                  <li className="p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-200">
                    COFFEE-HUSK SUPPLIER
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Competitive Advantage Section */}
      <section
        id="competitive"
        className="min-h-screen flex items-center justify-center px-6 md:px-20 pt-20 relative bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('/adv.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="max-w-4xl w-full relative z-10 text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]">
            Competitive Advantage
          </h2>
          <ul className="space-y-4 text-lg md:text-xl font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            <li>
              <strong>Expert Knowledge:</strong> Our team possesses in-depth
              expertise in the supply of construction materials, ensuring
              tailored, practical solutions.
            </li>
            <li>
              <strong>Local Presence:</strong> We have strong relationships with
              Ethiopian industrial clients and understand the local market
              dynamics.
            </li>
            <li>
              <strong>Reliable Delivery:</strong> We ensure timely delivery
              directly to our clients' plants, reducing logistical burdens.
            </li>
            <li>
              <strong>Sustainability Leadership:</strong> We support cleaner,
              renewable fuel options that contribute to Ethiopia's green energy
              vision.
            </li>
          </ul>
        </div>
      </section>

      {/* Achievements Section */}
      <section
        id="achievements"
        className="min-h-screen flex items-center justify-center px-6 md:px-20 pt-20 relative bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('/adv.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="max-w-4xl w-full relative z-10 text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]">
            Achievements
          </h2>
          <ul className="space-y-4 text-lg md:text-xl font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] list-disc list-inside">
            <li>
              Consistently maintained high customer satisfaction ratings since
              establishment.
            </li>
            <li>
              Recognized for promoting sustainable practices in coffee husk and
              alternative fuel supply.
            </li>
            <li>
              Expanded service coverage to multiple industrial zones across
              Ethiopia.
            </li>
          </ul>
        </div>
      </section>

      {/* Our Promise Section */}
      <section
        id="promise"
        className="min-h-screen flex items-center justify-center px-6 md:px-20 pt-20 relative bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('/adv.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="max-w-4xl w-full relative z-10 text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]">
            Our Promise
          </h2>
          <p className="leading-relaxed text-lg md:text-xl font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            At Diamond Trading PLC, we don't just supply materials — we build
            partnerships. Our commitment to quality, sustainability, and service
            excellence ensures that every delivery contributes to a stronger,
            more sustainable Ethiopia.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen flex items-center justify-center px-6 md:px-20 pt-20 relative bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('/10006.png')",
        }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-70"></div>
        <div className="max-w-6xl w-full relative z-10 flex flex-col md:flex-row items-start gap-12">
          {/* Left Side - Title */}
          <div className="flex-1">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]">
              Get In Touch
            </h2>
            <div className="mt-8 space-y-4 text-lg md:text-xl font-semibold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              <p className="text-2xl font-bold mb-2">Company Information</p>
              <p>Diamond Trading PLC</p>
              <p>
                <strong>Address:</strong> Lideta Woreda 07, House No. 04/316/2,
                Addis Ababa, Ethiopia
              </p>
              <p>
                <strong>General Manager:</strong> Tsige Abate Worku
              </p>
              <p>📞 Phone: +251-912 16 36 49</p>
              <p>
                📧 Email:{" "}
                <a
                  href="mailto:diamondtradingplc@gmail.com"
                  className="underline hover:text-blue-200"
                >
                  diamondtradingplc@gmail.com
                </a>
              </p>
              <p>
                🌐 Website:{" "}
                <a
                  href="https://diamondtradingplc.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-blue-200"
                >
                  https://diamondtradingplc.com
                </a>
              </p>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="flex-1 w-full">
            <form
              onSubmit={handleSubmit}
              className="bg-gray-900/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-700"
            >
              {/* Name Field */}
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-white font-semibold text-lg mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/50 transition-all duration-200"
                />
              </div>

              {/* Email Field */}
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-white font-semibold text-lg mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/50 transition-all duration-200"
                />
              </div>

              {/* Message Field */}
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-white font-semibold text-lg mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your message"
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/50 transition-all duration-200 resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gray-900 border-2 border-teal-400 rounded-lg text-white font-semibold text-lg hover:bg-teal-400 hover:text-gray-900 transition-all duration-200 flex items-center justify-center gap-2 group"
              >
                <svg
                  className="w-5 h-5 text-teal-400 group-hover:text-gray-900 transition-colors duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-6 text-center text-sm">
        © {new Date().getFullYear()} Diamond Trading PLC. All Rights Reserved.
      </footer>

      {/* AI Chat Assistant */}
      <ChatAssistant />
    </div>
  );
};

export default App;
