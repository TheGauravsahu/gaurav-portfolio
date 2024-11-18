import ProjectList from "@/lib/ProjectList.json";
import ProjectCard from "@/components/ProjectCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - Gaurav Sahu",
  description:
    "Showcasing my portfolio of full-stack development projects, including a YouTube clone, Instagram clone, and more innovative web applications.",
  keywords: [
    "Gaurav Sahu projects",
    "DPS Kaluahi",

    "Full-stack development",
    "YouTube clone",
    "Instagram clone",
    "Web development projects",
    "MERN stack projects",
  ],
  openGraph: {
    title: "Projects - Gaurav Sahu",
    description:
      "Discover Gaurav Sahu's portfolio of web development projects, built with modern technologies like React, Next.js, and Prisma.",
    url: "https://gauravsahu.vercel.app/projects",
    siteName: "Gaurav Sahu Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects - Gaurav Sahu",
    description:
      "Explore my portfolio of full-stack development projects, including innovative applications and tools.",
  },
};

export default function Projects() {
  return (
    <div className="pt-8 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-semibold">Projects</h1>
        <p className="my-1">
          Below is a selection of recent projects that I&apos;ve created.
        </p>
      </div>

      <section className="my-8 w-full h-full flex flex-col md:flex-row flex-wrap items-center  justify-center md:justify-start gap-4">
        {ProjectList.map(
          ({ description, id, imageUrl, liveDemo, techStack, title }) => (
            <ProjectCard
              key={id}
              description={description}
              href={liveDemo}
              tags={techStack}
              title={title}
              icon={imageUrl}
            />
          )
        )}
      </section>
    </div>
  );
}
