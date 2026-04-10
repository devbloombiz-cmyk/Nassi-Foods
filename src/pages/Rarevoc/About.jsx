import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

/* ================= DATA ================= */
const testimonialVideos = [
  { id: 1, name: "Presentation", role: "Presentation", video: "/owner.mp4" },
  { id: 2, name: "Lykin App", role: "Web application", video: "/lykin.mp4" },
  { id: 3, name: "Production", role: "Production", video: "/car.mp4" },
  { id: 4, name: "Presentation", role: "Presentation", video: "/girl.mp4" },
  { id: 5, name: "Eduwice", role: "Eduwice", video: "/Edueice.mp4" },
  { id: 6, name: "Service", role: "Our Service", video: "/serice.mp4" },
  { id: 7, name: "Jamkoam", role: "Story telling", video: "/wtsap.mp4" },
  { id: 8, name: "Services", role: "Services Overview", video: "/reravoc-mobile-landing.mp4" },
];

/* ================= VIDEO CARD ================= */
function VideoCard({ video, columnIndex, inView, isMobile = false }) {
  const offsets = [0, 12, 24, 0, 18, 30];
  const offset = offsets[columnIndex % offsets.length];
  const direction = columnIndex % 2 === 0 ? 1 : -1;

  return (
    <motion.div
      className={`
        relative group
        h-[500px] sm:h-[560px]
        ${isMobile ? "w-[280px] flex-shrink-0" : "w-full"}
      `}
      initial={{ opacity: 0, y: 22 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, ease: "easeOut" }}
      whileInView={{ rotate: [0, 0.6, -0.6, 0] }}
      viewport={{ once: false }}
    >
      <motion.div
        className="h-full"
        animate={{ y: [0, direction * 100, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        style={{ marginTop: offset }}
      >
        <div className="relative h-full rounded-3xl overflow-hidden bg-black shadow-xl">
          <video
            src={video.video}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <motion.div
            className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/80 to-transparent"
            initial={{ opacity: 0, y: 14 }}
            whileHover={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h4 className="text-white font-bold text-sm">{video.name}</h4>
            <p className="text-primary-yellow text-xs font-semibold">
              {video.role}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ================= GRID ================= */
function PremiumTestimonialGrid({ inView }) {
  const getColumnCount = () => {
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1024) return 2;
    if (window.innerWidth < 1280) return 3;
    return 4;
  };

  const [columns, setColumns] = React.useState(4);

  useEffect(() => {
    const update = () => setColumns(getColumnCount());
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const distributed = Array.from({ length: columns }, () => []);
  testimonialVideos.forEach((v, i) => distributed[i % columns].push(v));

  return (
    <div className="relative py-16 overflow-hidden">
      <div className="max-w-8xl mx-auto px-2 md:px-4 lg:px-6">

        {/* DESKTOP GRID */}
        <div
          className="hidden md:grid gap-3 md:gap-5"
          style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
        >
          {distributed.map((col, ci) => (
            <div key={ci} className="flex flex-col gap-3 md:gap-5">
              {col.map((video) => (
                <VideoCard
                  key={video.id}
                  video={video}
                  columnIndex={ci}
                  inView={inView}
                />
              ))}
            </div>
          ))}
        </div>

        {/* MOBILE */}
        <div className="md:hidden space-y-4 overflow-hidden">
          <motion.div
            className="flex gap-4"
            animate={{ x: [0, -120, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
          >
            {testimonialVideos.slice(0, 3).map((v, i) => (
              <VideoCard key={v.id} video={v} columnIndex={i} inView={inView} isMobile />
            ))}
          </motion.div>

          <motion.div
            className="flex gap-4"
            animate={{ x: [0, 120, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
          >
            {testimonialVideos.slice(3).map((v, i) => (
              <VideoCard key={v.id} video={v} columnIndex={i} inView={inView} isMobile />
            ))}
          </motion.div>
        </div>

      </div>
    </div>
  );
}

/* ================= PAGE ================= */
export default function About() {
  const { ref, inView } = useInView({ threshold: 0.05 });

  return (
    <section ref={ref} className="relative bg-dark-900 overflow-hidden">

      {/* ================= EDITORIAL HEADER ================= */}
  

      {/* ================= GRID ================= */}
      <PremiumTestimonialGrid inView={inView} />

    </section>
  );
}
