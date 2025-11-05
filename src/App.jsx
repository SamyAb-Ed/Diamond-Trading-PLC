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
  const [shopFormData, setShopFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [quoteFormData, setQuoteFormData] = useState({
    name: "",
    email: "",
    phone: "",
    comment: "",
  });
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Dangote Cement",
      image: "/dangotecement.png",
      quantity: 1,
      price: 0,
    },
    {
      id: 2,
      name: "Coffee Husk",
      image: "/coffee husk.jpg",
      quantity: 1,
      price: 0,
    },
  ]);

  const updateQuantity = (id, change) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleShopFormChange = (e) => {
    const { name, value } = e.target;
    setShopFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleShopSubmit = (e) => {
    e.preventDefault();
    console.log("Shop request submitted:", { cartItems, shopFormData });
    // Reset form
    setShopFormData({ name: "", email: "", message: "" });
  };

  const handleQuoteFormChange = (e) => {
    const { name, value } = e.target;
    setQuoteFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    console.log("Quote request submitted:", quoteFormData);
    // Reset form
    setQuoteFormData({ name: "", email: "", phone: "", comment: "" });
    alert("Thank you! We will get back to you soon with a quote.");
  };

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
            <a href="#shop" className="hover:text-blue-600">
              Shop
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
      <section className="relative h-screen flex items-center justify-center text-center text-gray-800 overflow-hidden">
        {/* Primary Background - Factory Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('/dangotecement2.jpg')",
          }}
        ></div>

        {/* Logo Overlay - Top Area to Hide Logo/Title */}
        <div className="absolute top-0 left-0 right-0 h-1/4 bg-gradient-to-b from-sky-50/30 to-transparent"></div>

        {/* Side Overlays for Logo Areas */}
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-sky-50/30"></div>
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-sky-50/30"></div>

        {/* Light Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-sky-50/30 via-blue-50/25 to-sky-50/30"></div>

        {/* Content */}
        <div className="relative z-10 p-8 rounded-xl max-w-4xl mx-auto bg-white/85 backdrop-blur-sm shadow-2xl border border-white/50">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-gray-800 drop-shadow-[0_2px_4px_rgba(255,255,255,0.9)]">
            Building Ethiopia's Future
          </h2>
          <p className="text-xl md:text-2xl font-semibold text-gray-800 drop-shadow-[0_2px_4px_rgba(255,255,255,0.9)] max-w-3xl mx-auto">
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
        <div className="absolute inset-0 bg-gradient-to-br from-sky-50/30 via-blue-50/25 to-sky-50/30"></div>
        <div className="max-w-4xl w-full relative z-10 bg-white/85 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/50">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800 drop-shadow-[0_2px_4px_rgba(255,255,255,0.9)]">
            About Us
          </h2>
          <p className="leading-relaxed mb-6 text-lg md:text-xl font-semibold text-gray-800 drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)]">
            Diamond Trading PLC is a locally owned and registered Ethiopian
            company dedicated to providing high-quality construction materials
            to major industries across the nation.
          </p>
          <p className="leading-relaxed mb-6 text-lg md:text-xl font-semibold text-gray-800 drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)]">
            Since our establishment in 2023, we have become a trusted partner
            for leading cement manufacturers and industrial clients, delivering
            consistent product quality, dependable logistics, and professional
            service.
          </p>
          <p className="leading-relaxed text-lg md:text-xl font-semibold text-gray-800 drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)]">
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
        <div className="absolute inset-0 bg-gradient-to-br from-sky-50/30 via-blue-50/25 to-sky-50/30"></div>
        <div className="max-w-4xl w-full relative z-10 bg-white/85 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/50">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800 drop-shadow-[0_2px_4px_rgba(255,255,255,0.9)]">
            Our Vision
          </h2>
          <p className="leading-relaxed text-xl md:text-2xl max-w-3xl font-semibold text-gray-800 drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)]">
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
        <div className="absolute inset-0 bg-gradient-to-br from-sky-50/30 via-blue-50/25 to-sky-50/30"></div>
        <div className="max-w-4xl w-full relative z-10 bg-white/85 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/50">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800 drop-shadow-[0_2px_4px_rgba(255,255,255,0.9)]">
            Our Mission
          </h2>
          <p className="leading-relaxed text-xl md:text-2xl max-w-3xl font-semibold text-gray-800 drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)]">
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
        <div className="absolute inset-0 bg-gradient-to-br from-sky-50/30 via-blue-50/25 to-sky-50/30"></div>
        <div className="max-w-4xl w-full relative z-10 bg-white/85 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/50">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800 drop-shadow-[0_2px_4px_rgba(255,255,255,0.9)]">
            Our Values
          </h2>
          <ul className="list-disc list-inside space-y-4 text-lg md:text-xl font-semibold text-gray-800 drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)]">
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
        <div className="absolute inset-0 bg-gradient-to-br from-sky-50/30 via-blue-50/25 to-sky-50/30"></div>
        <div className="max-w-4xl w-full relative z-10 bg-white/85 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/50">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800 drop-shadow-[0_2px_4px_rgba(255,255,255,0.9)]">
            Products & Services
          </h2>

          <div className="mb-8 space-y-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-gray-300/50 shadow-lg">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)]">
                1. Construction Materials
              </h3>
              <p className="mb-4 text-lg md:text-xl leading-relaxed font-semibold text-gray-800 drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)]">
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

            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-gray-300/50 shadow-lg">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)]">
                2. Coffee husk Supply
              </h3>
              <p className="mb-4 text-lg md:text-xl leading-relaxed font-semibold text-gray-800 drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)]">
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
              <div className="mt-4 bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-gray-300/50 shadow-lg space-y-6">
                <ul className="space-y-4 text-lg md:text-xl font-semibold">
                  <li className="p-3 bg-gray-100/80 rounded-lg hover:bg-gray-200/80 transition-colors duration-200 text-gray-800">
                    DANGOTE CEMENT DISTRIBUTION
                  </li>
                  <li className="p-3 bg-gray-100/80 rounded-lg hover:bg-gray-200/80 transition-colors duration-200 text-gray-800">
                    COFFEE-HUSK SUPPLIER
                  </li>
                </ul>

                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-gray-300/50 shadow-lg">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)]">
                    Monthly Supply Capacity
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b border-gray-300/50">
                          <th className="p-3 font-bold text-gray-800">
                            Product
                          </th>
                          <th className="p-3 font-bold text-gray-800">
                            Monthly Supply
                          </th>
                          <th className="p-3 font-bold text-gray-800">
                            Delivery
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-300/30">
                          <td className="p-3 text-gray-800">Dangote Cement</td>
                          <td className="p-3 text-gray-800">
                            8,000 Metric Tons
                          </td>
                          <td className="p-3 text-gray-800">
                            As per client preference
                          </td>
                        </tr>
                        <tr>
                          <td className="p-3 text-gray-800">Coffee husk</td>
                          <td className="p-3 text-gray-800">
                            1,800 Metric Tons
                          </td>
                          <td className="p-3 text-gray-800">
                            Direct to factory plant
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-gray-300/50 shadow-lg">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)]">
                    Target Market
                  </h3>
                  <p className="mb-4 text-lg md:text-xl leading-relaxed font-semibold text-gray-800 drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)]">
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
            )}
          </div>

          {/* Get Quote Form */}
          <div className="mt-8 bg-gray-50 rounded-2xl p-8 shadow-lg border border-gray-200">
            <form onSubmit={handleQuoteSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="quote-name"
                  className="block text-gray-700 font-semibold text-base mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="quote-name"
                  name="name"
                  value={quoteFormData.name}
                  onChange={handleQuoteFormChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:border-gray-400 focus:bg-white transition-all duration-200"
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="quote-email"
                  className="block text-gray-700 font-semibold text-base mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="quote-email"
                  name="email"
                  value={quoteFormData.email}
                  onChange={handleQuoteFormChange}
                  placeholder="your@email.com"
                  required
                  className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:border-gray-400 focus:bg-white transition-all duration-200"
                />
              </div>

              {/* Phone Number Field */}
              <div>
                <label
                  htmlFor="quote-phone"
                  className="block text-gray-700 font-semibold text-base mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="quote-phone"
                  name="phone"
                  value={quoteFormData.phone}
                  onChange={handleQuoteFormChange}
                  placeholder="Your Phone Number"
                  required
                  className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:border-gray-400 focus:bg-white transition-all duration-200"
                />
              </div>

              {/* Comment Field */}
              <div>
                <label
                  htmlFor="quote-comment"
                  className="block text-gray-700 font-semibold text-base mb-2"
                >
                  Comment
                </label>
                <input
                  type="text"
                  id="quote-comment"
                  name="comment"
                  value={quoteFormData.comment}
                  onChange={handleQuoteFormChange}
                  placeholder="Your Comment"
                  className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:border-gray-400 focus:bg-white transition-all duration-200"
                />
              </div>

              {/* Get Quote Button */}
              <button
                type="submit"
                className="w-full px-6 py-4 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold text-lg rounded-lg shadow-md transition-all duration-200"
              >
                Get Quote
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Shop Section */}
      <section
        id="shop"
        className="min-h-screen flex items-center justify-center px-6 md:px-20 pt-20 pb-20 relative bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('/10005.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-sky-50/30 via-blue-50/25 to-sky-50/30"></div>
        <div className="max-w-7xl w-full relative z-10 bg-white/85 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/50">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800 drop-shadow-[0_2px_4px_rgba(255,255,255,0.9)]">
            Shop
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Section - Product List */}
            <div className="lg:col-span-2 space-y-6">
              {/* Product List Header */}
              <div className="hidden md:grid grid-cols-12 gap-4 pb-4 border-b border-gray-300">
                <div className="col-span-5">
                  <span className="text-sm font-bold text-gray-700 uppercase">
                    PRODUCT
                  </span>
                </div>
                <div className="col-span-3 text-center">
                  <span className="text-sm font-bold text-gray-700 uppercase">
                    QUANTITY
                  </span>
                </div>
                <div className="col-span-3 text-right">
                  <span className="text-sm font-bold text-gray-700 uppercase">
                    TOTAL
                  </span>
                </div>
                <div className="col-span-1"></div>
              </div>

              {/* Product Items */}
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="grid grid-cols-12 gap-4 items-center py-4 border-b border-gray-200"
                  >
                    {/* Remove Button */}
                    <div className="col-span-1 flex justify-center">
                      <button
                        onClick={() => removeItem(item.id)}
                        className="w-6 h-6 rounded-full bg-gray-200 hover:bg-red-500 text-gray-600 hover:text-white flex items-center justify-center transition-colors duration-200 text-lg leading-none"
                        aria-label="Remove item"
                      >
                        ×
                      </button>
                    </div>

                    {/* Product Image and Name */}
                    <div className="col-span-11 md:col-span-4 flex items-center gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg"
                        onError={(e) => {
                          e.target.src = "/dangotecement.png";
                        }}
                      />
                      <span className="font-semibold text-gray-800 text-sm md:text-base">
                        {item.name.toUpperCase()}
                      </span>
                    </div>

                    {/* Quantity Selector */}
                    <div className="col-span-11 md:col-span-3 flex items-center justify-start gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-8 h-8 rounded border border-gray-300 bg-white hover:bg-gray-100 text-gray-700 font-bold flex items-center justify-center transition-colors duration-200"
                      >
                        -
                      </button>
                      <input
                        type="number"
                        value={item.quantity}
                        readOnly
                        className="w-12 h-8 text-center border border-gray-300 rounded text-gray-800 font-semibold"
                        min="1"
                      />
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-8 h-8 rounded border border-gray-300 bg-white hover:bg-gray-100 text-gray-700 font-bold flex items-center justify-center transition-colors duration-200"
                      >
                        +
                      </button>
                    </div>

                    {/* Total */}
                    <div className="col-span-11 md:col-span-3 md:text-right">
                      <span className="text-gray-800 font-semibold">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Browse Products Button */}
              <button
                onClick={() => {
                  // Scroll to services or show products
                  document.getElementById("services")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold text-lg rounded-lg shadow-lg transition-all duration-200"
              >
                BROWSE PRODUCTS
              </button>

              {/* Product Categories */}
              <div className="pt-6 border-t border-dashed border-gray-300">
                <h3 className="text-sm font-semibold text-gray-600 uppercase mb-4">
                  PRODUCT CATEGORIES
                </h3>
                <div className="space-y-2">
                  <a
                    href="#services"
                    className="block text-gray-700 hover:text-blue-600 transition-colors duration-200"
                  >
                    Export Products
                  </a>
                </div>
              </div>
            </div>

            {/* Right Section - Request Form */}
            <div className="lg:col-span-1">
              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 border border-gray-300/50 shadow-lg sticky top-20">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Send the request
                </h3>

                <form onSubmit={handleShopSubmit} className="space-y-4">
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="shop-name"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Name<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="shop-name"
                      name="name"
                      value={shopFormData.name}
                      onChange={handleShopFormChange}
                      required
                      className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all duration-200"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="shop-email"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Email<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="shop-email"
                      name="email"
                      value={shopFormData.email}
                      onChange={handleShopFormChange}
                      required
                      className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all duration-200"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label
                      htmlFor="shop-message"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="shop-message"
                      name="message"
                      value={shopFormData.message}
                      onChange={handleShopFormChange}
                      placeholder="Notes on your request..."
                      rows="4"
                      className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all duration-200 resize-y"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg rounded-lg shadow-lg transition-all duration-200"
                  >
                    SEND YOUR REQUEST
                  </button>
                </form>
              </div>
            </div>
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
        <div className="absolute inset-0 bg-gradient-to-br from-sky-50/30 via-blue-50/25 to-sky-50/30"></div>
        <div className="max-w-4xl w-full relative z-10 bg-white/85 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/50">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800 drop-shadow-[0_2px_4px_rgba(255,255,255,0.9)]">
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

      {/* Achievements & Our Promise Section */}
      <section
        id="achievements"
        className="min-h-screen flex items-center justify-center px-6 md:px-20 pt-20 pb-20 relative bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('/coffee husk.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-sky-50/30 via-blue-50/25 to-sky-50/30"></div>
        <div className="max-w-6xl w-full relative z-10 space-y-8">
          {/* Achievements */}
          <div className="bg-white/85 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/50">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800 drop-shadow-[0_2px_4px_rgba(255,255,255,0.9)]">
              Achievements
            </h2>
            <ul className="space-y-4 text-lg md:text-xl font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] list-disc list-inside">
              <li>
                Consistently maintained high customer satisfaction ratings since
                establishment.
              </li>
              <li>
                Recognized for promoting sustainable practices in coffee husk
                and alternative fuel supply.
              </li>
              <li>
                Expanded service coverage to multiple industrial zones across
                Ethiopia.
              </li>
            </ul>
          </div>

          {/* Our Promise */}
          <div className="bg-white/85 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/50">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800 drop-shadow-[0_2px_4px_rgba(255,255,255,0.9)]">
              Our Promise
            </h2>
            <p className="leading-relaxed text-lg md:text-xl font-semibold text-gray-800 drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)]">
              At Diamond Trading PLC, we don't just supply materials — we build
              partnerships. Our commitment to quality, sustainability, and
              service excellence ensures that every delivery contributes to a
              stronger, more sustainable Ethiopia.
            </p>
          </div>
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
        <div className="absolute inset-0 bg-gradient-to-br from-sky-50/30 via-blue-50/25 to-sky-50/30"></div>
        <div className="max-w-6xl w-full relative z-10 flex flex-col md:flex-row items-start gap-12">
          {/* Left Side - Title */}
          <div className="flex-1 bg-white/85 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/50">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4 drop-shadow-[0_2px_4px_rgba(255,255,255,0.9)]">
              Get In Touch
            </h2>
            <div className="mt-8 space-y-4 text-lg md:text-xl font-semibold text-gray-800 drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)]">
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
                  className="underline hover:text-blue-600"
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
                  className="underline hover:text-blue-600"
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
              className="bg-white/85 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/50"
            >
              {/* Name Field */}
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-gray-800 font-semibold text-lg mb-2"
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
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all duration-200"
                />
              </div>

              {/* Email Field */}
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-gray-800 font-semibold text-lg mb-2"
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
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all duration-200"
                />
              </div>

              {/* Message Field */}
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-gray-800 font-semibold text-lg mb-2"
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
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all duration-200 resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 border-2 border-blue-600 rounded-lg text-white font-semibold text-lg hover:bg-blue-700 hover:border-blue-700 transition-all duration-200 flex items-center justify-center gap-2 group"
              >
                <svg
                  className="w-5 h-5 text-white transition-colors duration-200"
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
