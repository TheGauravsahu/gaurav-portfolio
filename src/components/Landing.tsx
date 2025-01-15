import Image from "next/image";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import Link from "next/link";

export default function Landing() {
  return (
    <div className="flex items-center justify-center gap-8 h-80 md:h-64 flex-col md:flex-row mt-4 md:mt-0 w-full">
      <div className="aspect-square size-36 rounded-full bg-gradient-to-r from-[#0061B6] to-[#50a7a1] flex items-center justify-center">
        <div className="aspect-square size-[8.5rem] rounded-full bg-white flex items-center justify-center">
            <div className="aspect-square size-32 rounded-full overflow-hidden flex items-center justify-center">
            <Image className="bg-current dark:bg-[#121212]" src="/raw-gs.jpg" width={200} height={200} alt="gaurav" />
            </div>
        </div>
      </div>

      <div>
        <h1 className="text-xl md:text-2xl text-start font-semibold max-w-g mx-auto tracking-wide">
          Hey, I&apos;m Gaurav.
          <span className="opacity-60 ml-1">
            A passionate student and a lifelong
            learner.
          </span>
        </h1>

        <Link
          href="/about"
          className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block my-4"
        >
          <span className="absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </span>
          <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
            <span>More information</span>
            <IconArrowNarrowRight />
          </div>
          <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
        </Link>
      </div>
    </div>
  );
}
