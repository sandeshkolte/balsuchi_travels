import { Geist, Geist_Mono,Poppins } from "next/font/google";
import "./globals.css";
import { DealsProvider } from "../context/dealsContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Balsuchi Tours and Travels",
  description: "Plan your dream vacation with exclusive deals and destinations from our travel agency. All over India tour.",
  keywords: "travel, car, balsuchi, balsuchi travels, gadchiroli travels, booking, bus, scorpio, vacations, tours, destinations, travel agency",
  openGraph: {
    title: "Balsuchi Tours and Travels",
    description: "Plan your dream vacation with us.",
    url: "https://balsuchi.vercel.app",
    images: [
      {
        url: "/balsuchi-logo.png",
        width: 800,
        height: 600,
        alt: "Balsuchi Tours and Travels",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  verification: {
    google: "zF9p3q_vsuUopXRVeiu0XDmQ04lzkfzf194aBhUN9G8",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/balsuchi-logo.png" type="image/png" />
      </head>
      <body
        className={`${poppins.className} antialiased`}>
        <DealsProvider>
          {children}
        </DealsProvider>
      </body>
    </html>
  );
}
