import React, { useState, useRef, useEffect } from "react";

const ChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hello! I'm your AI assistant for Diamond Trading PLC. How can I help you today? I can answer questions about our services, company information, products, and more.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Company knowledge base
  const getCompanyResponse = (userMessage) => {
    const message = userMessage.toLowerCase();

    // Company information
    if (
      message.includes("about") ||
      message.includes("company") ||
      message.includes("who")
    ) {
      return "Diamond Trading PLC is a locally owned and registered Ethiopian company dedicated to providing high-quality construction materials and professional services. We are registered under the Addis Ababa City Administration Trade Bureau and operate in full compliance with Ethiopian commercial regulations.";
    }

    // Services
    if (
      message.includes("service") ||
      message.includes("product") ||
      message.includes("supply") ||
      message.includes("what do you")
    ) {
      return "We supply a wide range of engineering and construction materials including: road construction materials, water pipeline infrastructure, building materials, and more. We serve road construction companies, women-owned associations, civil societies, public works agencies, real estate developers, and government projects.";
    }

    // Contact information
    if (
      message.includes("contact") ||
      message.includes("phone") ||
      message.includes("email") ||
      message.includes("address") ||
      message.includes("location")
    ) {
      return "Contact us at:\n📞 Phone: +251912163649\n📧 Email: diamondtradingplc@gmail.com\n🌐 Website: https://diamondtradingplc.com\n📍 Location: Addis Ababa, Ethiopia\n\nTIN: 0086899384\nBusiness License: LD/AA/14/669/4679818/2016";
    }

    // Vision
    if (message.includes("vision") || message.includes("goal")) {
      return "Our vision is to be a leading local supplier of high-quality building and construction materials that stabilize and strengthen the local market while meeting the growing demand of Ethiopia's construction industry.";
    }

    // Mission
    if (message.includes("mission") || message.includes("purpose")) {
      return "Our mission is to operate as a national engineering and construction company that delivers efficient, affordable, sustainable, and cost-effective materials and services of the highest quality—supporting the development of modern, durable, and resilient infrastructure throughout Ethiopia.";
    }

    // Values
    if (message.includes("value") || message.includes("principle")) {
      return "Our core values include: Professionalism, Integrity, Creativity, Commitment to Quality, Customer Focus, and Sustainability. We uphold the highest standards in all our services and interactions.";
    }

    // Pricing or quote
    if (
      message.includes("price") ||
      message.includes("cost") ||
      message.includes("quote") ||
      message.includes("pricing")
    ) {
      return "For specific pricing and quotes, please contact us directly at +251912163649 or email us at diamondtradingplc@gmail.com. We'll be happy to provide you with a detailed quote based on your requirements.";
    }

    // Order or purchase
    if (
      message.includes("order") ||
      message.includes("buy") ||
      message.includes("purchase") ||
      message.includes("procure")
    ) {
      return "To place an order or inquire about our products, please contact us:\n📞 Phone: +251912163649\n📧 Email: diamondtradingplc@gmail.com\n\nOur team will assist you with product availability, specifications, and delivery options.";
    }

    // Delivery
    if (
      message.includes("deliver") ||
      message.includes("shipping") ||
      message.includes("transport")
    ) {
      return "We provide delivery services across Ethiopia. Delivery terms and schedules can be discussed based on your location and order requirements. Please contact us for more details about delivery options.";
    }

    // Products
    if (
      message.includes("material") ||
      message.includes("product") ||
      message.includes("cement") ||
      message.includes("steel") ||
      message.includes("concrete")
    ) {
      return "We supply various construction materials including cement, steel reinforcement bars (rebar), aggregates, concrete blocks, piping materials, and other engineering materials. For specific product inquiries, please contact us with your requirements.";
    }

    // Default response
    return "Thank you for your question! For detailed information about Diamond Trading PLC, please visit the relevant sections of our website or contact us directly at +251912163649 or diamondtradingplc@gmail.com. How else can I assist you?";
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setIsLoading(true);

    // Add user message
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);

    // Simulate API delay for better UX
    setTimeout(() => {
      const response = getCompanyResponse(userMessage);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: response },
      ]);
      setIsLoading(false);
    }, 500);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-blue-700 hover:bg-blue-800 text-white rounded-full p-4 shadow-2xl z-50 transition-all duration-300 hover:scale-110"
        aria-label="Open chat assistant"
      >
        {isOpen ? (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[600px] bg-white rounded-lg shadow-2xl z-50 flex flex-col border border-gray-200">
          {/* Header */}
          <div className="bg-blue-700 text-white p-4 rounded-t-lg flex justify-between items-center">
            <div>
              <h3 className="font-bold text-lg">Diamond Trading PLC</h3>
              <p className="text-sm text-blue-100">AI Assistant</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-blue-200 transition-colors"
              aria-label="Close chat"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    msg.role === "user"
                      ? "bg-blue-700 text-white"
                      : "bg-white text-gray-800 border border-gray-200"
                  }`}
                >
                  <p className="text-sm whitespace-pre-line">{msg.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white text-gray-800 border border-gray-200 rounded-lg p-3">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.4s" }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form
            onSubmit={handleSend}
            className="p-4 border-t border-gray-200 bg-white rounded-b-lg"
          >
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything..."
                className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="bg-blue-700 hover:bg-blue-800 text-white rounded-lg px-4 py-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatAssistant;
