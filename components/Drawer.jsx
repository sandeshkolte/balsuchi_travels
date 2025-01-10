"use client"

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"
  import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "./ui/button"
import { DialogButton } from "./Dialog"
import { useState } from "react"

  export default function DrawerButton({trigger,title,content}) {
    
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [departureDate, setDepartureDate] = useState('');

    return (
      <Drawer>
        <DrawerTrigger>{trigger}</DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle className="flex justify-center" >{title}</DrawerTitle>
            <DrawerDescription>Book {title} for your trip.
            </DrawerDescription>
              <div className="text-left text-gray-800 my-10">
                <div className="py-2 flex flex-col">
                  <Label htmlFor="from">From</Label>
                  <input
                    className="text-xl border-b py-2 outline-none"
                    id="from"
                    placeholder="e.g. Nagpur"
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                  />
                </div>
                <div className="py-2 flex flex-col">
                  <Label htmlFor="to">To</Label>
                  <input
                    className="text-xl border-b py-2 outline-none"
                    id="to"
                    placeholder="e.g. Mumbai"
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                  />
                </div>
                <div className="py-2 flex flex-col">
                  <Label htmlFor="departureDate">Departure</Label>
                  <input
                    type="date"
                    className="text-xl border-b py-2 outline-none"
                    id="departureDate"
                    placeholder="e.g. 2022-12-31"
                    value={departureDate}
                    onChange={(e) => setDepartureDate(e.target.value)}
                  />
                </div>
              </div>
          </DrawerHeader>
          <DrawerFooter>
            {/* <Button variant="primary" className="bg-gray-900 text-white text-lg" >Book</Button> */}
            <DialogButton from={from} to={to} date={departureDate} via={title} />
            <DrawerClose>
              {/* <Button variant="outline">Cancel</Button> */}
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    )
  }