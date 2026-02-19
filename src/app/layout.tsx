import { DM_Sans, Instrument_Serif, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gaurav Sahu",
  description:
    "Passionate full-stack developer specializing in modern web technologies like the MERN stack. Explore my portfolio to see impactful projects and blogs.",
  keywords: [
    "Gaurav Sahu",
    "DPS Kaluahi",
  ],
  openGraph: {
    title: "Gaurav Sahu - Student",
    description:
      "Discover the portfolio of Gaurav Sahu, a passionate full-stack web developer. Check out projects built with cutting-edge technologies.",
    url: "https://gauravsahu.vercel.app",
    siteName: "Gaurav Sahu Portfolio",

    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gaurav Sahu - Student, Developer",
    description:
      "Explore my portfolio showcasing full-stack web development projects built with modern frameworks and technologies.",
  },
};



const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-instrument-serif",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-playfair-display",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-sans",
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${instrumentSerif.variable} ${dmSans.variable} ${playfairDisplay.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="h-full w-full ">
            {children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
