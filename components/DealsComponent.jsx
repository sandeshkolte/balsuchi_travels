"use client";

import Link from "next/link";
import { useDeals } from "@/context/dealsContext";
import Image from "next/image";

const DealsComponent = () => {
  const deals = useDeals();

  return (
    <div className="flex overflow-x-auto scrollbar-hide">
      {deals &&
        deals.map((deal) => (
          <Link
            key={deal.id}
            href={`/deals/${deal.id}`}
            className="h-44 w-32 relative mx-2 flex-shrink-0"
          >
            <Image
              src={deal?.image}
              alt={deal.label}
              className="object-cover rounded-lg h-20 w-full"
              width={80}
              height={30}
              loading="lazy" // Enables lazy loading
              placeholder="blur" // Placeholder for better UX
              blurDataURL="/bg-image.jpg" // Replace with an actual low-res image or base64 string
            />
            <div
              className={`absolute top-2 text-white bg-gradient-to-r ${
                deal.label === "Popular!"
                  ? "from-yellow-800 via-yellow-500 to-yellow-800"
                  : "from-red-800 via-red-500 to-red-800"
              }`}
            >
              <h3 className="text-xs font-light p-[1px]">{deal.label}</h3>
            </div>
            <div className="pl-1">
              <h2 className="text-gray-950 font-semibold text-sm py-2">
                {deal.destination}
              </h2>
              <h2 className="text-gray-700 text-xs py-1">Start from</h2>
              <h2 className="text-teal-900 text-sm py-1 font-semibold">
                ₹{deal.price}
              </h2>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default DealsComponent;
