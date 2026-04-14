import { FiMail, FiPhone } from "react-icons/fi";

export default function Contact() {
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
                      <p className="text-sm text-white">hello@nazzifoods.com</p>
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
                      <p className="text-sm text-white">+91 96455 88095</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

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
