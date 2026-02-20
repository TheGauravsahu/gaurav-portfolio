import Section from "@/components/common/Section";
import { motion } from "framer-motion";

export default function MiddleSection() {
    return (
        <Section color="#F0E6D5" className="h-screen flex  items-center justify-center p-6 relative   ">
            <h1 className="text-[#2E93D1] text-4xl md:text-6xl leading-0 font-bold font-instrument-serif text-center">things i do in my free time:</h1>
            <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-8  w-1/2 p-8 flex  md:gap-16 flex-wrap items-center justify-center h-full">
                {["Sci-Fi Movies", "Playing Games", "Sleeping", "Eating"].map((h, i) => (
                    <motion.div
                        key={i}
                        drag
                        dragElastic={0.2}
                        dragMomentum={false}
                        whileTap={{ scale: 1.05 }}
                        className="bg-[#AA4744] shadow-md  flex items-center justify-center p-14 rounded-lg  -rotate-[20deg] cursor-grab active:cursor-grabbing h-32 w-42 md:h-42 md:w-52"
                    >

                        <h1 className="text-2xl md:text-3xl font-semibold md:font-bold">
                            {h}
                        </h1>
                    </motion.div>
                ))}
            </div>
        </Section>
    )
}
