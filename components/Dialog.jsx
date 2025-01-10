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
import { useRouter } from "next/navigation"; // Import useRouter

export function DialogButton({ from, to, date, via }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});
  const router = useRouter(); // Initialize useRouter

  const validateForm = () => {
    const newErrors = {};
    if (!name.trim()) {
      newErrors.name = "Name cannot be empty.";
    }
    if (!/^\d{10}$/.test(phone)) {
      newErrors.phone = "Phone number must be 10 digits.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    console.log(name, phone, from, to, date);
    // Call a function to handle customer data submission
    addCustomerData(name, phone, from, to, date, via);

    // Navigate back to the home page
    router.push("/");
  };

  return (
    <Dialog>
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
                placeholder="Your phone number"
                className={`col-span-3 ${
                  errors.phone ? "border-red-500" : ""
                }`}
              />
              {errors.phone && (
                <p className="col-span-4 text-red-500 text-sm">{errors.phone}</p>
              )}
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Book Now</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
