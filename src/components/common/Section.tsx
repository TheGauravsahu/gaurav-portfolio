"use client";
import { cn } from "@/lib/utils";
import { useInView } from "motion/react"
import React, { useEffect, useRef } from 'react'

interface ISectionProps {
    color: string
    children: React.ReactNode
    className?: string;
}

export default function Section({ color, children, className }: ISectionProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.6 });

    useEffect(() => {
        document.body.style.backgroundColor = color;
    }, [isInView, color])

    return (
        <section id="section" ref={ref} className={cn(className, "h-screen w-screen p-8 md:p-20")}>{children}</section>
    )
}
