import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import grid1 from "../../assets/GridVedios/Grid-1.mp4";
import grid4 from "../../assets/GridVedios/grid-4.mp4";
import grid5 from "../../assets/GridVedios/grid-5.mp4";
import grid6 from "../../assets/GridVedios/grid-6.mp4";
import grid7 from "../../assets/GridVedios/grid-7.mp4";
import grid8 from "../../assets/GridVedios/grid-8.mp4";
import grid9 from "../../assets/GridVedios/grid-9.mp4";
import grid10 from "../../assets/GridVedios/grid-10.mp4";

const productVideos = [
  { id: 1, src: grid1 },
  { id: 4, src: grid4 },
  { id: 5, src: grid5 },
  { id: 6, src: grid6 },
  { id: 7, src: grid7 },
  { id: 8, src: grid8 },
  { id: 9, src: grid9 },
  { id: 10, src: grid10 },
];

const mobileRowOne = productVideos.slice(0, 4);
const mobileRowTwo = productVideos.slice(4, 8);

function VideoCard({ src, columnIndex, isMobile = false }) {
  const offsets = [0, 12, 24, 0, 18, 30];
  const offset = offsets[columnIndex % offsets.length];
  const direction = columnIndex % 2 === 0 ? 1 : -1;

  return (
    <motion.article
      className={`relative ${isMobile ? "h-[450px] w-[300px] flex-shrink-0" : "h-[500px] sm:h-[560px] w-full"}`}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <motion.div
        className="h-full"
        animate={isMobile ? undefined : { y: [0, direction * 70, 0] }}
        transition={isMobile ? undefined : { duration: 20, repeat: Infinity, ease: "linear" }}
        style={{ marginTop: offset }}
      >
        <div className="relative h-full overflow-hidden rounded-3xl bg-black shadow-xl">
          <video
            src={src}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="h-full w-full object-cover"
          />
        </div>
      </motion.div>
    </motion.article>
  );
}

export default function VideoGrid() {
  const getColumnCount = () => {
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1024) return 2;
    if (window.innerWidth < 1280) return 3;
    return 4;
  };

  const [columns, setColumns] = useState(4);

  useEffect(() => {
    const update = () => setColumns(getColumnCount());
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const distributed = Array.from({ length: columns }, () => []);
  productVideos.forEach((video, index) => distributed[index % columns].push(video));

  return (
  <section id="products" className="relative overflow-hidden mt-20 mb-20 bg-dark-900 py-8 md:py-12">
      <div className="max-w-8xl mx-auto px-2 md:px-4 lg:px-6">
        <div
          className="hidden md:grid gap-3 md:gap-5"
          style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
        >
          {distributed.map((column, columnIndex) => (
            <div key={columnIndex} className="flex flex-col gap-3 md:gap-5">
              {column.map((video) => (
                <VideoCard key={video.id} src={video.src} columnIndex={columnIndex} />
              ))}
            </div>
          ))}
        </div>

        <div className="md:hidden space-y-3 overflow-hidden px-3 pb-2">
          <motion.div
            className="flex gap-4 w-max"
            animate={{ x: [0, -560] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          >
            {[...mobileRowOne, ...mobileRowOne].map((video, index) => (
              <VideoCard key={video.id} src={video.src} columnIndex={index} isMobile />
            ))}
          </motion.div>

          <motion.div
            className="flex gap-4 w-max"
            animate={{ x: [-560, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          >
            {[...mobileRowTwo, ...mobileRowTwo].map((video, index) => (
              <VideoCard key={video.id} src={video.src} columnIndex={index} isMobile />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
