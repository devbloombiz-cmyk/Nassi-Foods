import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiArrowUpRight } from "react-icons/fi";

export default function ContactSection() {
  return (
    <section className="relative min-h-screen overflow-hidden flex">

      {/* ===== BACKGROUND IMAGE ===== */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/bgcontact1.png')",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/75" />

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-14 w-full pt-32 md:pt-40 lg:pt-48">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">

          {/* ================= LEFT CARD ================= */}
          <div className="h-full rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-8 flex flex-col justify-between">

            <div>
              {/* Tag */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
                <span className="w-2 h-2 rounded-full bg-primary-yellow" />
                <span className="text-xs uppercase tracking-widest text-white">
                  Contact
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-4">
                Get in touch
              </h2>

              {/* Subtext */}
              <p className="text-gray-300 max-w-md mb-12">
                Have questions or ready to transform your business with AI automation?
              </p>

              {/* Contact cards */}
              <div className="space-y-4">

                {/* Email */}
                <div className="flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white">
                      <FiMail />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Email us</p>
                      <p className="text-sm text-white">
                        rarevoc.work@gmail.com
                      </p>
                    </div>
                  </div>
                  <FiArrowUpRight className="text-white" />
                </div>

                {/* Phone */}
                <div className="flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white">
                      <FiPhone />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Call us</p>
                      <p className="text-sm text-white">
                        +91 98765 43210
                      </p>
                    </div>
                  </div>
                  <FiArrowUpRight className="text-white" />
                </div>

                {/* Location */}
                <div className="flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white">
                      <FiMapPin />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Our location</p>
                      <p className="text-sm text-white">
                        Kerala, India
                      </p>
                    </div>
                  </div>
                  <FiArrowUpRight className="text-white" />
                </div>

              </div>
            </div>
          </div>

          {/* ================= RIGHT CARD (FORM) ================= */}
          <div className="h-full rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-8 flex flex-col justify-between">

            <form className="space-y-4 flex flex-col h-full">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-primary-yellow"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-primary-yellow"
              />

              <textarea
                placeholder="Message"
                rows="6"
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
