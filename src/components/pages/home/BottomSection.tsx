'use client'


import Image from 'next/image'
import { motion } from 'framer-motion'

export default function BottomSection() {
    return (
        <div className="sticky top-0 md:p-16 p-8  h-screen bg-[#292524] rounded-t-3xl *:text-center pt-32">
            <div className="flex items-center flex-col gap-5">
                <div>
                    <h2 className="text-[#2E93D1] font-bold text-xl md:text-4xl">designed & developed by</h2>
                    <h1 className="text-7xl md:text-8xl text-[#EBD367] font-bold">
                        GAURAV SAHU
                    </h1>
                </div>

                <motion.div
                    initial={{ y: 180, }}
                    whileInView={{ y: 0 }}
                    transition={{
                        duration: 1,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    viewport={{
                        once: false,
                        amount: 0.6,
                    }}
                    className="will-change-transform z-[9999] absolute top-[16rem] md:top-[10rem]"
                >
                    <Image alt='Gaurav Sahu' src="/raw-gs.jpg" className='bg-background rounded-lg cursor-pointer' width={350} height={300} />
                </motion.div>
            </div>
        </div>
    )
}
