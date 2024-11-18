import Landing from "@/components/Landing";
import About from "./about/page";
import Projects from "./projects/page";

export default function Home() {
  return (
    <div className="h-full w-full p-8 md:p-0">
      <Landing />
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
      <Projects />
      <About />
    </div>
  );
}
