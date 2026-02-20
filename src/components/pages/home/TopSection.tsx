import Section from "@/components/common/Section";
import Image from "next/image";


export default function TopSection() {
    return (
        <Section color="#2E93D1" className="">
            <div className="md:pb-32 pb-16 h-1/2 w-full *:cursor-pointer flex flex-col md:flex-row items-start justify-start md:gap-16 gap-4">
                <h1
                    className="md:text-9xl text-8xl tracking-tighter font-bold text-[#EBD367]">My name is
                    <br />
                    <span className="font-instrument-serif italic tracking-normal">Gaurav Sahu</span>
                </h1>

                <Image className="bg-current md:w-64 w-48 md:h-72 h-56 object-cover" src="/raw-gs.jpg" width={280} height={260} alt="gaurav" />
            </div>

            <div className="*:cursor-pointer w-full h-1/2  flex items-start justify-end flex-col md:flex-row  gap-16 md:pr-8 pt-12">
                <Image className="bg-current md:block hidden  w-1/4 h-72 object-cover" src="/raw-gs.jpg" width={280} height={260} alt="gaurav" />

                <h1 className="md:text-8xl text-7xl tracking-tighter font-bold text-[#EBD367]">I am <br />
                    <span className="font-instrument-serif italic tracking-normal"> a Student </span>
                    &
                    <span className="font-instrument-serif italic tracking-normal"> a Learner</span>
                </h1>
            </div>
        </Section>
    )
}
