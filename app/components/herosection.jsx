"use client";
import React, { useRef, useState, useEffect } from "react";

const HeroSection = () => {
  const videoRef = useRef(null);
  const [isVideoEnded, setIsVideoEnded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Hook to detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };
    handleResize(); // Check on component mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleVideoEnd = () => {
    setIsVideoEnded(true);
    videoRef.current.pause();
  };

  return (
    <section className="md:h-screen relative">
      {isMobile ? (
        <div className="relative h-56" >
            <video
            ref={videoRef}
            className="object-cover h-56 w-full rounded-b-3xl"
            src="/mobile-hero.mp4"
            autoPlay
            muted
            loop={false}
            onEnded={handleVideoEnd}
          />
          {/* <div className="absolute bottom-0 h-10 w-full bg-gradient-to-t from-white to-transparent" ></div> */}
        </div>
      ) : (
        <video
          ref={videoRef}
          className="object-cover max-h-screen w-full"
          src="/balsuchi-animate.mp4"
          autoPlay
          muted
          loop={false}
          onEnded={handleVideoEnd}
        />
      )}
    </section>
  );
};

export default HeroSection;
