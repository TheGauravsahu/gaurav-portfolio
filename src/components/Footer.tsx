import React from "react";
import { TextHoverEffect } from "./ui/text-hover-effect";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="h-full  w-full  flex flex-col items-center justify-center mt-8 pb-24">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />

      <div className="h-[8rem] md:h-[20rem] flex items-center justify-center cursor-pointer">
        <TextHoverEffect text="GAURAV" />
      </div>

      <ul className="flex items-center justify-center max-w-3xl gap-8 md:gap-12 cursor-pointer text-gray-400">
        <Link prefetch={true} href="/">
          Home
        </Link>
        <Link prefetch={true} href="/about">
          About
        </Link>
        <a href="https://gauravblogs.vercel.app/" target="_blank">
          Blog
        </a>
        <a href="https://github.com/TheGauravsahu" target="_blank">
          Github
        </a>
      </ul>

      <span className="opacity-20 text-sm my-4">
        © {new Date().getFullYear()} Gaurav Sahu
      </span>
    </footer>
  );
}
