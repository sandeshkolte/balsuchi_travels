"use client";

import Link from "next/link";
import { useDeals } from "@/context/dealsContext";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";

const DealsComponent = () => {
  const deals = useDeals();

  const isLoading = !deals || deals.length === 0;

  return (
    <div className="flex overflow-x-auto scrollbar-hide">
      {isLoading
        ? Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="h-44 w-32 relative mx-2 flex-shrink-0 animate-pulse"
            >
              <Skeleton className="h-20 w-full rounded-lg mb-2" />
              <Skeleton className="h-4 w-3/4 rounded-full mb-1" />
              <Skeleton className="h-4 w-1/2 rounded-full mb-1" />
              <Skeleton className="h-4 w-2/3 rounded-full" />
            </div>
          ))
        : deals.map((deal) => (
            <Link
              key={deal.id}
              href={`/deals/${deal.id}`}
              prefetch={true}
              className="h-44 w-32 relative mx-2 flex-shrink-0"
            >
              {!deal?.image ? (
                <Skeleton className="h-20 w-full rounded-lg" />
              ) : (
                <Image
                  src={deal?.image}
                  alt={deal.label}
                  className="object-cover rounded-lg h-20 w-full"
                  width={80}
                  height={30}
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="/bg-image.jpg"
                />
              )}
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
