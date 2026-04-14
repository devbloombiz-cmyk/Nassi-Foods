import ctaBackground from "../../assets/NazziFoods/nazzi-8.png";

export default function OrderCTA() {
  return (
    <section
      id="order"
      className="
        relative min-h-[100svh] 
        bg-cover bg-center bg-no-repeat bg-fixed
        flex items-center justify-center
      "
      style={{
        backgroundImage: `url(${ctaBackground})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Content */}
      <div className="relative section-container flex flex-col items-center justify-center text-center px-4">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-primary-yellow">
          Start Your Order
        </p>

        <h2 className="mx-auto max-w-3xl text-3xl font-extrabold text-accent-white sm:text-4xl md:text-5xl">
          Let&apos;s Order Now and Stock Your Kitchen with Nazzifoods Mixes
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-sm text-accent-gray md:text-base">
          Bulk and retail support available for homes, supermarkets, and food businesses.
          Fast response, consistent supply, and dependable packaging.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="rounded-full bg-primary-yellow px-8 py-3 text-sm font-bold text-dark-900 transition hover:scale-[1.02]"
          >
            Place Enquiry
          </a>

          <a
            href="https://wa.me/919645588095"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/50 px-8 py-3 text-sm font-semibold text-accent-white transition hover:border-primary-yellow hover:text-primary-yellow"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}