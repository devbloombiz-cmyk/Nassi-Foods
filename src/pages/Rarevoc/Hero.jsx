import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const heroRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden mb-20"
    >
      {/* Video Background */}
      <video
        key={isMobile ? "mobile-video" : "desktop-video"}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src={
            isMobile
              ? "/reravoc-mobile-landing.mp4"
              : "/rarevoc-lap-landing.mp4"
          }
          type="video/mp4"
        />
      </video>

      {/* Top + Bottom Gradient Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            linear-gradient(
              to bottom,
              rgba(0,0,0,0.98) 0%,
              rgba(0,0,0,0.75) 15%,
              rgba(0,0,0,0) 35%,
              rgba(0,0,0,0) 65%,
              rgba(0,0,0,0.75) 85%,
              rgba(0,0,0,0.98) 100%
            )
          `,
        }}
      />

      {/* Hero Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center translate-y-[35vh] px-4 sm:px-0">
          
          {/* Tagline – slightly bigger */}
          <p className="text-white/85 text-lg md:text-lg font-medium tracking-[0.32em] uppercase mb-5">
          Meet Creative Digital Agency
          </p>

          {/* Main Headline */}
          <h1
            className="
              text-white
              text-5xl sm:text-5xl md:text-6xl lg:text-[68px]
              font-extrabold
              leading-[1.05]
              tracking-tight
            "
          >
            Re-create{" "}
            <span className="text-primary-yellow">
              your story
            </span>
          </h1>

        </div>
      </div>
    </section>
  );
  
}
