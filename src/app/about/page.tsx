import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Gaurav Sahu",
  description:
    "Learn more about Gaurav Sahu, a passionate full-stack developer with expertise in JavaScript, React, Next.js, and more. Discover my journey and skills.",
  keywords: [
    "About Gaurav Sahu",
    "DPS Kaluahi",
    "Full-stack developer",
    "JavaScript developer",
    "Web developer journey",
    "Frontend and backend developer",
  ],
  openGraph: {
    title: "About - Gaurav Sahu",
    description:
      "Hi, I'm Gaurav Sahu, a full-stack web developer. Read about my passion for coding, skills, and the technologies I love to work with.",
    url: "https://gauravsahu.vercel.app/about",
    siteName: "Gaurav Sahu Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About - Gaurav Sahu",
    description:
      "I'm Gaurav Sahu, a full-stack developer specializing in building impactful and modern web applications. Learn more about me here.",
  },
};

export default function About() {
  return (
    <div id="about" className="flex items-center justify-center h-full lg:min-h-screen">
      <div className="max-w-4xl p-6 space-y-6">
        <h1 className="text-2xl font-semibold">About Me</h1>
        <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />

        <p className="text-lg">
          Hi! I&apos;m <span className="font-bold">Gaurav Sahu</span>, a
          passionate full-stack web developer with a love for building modern
          and user-friendly applications.
        </p>
        <p className="text-lg">
          I specialize in the <span className="font-bold">MERN stack</span>, and
          I&apos;m currently focused on creating dynamic web apps and exploring
          new technologies. I enjoy bringing ideas to life with clean and
          efficient code, with a strong emphasis on frontend design.
        </p>
        <p className="text-lg">
          When I&apos;m not coding, you can find me learning new frameworks,
          experimenting with <span className="font-bold">SvelteKit</span>, or
          working on personal projects like, a YouTube clone, and an Instagram
          clone.
        </p>
        <p className="text-lg">
          I&apos;m always striving to improve and grow as a developer. If
          you&apos;d like to collaborate or chat, feel free to reach out!
        </p>
      </div>
    </div>
  );
}
