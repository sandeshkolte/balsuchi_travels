"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, BusFront, CarFront, ChevronLeft, ChevronRight, MapPin, Menu, Sparkles } from "lucide-react";
import DrawerButton from "@/components/Drawer";

const destinations = [
  { name: "Mahabaleshwar", region: "Satara district", image: "/images/mahableshwar.jpg", accent: "sage" },
  { name: "Ajanta Caves", region: "A historic wonder", image: "/images/ajanta.jpeg", accent: "lavender" },
  { name: "Tadoba", region: "Wild at heart", image: "/images/tadoba.jpg", accent: "peach" },
  { name: "Matheran", region: "Slow down here", image: "/images/matheran.jpeg", accent: "butter" },
  { name: "Mumbai", region: "The city that never rests", image: "/images/mumbai.jpg", accent: "sage" },
  { name: "Mathura", region: "A journey of devotion", image: "/images/mathura.jpg", accent: "peach" },
  { name: "Varanasi", region: "Along the sacred Ganges", image: "/images/varanasi.jpg", accent: "butter" },
  { name: "Ujjain", region: "A timeless spiritual city", image: "/images/ujjain.avif", accent: "lavender" },
  { name: "Tirupati", region: "A blessed pilgrimage", image: "/images/tirupati.jpg", accent: "sage" },
];

const benefits = [
  { number: "01", title: "Easy planning", text: "Thoughtful routes, simple bookings, and a team that knows the road." },
  { number: "02", title: "Local touch", text: "Discover India through places, stories, and stays worth remembering." },
  { number: "03", title: "Travel together", text: "Comfortable cars and buses for family escapes, celebrations, and weekends away." },
];

export default function Home() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setActive((current) => (current + 1) % destinations.length), 4500);
    return () => window.clearInterval(timer);
  }, []);

  const move = (direction) => {
    setActive((current) => (current + direction + destinations.length) % destinations.length);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#fbf5ec] text-[#3d4032]">
      <section className="mx-auto max-w-7xl px-5 pb-16 pt-24 sm:px-8 lg:px-12 lg:pb-24 lg:pt-32">
        <div className="grid items-end gap-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-20">
          <div className="max-w-2xl">
            <p className="mb-7 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#718f3d]"><Sparkles className="size-4" /> Balsuchi travels</p>
            <h1 className="font-serif text-5xl leading-[.98] tracking-[-0.05em] text-[#4f6f2d] sm:text-7xl lg:text-[6.7rem]">Take the scenic route.</h1>
            <p className="mt-8 max-w-md text-base leading-7 text-[#727268] sm:text-lg">Journeys across India, made warmer. Find a beautiful place to pause, wander, and feel at home.</p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a href="#discover" className="group inline-flex items-center gap-3 rounded-full bg-[#5f7f31] px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5">Explore India <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></a>
              <a href="#book" className="rounded-full border border-[#c4c9b4] px-6 py-3.5 text-sm font-semibold text-[#5f7f31] transition-colors hover:bg-[#edf0df]">Plan a trip</a>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-lg lg:pb-2">
            <div className="absolute -left-5 top-10 h-44 w-44 rounded-full bg-[#d7e8aa] opacity-70 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2.5rem] bg-[#c9dca2] p-3 shadow-[0_24px_70px_rgba(80,99,49,.16)]">
              <div className="relative h-[25rem] overflow-hidden rounded-[2rem] sm:h-[30rem]">
                {destinations.map((destination, index) => (
                  <Image key={destination.name} src={destination.image} alt={destination.name} fill priority={index === 0} className={`object-cover transition-opacity duration-700 ${index === active ? "opacity-100" : "opacity-0"}`} />
                ))}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#25331b]/80 via-[#25331b]/20 to-transparent p-7 pt-24 text-white">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#e6edce]">Featured escape</p>
                  <h2 className="mt-2 font-serif text-4xl">{destinations[active].name}</h2>
                  <p className="mt-1 text-sm text-white/80">{destinations[active].region}</p>
                </div>
              </div>
              <div className="absolute bottom-7 right-7 flex gap-2">
                <button aria-label="Previous destination" onClick={() => move(-1)} className="grid size-10 place-items-center rounded-full bg-white/90 text-[#5f7f31] transition hover:bg-white"><ChevronLeft className="size-4" /></button>
                <button aria-label="Next destination" onClick={() => move(1)} className="grid size-10 place-items-center rounded-full bg-white/90 text-[#5f7f31] transition hover:bg-white"><ChevronRight className="size-4" /></button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="book" className="border-y border-[#e7dfd2] bg-[#fffaf3]">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 py-7 sm:grid-cols-2 sm:px-8 lg:grid-cols-[1fr_1fr_1.2fr] lg:px-12">
          <DrawerButton trigger={<button className="flex items-center gap-4 rounded-2xl bg-[#e8efcf] p-4 text-left transition hover:-translate-y-1"><span className="grid size-11 place-items-center rounded-xl bg-[#6d8c38] text-white"><BusFront className="size-5" /></span><span><span className="block text-xs uppercase tracking-widest text-[#7b8566]">Travel by</span><span className="font-semibold text-[#4f6f2d]">Traveller bus</span></span></button>} title="Traveller (17 seater)" content="Bus Booking" />
          <DrawerButton trigger={<button className="flex items-center gap-4 rounded-2xl bg-[#f7ddca] p-4 text-left transition hover:-translate-y-1"><span className="grid size-11 place-items-center rounded-xl bg-[#ef8d5c] text-white"><CarFront className="size-5" /></span><span><span className="block text-xs uppercase tracking-widest text-[#9b806b]">Travel by</span><span className="font-semibold text-[#8b573c]">Comfortable car</span></span></button>} title="Scorpio" content="Car Booking" />
          <div className="flex items-center gap-3 px-2 text-sm leading-6 text-[#76786b]"><MapPin className="size-5 shrink-0 text-[#718f3d]" /> Based in Gadchiroli, taking you to the best corners of India.</div>
        </div>
      </section>

      <section id="discover" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mb-10 flex items-end justify-between gap-6"><div><p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#ef8d5c]">Places to remember</p><h2 className="font-serif text-4xl tracking-[-0.04em] text-[#4f6f2d] sm:text-5xl">Go somewhere lovely.</h2></div><Link href="#discover" className="hidden items-center gap-2 text-sm font-semibold text-[#718f3d] sm:flex">View all <ArrowRight className="size-4" /></Link></div>
        <div className="flex gap-5 overflow-x-auto pb-5 snap-x snap-mandatory">
          {destinations.map((destination, index) => <article key={destination.name} className={`group min-w-[16rem] snap-start overflow-hidden rounded-[1.75rem] p-2 transition-transform hover:-translate-y-2 sm:min-w-[19rem] ${destination.accent === "sage" ? "bg-[#d6e6ac]" : destination.accent === "lavender" ? "bg-[#d8caee]" : destination.accent === "peach" ? "bg-[#f8c7a9]" : "bg-[#f0e4a9]"}`}><div className="relative h-64 overflow-hidden rounded-[1.35rem]"><Image src={destination.image} alt={destination.name} fill className="object-cover transition duration-700 group-hover:scale-105" /><span className="absolute left-4 top-4 rounded-full bg-white/85 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-[#536e30]">0{index + 1}</span></div><div className="px-3 pb-3 pt-4"><h3 className="font-serif text-2xl text-[#4f6f2d]">{destination.name}</h3><p className="mt-1 text-sm text-[#727268]">{destination.region}</p></div></article>)}
        </div>
      </section>

      <section className="bg-[#d8e8b0] px-5 py-20 sm:px-8 lg:px-12 lg:py-24"><div className="mx-auto max-w-7xl"><div className="max-w-xl"><p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#ef8d5c]">Why Balsuchi</p><h2 className="font-serif text-4xl leading-tight tracking-[-0.04em] text-[#4f6f2d] sm:text-5xl">Less planning. More looking out the window.</h2></div><div className="mt-14 grid gap-10 md:grid-cols-3">{benefits.map((benefit) => <div key={benefit.number} className="border-t border-[#adc17b] pt-5"><p className="text-sm font-semibold text-[#ef8d5c]">{benefit.number}</p><h3 className="mt-7 font-serif text-2xl text-[#4f6f2d]">{benefit.title}</h3><p className="mt-3 max-w-xs text-sm leading-6 text-[#697856]">{benefit.text}</p></div>)}</div></div></section>

      <section className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-20 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12 lg:py-28"><div><p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#ef8d5c]">Your next story</p><h2 className="font-serif text-4xl tracking-[-0.04em] text-[#4f6f2d] sm:text-5xl">Ready when you are.</h2><p className="mt-4 max-w-md text-sm leading-6 text-[#727268]">Tell us where you want to go. We&apos;ll help with the rest.</p></div><a href="tel:+919923688277" className="group inline-flex w-fit items-center gap-3 rounded-full bg-[#5f7f31] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#4f6f2d]">Call +91 99236 88277 <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></a></section>
    </main>
  );
}
