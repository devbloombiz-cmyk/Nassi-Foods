import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import card1 from "../../assets/shocaseCardImages/c-1.png";
import card2 from "../../assets/shocaseCardImages/c2.png";
import card3 from "../../assets/shocaseCardImages/c-3.png";
import card4 from "../../assets/shocaseCardImages/c-4.png";
import card5 from "../../assets/shocaseCardImages/c-5.png";

const cards = [
  { id: 0, image: card1 },
  { id: 1, image: card2 },
  { id: 2, image: card3 },
  { id: 3, image: card4 },
  { id: 4, image: card5 },
  { id: 5, image: card2 },
];

const ARC_SLOTS = [
  {
    x: -380,
    y: 100,
    z: -420,
    rotateY: -48,
    rotateX: 12,
    scale: 0.86,
    zIndex: 8,
  },
  {
    x: 0,
    y: -40,
    z: 120,
    rotateY: 0,
    rotateX: -8,
    scale: 1.04,
    zIndex: 30,
  },
  {
    x: 380,
    y: 100,
    z: -420,
    rotateY: 48,
    rotateX: 12,
    scale: 0.86,
    zIndex: 8,
  },
];

export default function ExperienceShowcase() {
  const [currentCenter, setCurrentCenter] = useState(0);
  const [screenWidth, setScreenWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentCenter((prev) => (prev + 1) % cards.length);
    }, 2200);
    return () => clearInterval(timer);
  }, []);

  const getCardOffsets = () => {
    if (screenWidth < 640) {
      return { xOffset: 160, yOffset: 160 }; // 320/2, 320/2 (mobile height increased)
    } else if (screenWidth < 768) {
      return { xOffset: 210, yOffset: 170 }; // 420/2, 340/2
    } else {
      return { xOffset: 230, yOffset: 190 }; // 460/2, 380/2
    }
  };

  const { xOffset, yOffset } = getCardOffsets();
  const horizontalFactor = screenWidth < 640 ? 0.78 : 1;

  return (
    <section className="relative  bg-black flex flex-col items-center justify-center overflow-hidden">

      {/* ================= HEADING ================= */}
      <div className="relative w-full mt-0 md:mt-0 lg:mt-24 flex justify-start md:justify-end">
        <div className="bg-primary-yellow py-3 md:py-5 overflow-hidden w-full md:w-fit pl-4 md:pl-0">
          <motion.h1
            className="text-left md:text-center text-3xl md:text-5xl lg:text-[100px] font-popins font-bold leading-none text-black px-0 md:px-12 whitespace-nowrap"
            initial={{ opacity: 0, x: 260 }}   // ← start from RIGHT
            whileInView={{ opacity: 1, x: 0 }} // ← settle toward center
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Let&apos;s Taste
          </motion.h1>
        </div>
      </div>

      {/* ================= STAGE ================= */}
      <div className="relative w-full max-w-[1300px] h-[500px] sm:h-[620px] md:h-[680px] overflow-visible mt-10 px-4 sm:px-0">

        <div
          className="absolute inset-0"
          style={{
            perspective: "1600px",
            perspectiveOrigin: "50% 38%",

          }}
        >
          {cards.map((card, i) => {
            const offset = (i - currentCenter + cards.length) % cards.length;
            let slotIndex;

            if (offset === 0) slotIndex = 1;
            else if (offset === 1) slotIndex = 2;
            else if (offset === cards.length - 1) slotIndex = 0;
            else return null;

            const slot = ARC_SLOTS[slotIndex];
            const isCenter = slotIndex === 1;

            return (
              <motion.div
                key={card.id}
                className="absolute left-1/2 top-1/2 w-[320px] h-[320px] sm:w-[420px] sm:h-[340px] md:w-[460px] md:h-[380px]"
                style={{ transformStyle: "preserve-3d", zIndex: slot.zIndex }}
                animate={{
                  x: slot.x * horizontalFactor - xOffset,
                  y: slot.y - yOffset,
                  translateZ: slot.z,
                  rotateY: slot.rotateY,
                  rotateX: slot.rotateX,
                  scale: slot.scale,
                }}
                transition={{
                  duration: 1.1,
                  ease: [0.22, 0.61, 0.36, 1],
                }}
              >
                <Card image={card.image} isCenter={isCenter} />
              </motion.div>
            );
          })}
        </div>    

        {/* Bottom fade */}
        <div className="pointer-events-none absolute -bottom-[70px] left-0 right-0 h-[47%] bg-gradient-to-t from-black via-black/95 to-transparent z-40 md:bottom-0" />
      </div>
    </section>
  );
}

/* ================= CARD ================= */
function Card({ image, isCenter }) {
  return (
    <div
      className={`
        relative w-full h-full rounded-2xl overflow-hidden
        bg-gray-900 shadow-[0_30px_80px_rgba(0,0,0,0.9)]
        border border-primary-yellow/40
        ${isCenter ? "ring-1 ring-primary-yellow/60" : ""}
      `}
    >
      <img src={image} alt="" className="w-full h-full object-cover" draggable={false} />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40" />
      {isCenter && (
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-transparent" />
      )}
    </div>
  );
}
