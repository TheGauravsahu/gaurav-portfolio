"use client"

import Section from "@/components/common/Section";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-full w-full">
      <Section color="#2E93D1">
        <div className="p-8 pb-32 h-1/2 *:cursor-pointer flex items-start justify-start gap-16">

          <h1
            className="text-9xl tracking-tighter font-bold text-[#EBD367]">My name is
            <br />
            <span className="font-instrument-serif italic tracking-normal">Gaurav Sahu</span>
          </h1>

          <Image className="bg-current" src="/raw-gs.jpg" width={280} height={260} alt="gaurav" />
        </div>

        <div className="*:cursor-pointer h-1/2  flex items-start justify-end gap-16 pr-8 pt-12">
          <Image className="bg-current" src="/raw-gs.jpg" width={280} height={260} alt="gaurav" />

          <h1 className="text-9xl tracking-tighter font-bold text-[#EBD367]">I am a <br />
            <span className="font-instrument-serif italic tracking-normal"> Student </span>
            &
            <span className="font-instrument-serif italic tracking-normal"> Learner</span>
          </h1>
        </div>
      </Section>


      <Section color="#F0E6D5">
        <div className="pt-80">
          <h1 className="text-[#2E93D1] text-[2rem] lg:text-[6rem] font-bold font-instrument-serif text-center">things i do in my free time:</h1>
          <div className="flex items-center justify-center gap-12 mt-24">
            {["Sci-Fi Movies", "Playing Games", "Sleeping"].map((h, i) => (
              <motion.div
                key={i}
                drag
                dragElastic={0.2}
                dragMomentum={false}
                whileTap={{ scale: 1.05 }}
                className="bg-[#AA4744] shadow-md  flex items-center justify-center   p-14 rounded-lg rotate-[30deg] cursor-grab active:cursor-grabbing h-52 w-72"
              >

                <h1 className="text-5xl font-bold">
                  {h}
                </h1>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Section color="#F0E6D5">
        <h1></h1>
      </Section>




      <div className="sticky p-20 top-0 h-screen bg-[#292524] rounded-t-3xl *:text-center pt-32">
        <h2 className="text-[#2E93D1] font-bold text-6xl">designed & developed by</h2>
        <h1 className="text-[10rem] text-[#EBD367] font-bold">
          GAURAV SAHU
        </h1>
      </div>

    </div>
  );
}
