"use client";

import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <div className="bg-white dark:bg-black fixed top-0 left-0 w-full z-50 shadow-lg shadow-indigo-100 flex items-center">
      {pathname !== "/" && ( 
        <div className="px-2" >
        <Button
          className="p-1 bg-transparent rounded-lg text-black"
          onClick={() => window.history.back()}
        >
          <ArrowLeft />
        </Button>
        </div>
      )}
      <h1 className="text-xl text-gray-900 px-3 py-2 font-light">Balsuchi</h1>
    </div>
  );
}
