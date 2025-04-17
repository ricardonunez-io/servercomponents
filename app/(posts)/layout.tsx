import NavLink from "@/components/navlink";
import GithubLink from "@/components/github-link";
import type { ReactNode } from "react";

function Header({ children }: { children: ReactNode }) {
  return (
    <div className="sticky top-0 py-3 px-6 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 z-[100] flex justify-between items-center">
      {children}
    </div>
  );
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="flex min-h-screen flex-col text-left">
      <div className="gap-x-4 space-y-4">
        <Header>
          <NavLink />
          <GithubLink />
        </Header>
        <div className="py-6 px-6 md:px-8 lg:px-12 mx-auto relative max-w-7xl">
          {children}
        </div>
      </div>
    </main>
  );
}
