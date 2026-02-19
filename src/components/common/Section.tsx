"use client";
import { useInView } from "motion/react"
import React, { useEffect, useRef } from 'react'

interface ISectionProps {
    color: string
    children: React.ReactNode
}

export default function Section({ color, children }: ISectionProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.6 });

    useEffect(() => {
        document.body.style.backgroundColor = color;
    }, [isInView, color])

    return (
        <section id="section" ref={ref} className="h-screen w-full relative p-20x">{children}</section>
    )
}
