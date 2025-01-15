import {
  IconBrandGithub,
  IconBolt,
  IconHome,
} from "@tabler/icons-react";

import { FloatingDock } from "./ui/floating-dock";

export default function Navbar() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },
    {
      title: "About",
      icon: (
        <IconBolt className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/about",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/TheGauravsahu",
    },
  ];

  return (
    <div className="flex items-center justify-center  w-full fixed bottom-4 z-[999999]">
      <FloatingDock items={links} />
    </div>
  );
}
