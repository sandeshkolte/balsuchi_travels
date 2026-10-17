import { Geist, Geist_Mono, Poppins, Rozha_One } from "next/font/google";
import "./globals.css";
import { DealsProvider } from "../context/dealsContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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

const rozhaOne = Rozha_One({
  variable: "--font-rozha-one",
  subsets: ["devanagari", "latin"],
  weight: ["400"],
});


export const metadata = {
  metadataBase: new URL("https://balsuchi.vercel.app"),

  title: {
    default: "Balsuchi Tours and Travels",
    template: "%s | Balsuchi Tours and Travels",
  },

  description:
    "Plan your dream vacation with exclusive deals and destinations from Balsuchi Tours and Travels across India.",

  applicationName: "Balsuchi Tours and Travels",

  alternates: {
    canonical: "/",
  },

  // Keep your existing keywords string here.
  keywords: "Balsuchi Tours and Travels, Balsuchi, Gadchiroli travels, Nagpur tourism, car rentals, bus booking, India tourism",

  authors: [{ name: "Balsuchi Tours and Travels" }],

  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Balsuchi Tours and Travels",
    title: "Balsuchi Tours and Travels",
    description:
      "Plan your dream vacation with us. Explore tours, destinations, and travel services across India.",
    url: "https://balsuchi.vercel.app/",
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
    title: "Balsuchi Tours and Travels",
    description: "Explore tours and travel services across India.",
    images: ["/balsuchi-logo.png"],
  },

  verification: {
    google: "zF9p3q_vsuUopXRVeiu0XDmQ04lzkfzf194aBhUN9G8",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Balsuchi Tours and Travels",
      alternateName: "Balsuchi",
      url: "https://balsuchi.vercel.app/",
    }),
  }}
/>

        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${poppins.className} ${rozhaOne.variable} antialiased h-full`}>
        <div className="h-full flex flex-col ">
          {/* Fixed Header */}
          <Header  />

          {/* Content Area */}
          <div className="flex-grow overflow-auto">
            <DealsProvider>{children}</DealsProvider>
          </div>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
