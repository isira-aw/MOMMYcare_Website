import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactUs() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);

    form.append("access_key", "0f50776d-1bd6-4534-abf1-56e5c631935c");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(Object.fromEntries(form)),
      }).then((res) => res.json());

      if (res.success) {
        setIsSuccess(true);
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        setTimeout(() => {
          setIsSuccess(false);
        }, 4000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      <div
        className="absolute inset-0 bg-[url('/src/assets/pexels-polina.jpg')] bg-cover bg-center"
        style={{ filter: "blur(0.2px)" }}
      />
      <div className="absolute inset-0 bg-primary-100/90" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-lg text-gray-700">
            We're here to help and answer any questions you might have
          </p>
        </motion.div>

        {isSuccess && (
          <div className="text-center mb-6 bg-green-500 text-white py-2 rounded-lg">
            <p>Your message has been successfully sent!</p>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-4">
              <EnvelopeIcon className="h-6 w-6 text-primary-600" />
              <span className="text-gray-700">mommycareplus@gmail.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <PhoneIcon className="h-6 w-6 text-primary-600" />
              <span className="text-gray-700">+94 71 054 0195</span>
            </div>
            <div className="flex items-center space-x-4">
              <MapPinIcon className="h-6 w-6 text-primary-600" />
              <span className="text-gray-700">Panadura, Sri Lanka</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <form onSubmit={onSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 rounded-lg bg-white/80 border border-primary-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 rounded-lg bg-white/80 border border-primary-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Your Message"
                rows={4}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/80 border border-primary-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button
                type="submit"
                className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                SEND MESSAGE
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}