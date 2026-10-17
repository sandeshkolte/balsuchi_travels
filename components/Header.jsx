"use client";

import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [isMarathi, setIsMarathi] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let timeoutId;
    const intervalId = setInterval(() => {
      setIsVisible(false);
      timeoutId = setTimeout(() => {
        setIsMarathi((current) => !current);
        setIsVisible(true);
      }, 400);
    }, 7000);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="fixed left-0 top-0 z-50 flex w-full items-center border-b border-[#e7dfd2]/70 bg-[#fbf5ec]/80 px-5 backdrop-blur-md sm:px-8 lg:px-36">
      {pathname !== "/" ? (
        <div className="px-2" >
          <Button
            className="p-1 bg-transparent rounded-lg text-black"
            onClick={() => window.history.back()}
          >
            <ArrowLeft />
          </Button>
        </div>
      ) : (
        <>
          <div className="ml-0 grid size-10 place-items-center overflow-hidden rounded-full bg-[#d8e8b0]" >
            <Image src={'/favicon-32x32.png'} height={30} width={40} className="object-cover" alt="logo" />

          </div>
        </>)}
      <h1
        lang={isMarathi ? "mr" : "en"}
        className={`${isMarathi ? "font-light" : "font-serif font-semibold"} text-2xl text-amber-700 px-3 py-3 transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`}
        style={isMarathi ? { fontFamily: "var(--font-rozha-one)" } : undefined}
      >
        {isMarathi ? "बाळसुची" : "Balsuchi"}
      </h1>
    </div>
  );
}
