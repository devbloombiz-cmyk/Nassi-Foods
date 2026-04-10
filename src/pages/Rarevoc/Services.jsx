import React, { useState, useEffect } from 'react';

export default function Services() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const videoSrc = isMobile ? '/sm.mp4' : '/vs.mp4';

  return (
    <section
      id="services"
      className="h-screen w-full bg-dark-900 flex items-center justify-center overflow-hidden mt-10 mb-10"
    >
      <div className="relative w-full h-full flex items-center justify-center px-4 py-4">
        
        {/* Width control here */}
        <div className="w-full md:w-[70%] h-[75vh] p-1 rounded-3xl bg-gradient-to-r from-yellow-400 via-amber-400 to-pink-500 shadow-2xl hover:shadow-3xl transition-shadow duration-500">
          <div className="w-full h-full bg-dark-800 rounded-[26px] overflow-hidden flex items-center justify-center">
            <video
              src={videoSrc}
              className="w-full h-full object-cover rounded-[22px] block"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        </div>

      </div>
    </section>
  );
}
