import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { createFileRoute } from "@tanstack/react-router";
import {
  LuArrowUpRight,
  LuTerminal,
  LuCopy,
  LuCheck,
  LuGithub,
} from "react-icons/lu";

const stack = [
  {
    name: "Vite",
    description: "Fast frontend tooling",
    href: "https://vite.dev",
    icon: "vite.svg"
  },
  {
    name: "React",
    description: "Modern UI development",
    href: "https://react.dev",
    icon: "react.svg"
  },
  {
    name: "Tailwind CSS",
    description: "CSS provider for your app",
    href: "https://tailwindcss.com/",
    icon: "tailwind-css.svg"
  },
  {
    name: "Base UI",
    description: "Engine behind custom component",
    href: "https://base-ui.com/",
    icon: "base-ui.svg"
  },
  {
    name: "shadcn/ui",
    description: "Accessible UI components",
    href: "https://ui.shadcn.com",
    icon: "shadcn.svg"
  },
  {
    name: "TanStack",
    description: "Powerful application primitives",
    href: "https://tanstack.com",
    icon: "tanstack.svg"
  },
];

const INSTALL_COMMAND = "pnpm dlx degit SoumabhaSaha15/VRST app";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(INSTALL_COMMAND);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard unavailable, ignore
    }
  };

  return (
    <div className="relative flex min-h-svh flex-col items-center overflow-hidden bg-background px-6 py-10">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-56 -z-10 h-105 w-105 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[110px] motion-safe:animate-pulse motion-reduce:animate-none animation-duration-[4s]"
      />
      <div className="w-full max-w-2xl">
        <div className="flex items-center justify-between">
          <Badge variant="outline" className="font-mono">
            VRST
          </Badge>
          <Badge variant="secondary" className="font-mono">
            v1.0.0
          </Badge>
        </div>
        <div className="mt-16 space-y-5 text-center">
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Scaffold react app faster, faster
          </h1>
          <p className="mx-auto max-w-md text-balance text-muted-foreground">
            A Vite and React starter wired up with TanStack Router and
            shadcn/ui, so you can skip the setup and start building.
          </p>
        </div>
        {/* the install command is the actual first action, not a generic CTA */}
        <div className="mx-auto mt-10 flex max-w-md items-center justify-between gap-3 rounded-lg border bg-card px-4 py-3">
          <div className="flex items-center gap-2.5 overflow-x-auto">
            <LuTerminal className="size-4 shrink-0 text-muted-foreground" />
            <code className="whitespace-nowrap font-mono text-sm text-foreground">
              {INSTALL_COMMAND}
            </code>
          </div>
          <Button
            size="icon"
            variant="ghost"
            className="size-7 shrink-0"
            onClick={handleCopy}
            aria-label="Copy install command"
          >
            {copied ? (
              <LuCheck className="size-4 text-primary" />
            ) : (
              <LuCopy className="size-4" />
            )}
          </Button>
        </div>

        <div className="mt-6 flex justify-center gap-3">
          <Button variant="outline"
            onClick={() => {
              window.open("https://github.com/SoumabhaSaha15/VRST/blob/main/DOCS.md", "_blank")
            }}
          >
            Documentation
            <LuArrowUpRight />
          </Button>
          <Button variant="ghost"
            onClick={() => {
              window.open("https://github.com/SoumabhaSaha15/VRST", "_blank")
            }}
          >
            <LuGithub />
            View source
          </Button>
        </div>
      </div>

      <Separator className="my-16 max-w-2xl" />

      <div className="w-full max-w-2xl">
        <p className="mb-6 text-center text-sm text-muted-foreground">
          Built with a stack you already know.
        </p>

        <div className="grid grid-cols-2 divide-x divide-y divide-border rounded-lg border sm:grid-cols-3 sm:divide-y-0">
          {stack.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col items-center gap-2 px-4 py-6 text-center transition-colors hover:bg-muted/50"
            >
              <div className="flex size-9 items-center justify-center">
                <img
                  src={item.icon}
                  alt={item.description}
                  className="size-full object-contain grayscale transition-[filter] duration-200 group-hover:grayscale-0 rounded-md"
                />
              </div>
              <span className="text-sm font-medium text-foreground">
                {item.name}
              </span>
              <span className="text-xs text-muted-foreground">
                {item.description}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}