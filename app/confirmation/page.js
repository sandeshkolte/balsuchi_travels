import Image from "next/image";

export default function Confirmation() {
    return (
      <div className="h-screen bg-[#fea732]">
<Image 
alt="image" 
src={'/booking-confirm.gif'} 
width={100}
height={100}
className="h-auto w-auto"
/>
        <h1 className="text-3xl font-bold text-center">Booking Confirmed!</h1>
        <p className="mt-4 text-gray-800 text-center">
          Thank you! Your booking has been successfully confirmed.
        </p>
      </div>
    );
  }
  