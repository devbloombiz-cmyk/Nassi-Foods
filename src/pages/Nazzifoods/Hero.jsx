import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import heroDesktopImage from "../../assets/NazziFoods/hero.png";
import heroMobileImage from "../../assets/NazziFoods/nazzi-7.png";

const headingText = "Authentic Ready Mixes";

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);
  const mobileHeading = "Authentic Mixes";

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[100svh] w-full overflow-hidden"
      style={{
        backgroundImage: `url(${isMobile ? heroMobileImage : heroDesktopImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/55" />
      <div className="relative section-container flex min-h-[100svh] items-center justify-center pt-20 text-center md:items-end md:pb-16 md:pt-24 lg:pb-20">
        <div className="max-w-2xl">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-yellow md:text-sm">
            Nazzifoods Readymade Mixes
          </p>
          <motion.h1
            className="mx-auto text-3xl font-bold leading-tight text-accent-white sm:text-4xl md:text-5xl"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.04,
                },
              },
            }}
          >
            {(isMobile ? mobileHeading : headingText).split("").map((char, index) => (
              <motion.span
                key={`${char}-${index}`}
                className="inline-block"
                variants={{
                  hidden: { opacity: 0, x: -16 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
            <span className="mt-1 block text-primary-yellow text-[0.9em]">for Modern Kitchens</span>
          </motion.h1>
          <p className="mx-auto mt-4 max-w-xs text-sm leading-6 text-accent-gray md:max-w-lg md:text-base">
            Premium mixes built for daily cooking, consistent flavor, and faster service across homes and food businesses.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#order"
              className="rounded-full bg-primary-yellow px-8 py-3 text-sm font-bold text-dark-900 transition hover:scale-[1.02]"
            >
              Order Now
            </a>
            <a
              href="#videos"
              className="rounded-full border border-primary-yellow px-8 py-3 text-sm font-semibold text-primary-yellow transition hover:bg-primary-yellow hover:text-dark-900"
            >
              See Videos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
