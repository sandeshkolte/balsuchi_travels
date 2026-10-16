"use client";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Button } from "./ui/button";
import { DialogButton } from "./Dialog";
import { useState } from "react";

const fieldClassName =
  "mt-2 w-full rounded-xl border border-[#d9d9c9] bg-[#fffaf3] px-4 py-3 text-sm text-[#3d4032] outline-none transition placeholder:text-[#a0a095] focus:border-[#718f3d] focus:ring-2 focus:ring-[#d8e8b0]";

function BookingFields({ from, setFrom, to, setTo, departureDate, setDepartureDate }) {
  return (
    <div className="grid gap-5">
      <div>
        <Label htmlFor="from" className="text-xs font-semibold uppercase tracking-[0.16em] text-[#727268]">From</Label>
        <input className={fieldClassName} id="from" placeholder="e.g. Gadchiroli" value={from} onChange={(event) => setFrom(event.target.value)} />
      </div>
      <div>
        <Label htmlFor="to" className="text-xs font-semibold uppercase tracking-[0.16em] text-[#727268]">To</Label>
        <input className={fieldClassName} id="to" placeholder="e.g. Mahabaleshwar" value={to} onChange={(event) => setTo(event.target.value)} />
      </div>
      <div>
        <Label htmlFor="departureDate" className="text-xs font-semibold uppercase tracking-[0.16em] text-[#727268]">Departure</Label>
        <input type="date" className={fieldClassName} id="departureDate" value={departureDate} onChange={(event) => setDepartureDate(event.target.value)} />
      </div>
    </div>
  );
}

export default function DrawerButton({ trigger, title }) {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departureDate, setDepartureDate] = useState("");

  const fields = <BookingFields from={from} setFrom={setFrom} to={to} setTo={setTo} departureDate={departureDate} setDepartureDate={setDepartureDate} />;
  const bookingAction = <DialogButton from={from} to={to} date={departureDate} via={title} />;

  return (
    <>
      <div className="hidden sm:block">
        <Dialog>
          <DialogTrigger asChild>{trigger}</DialogTrigger>
          <DialogContent className="border-[#e7dfd2] bg-[#fbf5ec] p-0 text-[#3d4032] shadow-[0_24px_80px_rgba(80,99,49,.18)] sm:max-w-lg">
            <DialogHeader className="border-b border-[#e7dfd2] bg-[#e8efcf] px-7 py-6 text-left">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#718f3d]">Plan the easy way</p>
              <DialogTitle className="font-serif text-3xl font-normal text-[#4f6f2d]">{title}</DialogTitle>
              <DialogDescription className="text-[#727268]">Share your route and we&apos;ll help make the journey comfortable.</DialogDescription>
            </DialogHeader>
            <div className="px-7 py-6">{fields}</div>
            <DialogFooter className="border-t border-[#e7dfd2] px-7 py-5 sm:justify-between">
              <p className="hidden text-xs text-[#8b8b7e] sm:block">A Balsuchi travel partner will call you.</p>
              {bookingAction}
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="sm:hidden">
        <Drawer>
          <DrawerTrigger asChild>{trigger}</DrawerTrigger>
          <DrawerContent className="border-[#e7dfd2] bg-[#fbf5ec] text-[#3d4032]">
            <DrawerHeader className="items-start border-b border-[#e7dfd2] bg-[#e8efcf] px-6 pb-5 text-left">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#718f3d]">Plan the easy way</p>
              <DrawerTitle className="font-serif text-3xl font-normal text-[#4f6f2d]">{title}</DrawerTitle>
              <DrawerDescription className="text-[#727268]">Share your route and we&apos;ll help make the journey comfortable.</DrawerDescription>
            </DrawerHeader>
            <div className="px-6 py-6">{fields}</div>
            <DrawerFooter className="border-t border-[#e7dfd2] px-6 py-5">
              {bookingAction}
              <DrawerClose asChild><Button variant="ghost" className="text-[#727268]">Maybe later</Button></DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
}
