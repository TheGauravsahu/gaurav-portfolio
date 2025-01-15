import Landing from "@/components/Landing";
import About from "./about/page";

export default function Home() {
  return (
    <div className="h-full w-full p-8 md:p-0">
      <Landing />
      <About />
    </div>
  );
}
