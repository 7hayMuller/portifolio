import { t } from "i18next";
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
    if (!e) {
      setError("Preencha os campos por favor.");
      return;
    }
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
        setError(t("contact_error_message"));
      }
    } catch (err) {
      console.error(err);
      setError(t("contact_error_message"));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative flex items-center justify-center mt-12 sm:mt-16 md:mt-20 lg:mt-24 px-0 sm:px-4 w-full max-w-[100vw] sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-black bg-opacity-50 p-6 rounded-lg shadow-lg"
      >
        <div className="flex justify-center">
          {isSent && (
            <p className="text-[#A68CFB] text-sm font-mono font-bold text-center mb-[20px]">
              {t("contact_success_message")}
            </p>
          )}
          {error && (
            <p className="text-[#FF715B] text-sm font-mono font-bold text-center mb-[20px]">
              {error}
            </p>
          )}
        </div>
        <div className="mb-4">
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full py-3 px-4 bg-black bg-opacity-50 text-gray-300 border-2 border-transparent rounded-xl outline-none focus:ring-2 focus:ring-[#3DF58C] transition duration-200 shadow-md"
            placeholder={t("name")}
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
            className="w-full py-3 px-4 bg-black bg-opacity-50 text-gray-300 border-2 border-transparent rounded-xl outline-none focus:ring-2 focus:ring-[#3DF58C] transition duration-200 shadow-md"
            placeholder={t("email")}
            required
          />
        </div>
        <div className="mb-4">
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full py-3 px-4 bg-black bg-opacity-50 text-gray-300 border-2 border-transparent rounded-xl outline-none focus:ring-2 focus:ring-[#3DF58C] transition duration-200 shadow-md"
            placeholder={t("message")}
            required
          />
        </div>
        <div className="flex justify-center mt-4">
          <button
            disabled={isLoading}
            className="flex justify-center items-center bg-gradient-to-r from-[#A27DFB] to-[#6E8CFA] text-white text-sm font-medium px-4 py-2 rounded-md w-[200px] mt-2 hover:opacity-90 transition"
            onClick={handleSubmit}
          >
            {isLoading ? t("sending") : t("send_message")}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
