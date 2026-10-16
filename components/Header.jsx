"use client";

import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Header() {
  const pathname = usePathname();

  return (
    <div className="fixed left-0 top-0 z-50 flex w-full items-center border-b border-[#e7dfd2]/70 bg-[#fbf5ec]/80 px-5 backdrop-blur-md sm:px-8 lg:px-12">
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
          <div className="ml-0 grid size-8 place-items-center overflow-hidden rounded-full bg-[#d8e8b0]" >
            <Image src={'/favicon-32x32.png'} height={30} width={40} className="object-cover" alt="logo" />

          </div>
        </>)}
      <h1 className="text-xl text-gray-900 px-3 py-2 font-light">Balsuchi</h1>
    </div>
  );
}
