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
      "Hi, I'm Gaurav Sahu.Read about my passion.",
    url: "https://gauravsahu.vercel.app/about",
    siteName: "Gaurav Sahu Portfolio",
    type: "website",
  },
};

export default function About() {
  return (
    <div id="about" className="flex items-center justify-center">
      <div className="max-w-4xl p-6 space-y-6">
      <h1 className="text-2xl font-semibold">About Me</h1>
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />

      <p className="text-lg">
        Hi! I&apos;m <span className="font-bold">Gaurav Sahu</span>, a student at <a target="_blank" href="https://dpskaluahi.com/">DPS Kaluahi</a>.
      </p>
      <p className="text-lg">
        I have created this website for fun. I love trying new things. I&apos;m currently focused on my studies and exploring
        new things.
      </p>
      <p className="text-lg">
        I&apos;m always striving to improve and grow as a human.
      </p>
      <p className="text-lg">
        In my free time, I enjoy solving cube & watching movies, especially those related to science fiction and thriller. I also love playing different games like badminton, cricket.
      </p>
      <p className="text-lg">
        Traveling is another passion of mine. I love exploring new places, learning about different cultures, and meeting new people.
      </p>
      <p className="text-lg">
        I am also an avid music lover. I enjoy listening to a wide range of genres.
      </p>
      </div>
    </div>
  );
}
