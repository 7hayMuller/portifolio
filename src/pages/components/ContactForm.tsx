import { t } from "i18next";
import { useState } from "react";
type ContactProps = {
  onClose: () => void;
};

const ContactForm: React.FC<ContactProps> = ({ onClose }) => {
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
    <div className="relative flex items-center justify-center mt-12 sm:mt-16 md:mt-20 lg:mt-24 px-4 w-full max-w-2xl mx-auto">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-black bg-opacity-50 p-6 rounded-lg shadow-lg"
      >
        {isSent && (
          <div className="flex justify-center mb-4">
            <p className="text-[#ffd449] font-bold text-center">
              {t("contact_success_message")}
            </p>
            <p className="text-[25px] -mt-2">&#128573;</p>
          </div>
        )}
        {error && (
          <div className="flex justify-center mb-4">
            <p className="text-[#db324d] font-bold">{error}</p>
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
            className="w-full py-3 px-4 bg-black bg-opacity-50 text-gray-300 border-2 border-transparent rounded-xl outline-none focus:ring-2 focus:ring-[#be1d90] transition duration-200 shadow-md"
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
            className="w-full py-3 px-4 bg-black bg-opacity-50 text-gray-300 border-2 border-transparent rounded-xl outline-none focus:ring-2 focus:ring-[#be1d90] transition duration-200 shadow-md"
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
            className="w-full py-3 px-4 bg-black bg-opacity-50 text-gray-300 border-2 border-transparent rounded-xl outline-none focus:ring-2 focus:ring-[#be1d90] transition duration-200 shadow-md"
            placeholder={t("message")}
            required
          />
        </div>
        <div className="flex flex-col lg:flex-row justify-around items-center">
          <div
            className="relative flex justify-center py-6"
            style={{ filter: "url(#goo)" }}
          >
            <button
              type="submit"
              className="relative inline-block text-center bg-[#be1d90] text-white font-bold py-3 px-4 sm:py-4 sm:px-5 rounded-full min-w-[10em] sm:min-w-[15em] md:min-w-[10em] text-base sm:text-lg no-underline
        before:content-[''] before:w-[2.5em] before:h-[2.0em] sm:before:w-[4.4em] sm:before:h-[2.95em] before:absolute before:bg-[#be1d90] before:rounded-full before:transition-transform before:duration-1000 before:ease-in-out before:scale-0 before:top-[-20%] sm:before:top-[-25%] before:left-[20%] before:z-[-1]
        after:content-[''] after:w-[2.5em] after:h-[2.0em] sm:after:w-[4.4em] sm:after:h-[2.95em] after:absolute after:bg-[#be1d90] after:rounded-full after:transition-transform after:duration-1000 after:ease-in-out after:scale-0 after:bottom-[-20%] sm:after:bottom-[-25%] after:right-[20%] after:z-[-1] hover:before:scale-100 hover:after:scale-100"
              disabled={isLoading}
            >
              {isLoading ? t("sending") : t("send_message")}
            </button>

            <svg
              className="absolute inset-0 w-0 h-0"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
            >
              <defs>
                <filter id="goo">
                  <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="10"
                    result="blur"
                  />
                  <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                    result="goo"
                  />
                  <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                </filter>
              </defs>
            </svg>
          </div>

          <div
            className="relative flex justify-center py-6"
            style={{ filter: "url(#goo)" }}
          >
            <button
              className="relative inline-block text-center bg-[#6AD5CB] text-white font-bold py-3 px-4 sm:py-4 sm:px-5 rounded-full min-w-[10em] sm:min-w-[15em] md:min-w-[10em] text-base sm:text-lg no-underline
        before:content-[''] before:w-[2.5em] before:h-[2.0em] sm:before:w-[4.4em] sm:before:h-[2.95em] before:absolute before:bg-[#6AD5CB] before:rounded-full before:transition-transform before:duration-1000 before:ease-in-out before:scale-0 before:top-[-20%] sm:before:top-[-25%] before:left-[20%] before:z-[-1]
        after:content-[''] after:w-[2.5em] after:h-[2.0em] sm:after:w-[4.4em] sm:after:h-[2.95em] after:absolute after:bg-[#6AD5CB] after:rounded-full after:transition-transform after:duration-1000 after:ease-in-out after:scale-0 after:bottom-[-20%] sm:after:bottom-[-25%] after:right-[20%] after:z-[-1] hover:before:scale-100 hover:after:scale-100"
              onClick={onClose}
            >
              {t("back")}
            </button>

            <svg
              className="absolute inset-0 w-0 h-0"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
            >
              <defs>
                <filter id="goo">
                  <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="10"
                    result="blur"
                  />
                  <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                    result="goo"
                  />
                  <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
