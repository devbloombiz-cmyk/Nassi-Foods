import { useEffect, useState } from "react";
import mobileVideo from "../../assets/SectionVedio/mobilevedio.mp4";

export default function ProcessVideo() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  if (!isMobile) {
    return null;
  }

  return (
    <section
      id="videos"
      className="w-full bg-dark-900 flex items-center justify-center overflow-hidden py-10 md:py-14"
    >
      <div className="relative w-full flex items-center justify-center px-4">
        <div className="w-full md:w-[70%] h-[62vh] md:h-[75vh] p-1 rounded-3xl bg-gradient-yellow shadow-2xl hover:shadow-3xl transition-shadow duration-500">
          <div className="w-full h-full bg-dark-800 rounded-[26px] overflow-hidden flex items-center justify-center">
            <video
              src={mobileVideo}
              className="w-full h-full object-cover rounded-[22px] block"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              controls
            />
          </div>
        </div>
      </div>
    </section>
  );
}
