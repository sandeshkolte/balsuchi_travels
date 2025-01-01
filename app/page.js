"use client"

import DrawerButton from "@/components/Drawer";
import { MapPin, MehIcon, PersonStanding, Phone, PhoneIcon } from "lucide-react";
import { Dancing_Script } from "next/font/google"
import Image from "next/image";
import Head from 'next/head';

const dancing = Dancing_Script({
  subsets: ['latin'], // Use 'latin' or other subsets as needed
  weight: ['400', '700'], // Specify font weights if needed
});


export default function Home() {
  return (
    <>
      <Head>
        <title>Balsuchi Tours and Travels</title>
        <meta name="description" content="Plan your dream vacation with exclusive deals and destinations from our travel agency. All over india tour." />
        <meta name="keywords" content="travel, car, bus, scorpio, vacations, tours, destinations, travel agency" />
        <meta property="og:title" content="Balsuchi Tours and Travels" />
<meta property="og:description" content="Plan your dream vacation with us." />
<meta property="og:image" content="/path/to/image.jpg" />
<meta property="og:url" content="https://balsuchi.vercel.app" />
<meta name="twitter:card" content="summary_large_image" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TravelAgency",
            "name": "Balsuchi",
            "url": "https://balsuchi.vercel.app",
            "description": "Plan your dream vacation with exclusive travel packages and destination deals.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Gadchiroli",
              "addressLocality": "Gadchiroli",
              "addressRegion": "Asia",
              "postalCode": "442605",
              "addressCountry": "IN"
            }
          })}
        </script>
      </Head>
      <div className="bg-gray-100 h-screen">
        <section className="bg-gradient-to-tr from-[#e6f8f7] to-[#f1f3e8] h-52 w-full rounded-b-3xl">
          <div className={` ${dancing.className}`}>
            <h1 className="text-4xl text-gray-800 p-5 font-bold">Balsuchi <span className="text-gray-400">Travels</span></h1>
          </div>
          <p className="flex px-5 pb-2 font-semibold"><MapPin />Gadchiroli</p>
          <p className="flex px-5 pb-2 font-semibold"><MehIcon />Amol Borghare</p>
          <p className="flex px-5 font-semibold"><PhoneIcon />+91</p>
        </section>
        <section className="bg-white m-3 rounded-3xl py-5">
          <h2 className="flex px-5 font-bold text-xl">Travel Bookings</h2>
          <div className="flex justify-around">
            <DrawerButton trigger={<div className="flex flex-col text-center border border-gray-300 rounded-xl">
              <Image src="https://png.pngtree.com/png-clipart/20230410/original/pngtree-bus-line-icon-png-image_9042516.png"
                alt="bus"
                width={60}
                height={50}
              />
              <h3 className="text-gray-700 font-bold">Bus</h3>
            </div>} title={"Bus"} content={"Bus Booking"} />
            <DrawerButton trigger={<div className="flex flex-col text-center border border-gray-300 rounded-xl">
              <Image src="https://cdn1.iconfinder.com/data/icons/city-elements-02-line/128/car_conveyance_carriage_transportation_transit_automotive_vehicle_automobile-512.png"
                alt="car"
                width={60}
                height={50}
              />
              <h3 className="text-gray-700 font-bold">Scorpio</h3>
            </div>} title={"Car"} content={"Car Booking"} />
          </div>
        </section>
        <section className="bg-white m-3 rounded-3xl py-5">
          <h2 className="flex px-5 py-2 font-bold text-xl">Popular Cities</h2>
          <div className="flex overflow-x-auto text-lg font-semibold">
            <div className="h-52 w-32 relative mx-2 flex-shrink-0">
              <Image src="/images/varanasi.jpg"
                alt="varanasi"
                className="object-cover rounded-xl h-full w-full"
                width={80}
                height={50} />
              <div className="absolute bottom-0 text-white shadow-2xl bg-gradient-to-t from-gray-900 to-transparent rounded-xl p-2 h-[50%] w-full">
                <h3 className="absolute bottom-5">Varanasi</h3>
              </div>
            </div>
            <div className="h-52 w-32 relative mx-2 flex-shrink-0">
              <Image src="/images/mumbai.jpg"
                alt="mumbai"
                className="object-cover rounded-xl h-full w-full"
                width={80}
                height={50} />
              <div className="absolute bottom-0 text-white shadow-2xl bg-gradient-to-t from-gray-900 to-transparent rounded-xl p-2 h-[50%] w-full">
                <h3 className="absolute bottom-5">Mumbai</h3>
              </div>
            </div>
            <div className="h-52 w-32 relative mx-2 flex-shrink-0">
              <Image src="/images/tirupati.jpg"
                alt="tirupati"
                className="object-cover rounded-xl h-full w-full"
                width={80}
                height={50} />
              <div className="absolute bottom-0 text-white shadow-2xl bg-gradient-to-t from-gray-900 to-transparent rounded-xl p-2 h-[50%] w-full">
                <h3 className="absolute bottom-5">Tirupati</h3>
              </div>
            </div>
            <div className="h-52 w-32 relative mx-2 flex-shrink-0">
              <Image src="/images/mathura.jpg"
                alt="mathura"
                className="object-cover rounded-xl h-full w-full"
                width={80}
                height={50} />
              <div className="absolute bottom-0 text-white shadow-2xl bg-gradient-to-t from-gray-900 to-transparent rounded-xl p-2 h-[50%] w-full">
                <h3 className="absolute bottom-5">Mathura</h3>
              </div>
            </div>
          </div>

        </section>
      </div>
    </>
  );
}
