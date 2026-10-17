"use client";

import { addCustomerData } from "@/services/firebase_services";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function DialogButton({ from, to, date, via }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const validateForm = () => {
    const newErrors = {};
    if (!name.trim()) {
      newErrors.name = "Name cannot be empty.";
    }
    if (!/^\d{10}$/.test(phone)) {
      newErrors.phone = "Phone number must be 10 digits.";
    }
    if (!from.trim() || !to.trim() || !date) {
      newErrors.booking = "Please enter a starting point, destination, and departure date.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting || !validateForm()) return;

    setSubmitError("");
    setIsSubmitting(true);
    try {
      const booking = {
        name: name.trim(),
        phone,
        from: from.trim(),
        to: to.trim(),
        departureDate: date,
        via,
      };
      await addCustomerData(
        booking.name,
        booking.phone,
        booking.from,
        booking.to,
        booking.departureDate,
        booking.via
      );
      sessionStorage.setItem("confirmedBooking", JSON.stringify(booking));
      setIsOpen(false);
      router.push("/confirmation");
    } catch (error) {
      console.error("Failed to save booking:", error);
      setSubmitError("We couldn't save your booking. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        setIsOpen(open);
      }}
    >
      <DialogTrigger asChild>
        <Button variant="primary" className="bg-gray-900 text-white text-lg">
          Book
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Confirm Booking</DialogTitle>
          <DialogDescription>
            We want your name and phone for the owner to contact you.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className={`col-span-3 ${errors.name ? "border-red-500" : ""}`}
              />
              {errors.name && (
                <p className="col-span-4 text-red-500 text-sm">{errors.name}</p>
              )}
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="phone" className="text-right">
                Phone
              </Label>
              <Input
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="tel"
                inputMode="numeric"
                maxLength={10}
                placeholder="Your phone number"
                className={`col-span-3 ${
                  errors.phone ? "border-red-500" : ""
                }`}
              />
              {errors.phone && (
                <p className="col-span-4 text-red-500 text-sm">{errors.phone}</p>
              )}
            </div>
            {errors.booking && (
              <p className="text-sm text-red-500" role="alert">{errors.booking}</p>
            )}
            {submitError && (
              <p className="text-sm text-red-500" role="alert">{submitError}</p>
            )}
          </div>
          <DialogFooter>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Saving..." : "Book Now"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
