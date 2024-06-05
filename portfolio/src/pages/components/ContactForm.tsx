import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(
    "Deu erro aqui o arrombada, conserta essa joça"
  );

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
    <form
      onSubmit={handleSubmit}
      className={`backdrop-blur-md bg-white/20 p-8 mt-[100px] rounded-lg shadow-lg max-w-2xl w-full ${
        isSent || error ? "h-[450px]" : "h-[400px]"
      }`}
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
        <label htmlFor="name" className="block text-[#e2e8c0] font-bold">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-2 p-2 w-full border rounded-lg focus:ring-2 focus:ring-[#ff4a1c] focus:border-transparent"
          placeholder="Name"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-[#e2e8c0] font-bold">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-2 p-2 w-full border rounded-lg focus:ring-2 focus:ring-[#ff4a1c] focus:border-transparent"
          placeholder="Email"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-[#e2e8c0] font-bold">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="mt-2 p-2 w-full border rounded-lg focus:ring-2 focus:ring-[#ff4a1c] focus:border-transparent"
          placeholder="Message"
          required
        />
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="mt-4 bg-[#db324d] text-[#e2e8c0] font-bold py-2 px-4 rounded-md hover:bg-teal-600 transition duration-200"
          disabled={isLoading}
        >
          {isLoading ? "Sending..." : "Send Message"}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
