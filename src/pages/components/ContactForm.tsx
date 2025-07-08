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
    <div className="flex lg:flex-[3] justify-center px-4 w-full mx-auto mt-12 sm:mt-16 lg:ml-10  ">
      <form
        onSubmit={handleSubmit}
        className="relative w-full max-w-10xl h-[600px] p-10 rounded-2xl bg-[url('/assets/contact_bg.png')] bg-cover bg-center flex flex-col justify-center items-center"
      >
        <div className="mt-[110px] ml-8">
          {isSent && (
            <div className="flex justify-center bg-[#181629] w-[250px] rounded-md ml-[20px] mb-4 shadow-lg p-2">
              <p className="text-[#A68CFB] text-sm font-noto font-mono font-bold text-center">
                {t("contact_success_message")}
              </p>
            </div>
          )}
          {error && (
            <div className="flex justify-center bg-[#181629] w-[250px] rounded-md ml-[20px] mb-4 shadow-lg">
              <p className="text-[#FF715B] text-sm font-noto font-mono font-bold text-center">
                {error}
              </p>
            </div>
          )}
          <div className="mb-4">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-[300px] py-3 px-4 bg-[#F5F5F7] text-[#181629] border-2 border-transparent rounded-xl outline-none focus:ring-2 focus:ring-[#A68CFB] transition duration-200 shadow-lg"
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
              className="w-[300px] py-3 px-4 bg-[#F5F5F7] text-[#181629] border-2 border-transparent rounded-xl outline-none focus:ring-2 focus:ring-[#A68CFB] transition duration-200 shadow-lg"
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
              className="w-[300px] py-3 px-4 bg-[#F5F5F7] text-[#181629] border-2 border-transparent rounded-xl outline-none focus:ring-2 focus:ring-[#A68CFB] transition duration-200 shadow-lg"
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
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
