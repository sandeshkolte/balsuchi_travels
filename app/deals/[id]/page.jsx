'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useDeals } from '@/context/dealsContext';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Head from 'next/head'; // Import Head for metadata

const DealPage = () => {
  const { id } = useParams();
  const deals = useDeals();
  const [deal, setDeal] = useState(null);

  useEffect(() => {
    if (id && deals.length > 0) {
      const foundDeal = deals.find((deal) => deal.id === id);
      if (foundDeal) {
        setDeal(foundDeal);
      } else {
        console.log("No such deal!");
      }
    }
  }, [id, deals]);

  if (!deal) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Dynamic Metadata */}
      <Head>
        <title>{deal.destination} - ₹{deal.price}</title>
        <meta name="description" content={deal.description} />
        <meta property="og:title" content={deal.destination} />
        <meta property="og:description" content={deal.description} />
        <meta property="og:image" content={deal.image} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://balsuchi.vercel.app/deals/${id}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={deal.destination} />
        <meta name="twitter:description" content={deal.description} />
        <meta name="twitter:image" content={deal.image} />
      </Head>

      <div className="max-w-4xl mx-auto">
        <div className="relative">
          <Button
            className="absolute top-8 left-5 bg-gray-400 p-1 bg-opacity-60 rounded-lg text-white"
            onClick={() => window.history.back()}
          >
            <ArrowLeft />
          </Button>
          <Image
            src={deal.image}
            alt={`Affordable travel packages for ${deal.label}`}
            className="object-cover rounded-b-xl w-full h-[500px]"
            width={800}
            height={800}
          />
          <div className="absolute bottom-0 w-full h-52 bg-gradient-to-t from-gray-800 to-transparent"></div>
        </div>
        <div className="m-5">
          <h1 className="text-2xl font-semibold text-gray-900 mb-5">{deal.destination}</h1>
          <p className="text-gray-900 mt-2 font-semibold text-sm">Price: ₹{deal.price}</p>
          <p className="text-gray-700 mt-2">{deal.description}</p>
        </div>
      </div>
    </div>
  );
};

export default DealPage;
