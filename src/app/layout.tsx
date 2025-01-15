import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/Footer";
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

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${jakarta.className} antialiased h-full w-full bg-slate-50 dark:bg-inherit`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
            <Navbar />
            <main className="h-full max-w-3xl  mx-auto">{children}</main>
            <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
