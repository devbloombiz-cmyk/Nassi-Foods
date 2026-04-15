import { useState } from "react";
import { FiMail, FiPhone } from "react-icons/fi";

export default function Contact() {
  const whatsappNumber = "917558872790";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const whatsappMessage = [
      "Hello Nazzifoods,",
      "",
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      "Message:",
      formData.message,
    ].join("\n");

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="relative min-h-screen overflow-hidden flex">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/bgcontact1.png')",
        }}
      />

      <div className="absolute inset-0 bg-black/75" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-14 w-full pt-32 md:pt-40 lg:pt-48 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          <div className="h-full rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-8 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
                <span className="w-2 h-2 rounded-full bg-primary-yellow" />
                <span className="text-xs uppercase tracking-widest text-white">Contact</span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-4">
                Let&apos;s connect
              </h2>

              <p className="text-gray-300 max-w-md mb-12">
                Reach Nazzifoods for wholesale supply, dealership support, and product enquiries.
              </p>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white">
                      <FiMail />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Email us</p>
                      <p className="text-sm text-white">nazzindustry@gmail.com</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white">
                      <FiPhone />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Call us</p>
                      <p className="text-sm text-white">+91 75588 72790</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="h-full rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-8 flex flex-col justify-between">
            <form className="space-y-4 flex flex-col h-full" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-primary-yellow"
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-primary-yellow"
              />

              <textarea
                name="message"
                placeholder="Message"
                rows="6"
                value={formData.message}
                onChange={handleInputChange}
                required
                className="w-full flex-grow px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-primary-yellow resize-none"
              />

              <button
                type="submit"
                className="w-full mt-4 py-3 rounded-xl bg-white text-black font-semibold hover:opacity-90 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
