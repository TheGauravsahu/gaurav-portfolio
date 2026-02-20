"use client"


import MiddleSection from "@/components/pages/home/MiddleSection";
import TopSection from "../components/pages/home/TopSection";
import BottomSection from "@/components/pages/home/BottomSection";

export default function Home() {
  return (
    <div className="h-full w-full overflow-hidden">
      <TopSection />
      <MiddleSection />
      <BottomSection />
    </div>
  );
}
