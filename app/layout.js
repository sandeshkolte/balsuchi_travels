import { Geist, Geist_Mono, Poppins } from "next/font/google";
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
  metadataBase: new URL("https://balsuchi.vercel.app"),
  title: "Balsuchi Tours and Travels",
  description: "Plan your dream vacation with exclusive deals and destinations from our travel agency. All over India tour.",
  author: "Balsuchi Tours and Travels",
  keywords: "travel, car, traveller, force, Balsuchi Tours and Travels, Balsuchi, balsuchi, gadchiroli tourism, gadchiroli, balsuchi travels, gadchiroli travels, seat, nagpur, booking, bus, scorpio, vacations, tours, destinations, travel agency",
  // icons: {
  //   icon: [
  //     { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
  //     { rel: "icon", href: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
  //     { rel: "icon", href: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
  //   ],
  //   apple: "/apple-touch-icon.png",
  // },
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
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <title>Balsuchi Tours and Travels</title>
      </head>
      <body className={`${poppins.className} antialiased`}>
        <DealsProvider>{children}</DealsProvider>
      </body>
    </html>
  );
}
