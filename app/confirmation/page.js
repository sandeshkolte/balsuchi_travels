"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { CalendarDays, Car, MapPin, Phone, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const getBookingSnapshot = () => sessionStorage.getItem("confirmedBooking");
const getServerBookingSnapshot = () => null;

function subscribeToBooking(callback) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

export default function Confirmation() {
  const savedBooking = useSyncExternalStore(
    subscribeToBooking,
    getBookingSnapshot,
    getServerBookingSnapshot
  );
  const booking = savedBooking ? JSON.parse(savedBooking) : null;

  return (
    <main className="flex min-h-full items-center justify-center bg-[#fbf5ec] px-5 py-12">
      <section className="w-full max-w-xl rounded-3xl border border-[#e7dfd2] bg-white p-6 shadow-xl sm:p-10">
        <div className="mx-auto mb-5 grid size-16 place-items-center rounded-full bg-[#e8efcf] text-3xl text-[#5f7f31]" aria-hidden="true">
          ✓
        </div>
        <h1 className="text-center font-serif text-3xl font-semibold text-[#4f6f2d] sm:text-4xl">
          Booking Successful!
        </h1>
        <p className="mt-3 text-center text-[#727268]">
          {booking
            ? `Thank you, ${booking.name}! Our team will contact you soon.`
            : "Thank you for choosing Balsuchi. Our team will contact you soon."}
        </p>

        {booking ? (
          <div className="mt-8 rounded-2xl bg-[#fbf5ec] p-5">
            <h2 className="mb-4 font-semibold text-[#4f6f2d]">Your booking details</h2>
            <dl className="grid gap-4 text-sm sm:grid-cols-2">
              <div className="flex items-center gap-3">
                <MapPin className="size-4 shrink-0 text-[#718f3d]" />
                <div>
                  <dt className="text-[#8b8b7e]">Route</dt>
                  <dd className="font-medium text-[#3d4032]">{booking.from} → {booking.to}</dd>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <CalendarDays className="size-4 shrink-0 text-[#718f3d]" />
                <div>
                  <dt className="text-[#8b8b7e]">Departure</dt>
                  <dd className="font-medium text-[#3d4032]">{booking.departureDate}</dd>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <User className="size-4 shrink-0 text-[#718f3d]" />
                <div>
                  <dt className="text-[#8b8b7e]">Name</dt>
                  <dd className="font-medium text-[#3d4032]">{booking.name}</dd>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="size-4 shrink-0 text-[#718f3d]" />
                <div>
                  <dt className="text-[#8b8b7e]">Phone</dt>
                  <dd className="font-medium text-[#3d4032]">{booking.phone}</dd>
                </div>
              </div>
              <div className="flex items-center gap-3 sm:col-span-2">
                <Car className="size-4 shrink-0 text-[#718f3d]" />
                <div>
                  <dt className="text-[#8b8b7e]">Vehicle / package</dt>
                  <dd className="font-medium text-[#3d4032]">{booking.via}</dd>
                </div>
              </div>
            </dl>
          </div>
        ) : (
          <p className="mt-7 rounded-2xl bg-[#fbf5ec] p-5 text-center text-sm text-[#727268]">
            Booking details are not available in this browser session.
          </p>
        )}

        <div className="mt-8 flex justify-center">
          <Button asChild className="bg-[#5f7f31] px-6 text-white hover:bg-[#4f6f2d]">
            <Link
              href="/"
              onClick={() => sessionStorage.removeItem("confirmedBooking")}
            >
              Back to home
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}