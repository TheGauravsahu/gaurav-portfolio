"use client";

import { IconMoonStars, IconSun } from "@tabler/icons-react";
import * as React from "react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  console.log(resolvedTheme)

  const toggleTheme = React.useCallback(() => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }, [resolvedTheme, setTheme]);

  return (
    <Button
      variant="ghost"
      className="aspect-square rounded-full"
      onClick={toggleTheme}
    >
      {resolvedTheme === "light" ? <IconSun /> : <IconMoonStars />}
    </Button>
  );
}
