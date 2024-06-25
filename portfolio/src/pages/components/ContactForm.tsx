import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setIsSent(false);
    setError("");

    try {
      const response = await fetch("https://formspree.io/f/mdoqrbkq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSent(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setError("Failed to send message. Please try again later.");
      }
    } catch (err) {
      console.error(err);
      setError("Failed to send message. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative flex items-center justify-center mt-[50px] rounded-lg w-[500px] h-[500px]">
      <form
        onSubmit={handleSubmit}
        className="mt-[100px] w-[600px] h-[300px] p-4 "
      >
        {isSent && (
          <div className="flex justify-center">
            <p className="text-[#ffd449] font-bold mb-4 text-center">
              Message sent successfully!
            </p>
            <p className="text-[25px] -mt-2">&#128573;</p>
          </div>
        )}
        {error && (
          <div className="flex justify-center">
            <p className="text-[#db324d] font-bold mb-4">{error}</p>
            <p className="text-[25px] -mt-2">&#128576;</p>
          </div>
        )}
        <div className="mb-4">
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full py-3 pl-4 pr-16 bg-black opacity-50 text-gray-300 border-2 border-transparent rounded-xl outline-none focus:ring-2 focus:ring-purple-500 transition duration-200 shadow-md"
            placeholder="Name"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full py-3 pl-4 pr-16 bg-black opacity-50 text-gray-300 border-2 border-transparent rounded-xl outline-none focus:ring-2 focus:ring-purple-500 transition duration-200 shadow-md"
            placeholder="Email"
            required
          />
        </div>
        <div className="mb-4">
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full py-3 pl-4 pr-16 bg-black opacity-50 text-gray-300 border-2 border-transparent rounded-xl outline-none focus:ring-2 focus:ring-purple-500 transition duration-200 shadow-md"
            placeholder="Message"
            required
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-6 py-3 text-white bg-purple-700 rounded-lg hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
