"use client"

import DrawerButton from "@/components/Drawer";
import { ArrowRight, MapPin, MehIcon, PersonStanding, Phone, PhoneIcon } from "lucide-react";
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
        <meta name="google-site-verification" content="zF9p3q_vsuUopXRVeiu0XDmQ04lzkfzf194aBhUN9G8" />
        <meta name="description" content="Plan your dream vacation with exclusive deals and destinations from our travel agency. All over india tour." />
        <meta name="keywords" content="travel, car, balsuchi, balsuchi travels, gadchiroli travels, booking, bus, scorpio, vacations, tours, destinations, travel agency" />
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
      <div className=" h-screen">
        <section className="bg-gradient-to-t from-gray-100 to-gray-50 h-52 w-full rounded-b-3xl flex justify-center text-center items-center">
          {/* <Image src="/images/balsuchi.png" alt="balsuchi"
                width={200}
                height={50} /> */}
          <div className={`${dancing.className}`}>
            <h1 className="text-5xl text-gray-800 p-5 font-bold">Balsuchi <span className="text-gray-400 text-4xl">Travels</span></h1>
          </div>
          {/* <p className="flex px-5 pb-2 font-semibold"><MapPin />Gadchiroli</p>
          <p className="flex px-5 pb-2 font-semibold"><MehIcon />Amol Borghare</p>
          <p className="flex px-5 font-semibold"><PhoneIcon />+91</p> */}
        </section>
        <section className="bg-white m-3 rounded-3xl py-5 border-[3px] border-gray-200">
          <h2 className="flex px-5 font-bold text-xl">Travel Bookings</h2>
          <div className="flex justify-around">
            <DrawerButton trigger={<div className="flex flex-col text-center rounded-xl">
              <Image src="https://png.pngtree.com/png-clipart/20230410/original/pngtree-bus-line-icon-png-image_9042516.png"
                alt="bus"
                width={60}
                height={50}
              />
              <h3 className="text-gray-700 font-bold">Bus</h3>
            </div>} title={"Traveller (17 seater)"} content={"Bus Booking"} />
            <DrawerButton trigger={<div className="flex flex-col text-center rounded-xl">
              <Image src="https://cdn1.iconfinder.com/data/icons/city-elements-02-line/128/car_conveyance_carriage_transportation_transit_automotive_vehicle_automobile-512.png"
                alt="car"
                width={60}
                height={50}
              />
              <h3 className="text-gray-700 font-bold">Car</h3>
            </div>} title={"Scorpio"} content={"Car Booking"} />
          </div>
        </section>

<section className="m-3 py-5 ">
  <h2 className="flex px-2 pt-2 font-semibold text-lg">Get-Set ready</h2>
  <p className="px-2 pb-5 text-xs">Explore top destinations with unbeatable deals.</p>
  <div className="flex overflow-x-auto scrollbar-hide">
            <div className="h-44 w-32 relative mx-2 flex-shrink-0">
              <Image src="/images/ujjain.avif"
                alt="ujjain"
                className="object-cover rounded-lg h-20 w-full"
                width={80}
                height={30} />
              <div className="absolute top-2 text-white bg-gradient-to-r from-red-800  via-red-500 to-red-800">
                <h3 className="text-xs font-light p-[1px]">New Deals!</h3>
              </div>
              <div className="pl-1" >
                <h2 className="text-gray-950 font-semibold text-sm py-2">Gad {"->"} Ujjain</h2>
                <h2 className="text-gray-700 text-xs py-1">Start from</h2>
                <h2 className="text-teal-900 text-sm py-1 font-semibold">₹5000</h2>
              </div>
            </div>
            <div className="h-44 w-32  relative mx-2 flex-shrink-0">
              <Image src="/images/shegoan.jpeg"
                alt="shegoan"
                className="object-cover rounded-lg h-20 w-full"
                width={80}
                height={30} />
              <div className="absolute top-2 text-white bg-gradient-to-r from-yellow-800 via-yellow-500 to-yellow-800">
                <h3 className="text-xs font-light p-[1px]">Popular!</h3>
              </div>
              <div className="pl-1" >
                <h2 className="text-gray-950 font-semibold text-sm py-2">Gad {"->"} Shegoan</h2>
                <h2 className="text-gray-700 text-xs py-1">Start from</h2>
                <h2 className="text-teal-900 text-sm py-1 font-semibold">₹3000</h2>
              </div>
            </div>
            <div className="h-44 w-32 relative mx-2 flex-shrink-0">
              <Image src="/images/goa.jpeg"
                alt="goa"
                className="object-cover rounded-lg h-20 w-full"
                width={80}
                height={30} />
              <div className="absolute top-2 text-white bg-gradient-to-r from-red-800  via-red-500 to-red-800">
                <h3 className="text-xs font-light p-[1px]">New Deals!</h3>
              </div>
              <div className="pl-1" >
                <h2 className="text-gray-950 font-semibold text-sm py-2">Gad {"->"} Goa</h2>
                <h2 className="text-gray-700 text-xs py-1">Start from</h2>
                <h2 className="text-teal-900 text-sm py-1 font-semibold">₹5000</h2>
              </div>
            </div>
            </div>

</section>

        <section className="m-3">
          <h2 className="flex p-2 font-bold text-lg">Popular Cities</h2>
          <div className="flex overflow-x-auto scrollbar-hide text-lg font-semibold">
            <div className="h-48 w-32 relative mx-2 flex-shrink-0">
              <Image src="/images/varanasi.jpg"
                alt="varanasi"
                className="object-cover rounded-xl h-full w-full"
                width={80}
                height={50} />
              <div className="absolute bottom-0 text-white shadow-2xl bg-gradient-to-t from-gray-900 to-transparent rounded-xl p-2 h-[50%] w-full">
                <h3 className="absolute bottom-5">Varanasi</h3>
              </div>
            </div>
            <div className="h-48 w-32 relative mx-2 flex-shrink-0">
              <Image src="/images/mumbai.jpg"
                alt="mumbai"
                className="object-cover rounded-xl h-full w-full"
                width={80}
                height={50} />
              <div className="absolute bottom-0 text-white shadow-2xl bg-gradient-to-t from-gray-900 to-transparent rounded-xl p-2 h-[50%] w-full">
                <h3 className="absolute bottom-5">Mumbai</h3>
              </div>
            </div>
            <div className="h-48 w-32 relative mx-2 flex-shrink-0">
              <Image src="/images/tirupati.jpg"
                alt="tirupati"
                className="object-cover rounded-xl h-full w-full"
                width={80}
                height={50} />
              <div className="absolute bottom-0 text-white shadow-2xl bg-gradient-to-t from-gray-900 to-transparent rounded-xl p-2 h-[50%] w-full">
                <h3 className="absolute bottom-5">Tirupati</h3>
              </div>
            </div>
            <div className="h-48 w-32 relative mx-2 flex-shrink-0">
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

{/* <section className="bg-white m-3 rounded-3xl py-5 shadow-lg shadow-gray-300">
          <h2 className="flex px-5 py-2 font-bold text-xl">Photo Gallery</h2>
          <div className="px-5">
          
          </div>
</section> */}

<section className=" m-3 py-5 ">
          <h2 className="flex  p-2 font-bold text-lg">About Us</h2>
          <div className="px-5">
            <p className="text-gray-700 font-medium">Balsuchi Travels is a travel agency based in Gadchiroli, Maharashtra. We provide the best travel experience for our customers. We have a fleet of buses and cars for your travel needs. We provide the best travel experience for our customers. We have a fleet of buses and cars for your travel needs.</p>
          </div>
</section>


        <section className="bg-white m-3 rounded-3xl py-5">
        <h2 className="flex p-2 font-bold text-lg">Contact</h2>
        <div className="px-5">
            <h3 className="text-gray-700 font-bold">Amol Balkrushna Borghare</h3>
            <h3 className="text-gray-700 font-bold">+91 99236 88277</h3>
            <p className="text-gray-700 font-semibold">Near RTO Office, MIDC Road, Gadchiroli, Maharashtra</p>

        </div>
        </section>
      </div>
    </>
  );
}
