"use client";

import { useEffect, useState } from "react";

type Heading = {
  id: string;
  text: string;
  level: number;
};

export default function TableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([]);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll("h1, h2, h3"))
      .filter((element) => element.id) // Only get elements with IDs
      .map((element) => ({
        id: element.id,
        text: element.textContent || "",
        level: Number(element.tagName.charAt(1)),
      }));
    setHeadings(elements);
  }, []);

  return (
    <nav className="text-sm">
      <p className="font-medium text-neutral-900 dark:text-neutral-100 mb-4">
        On this page
      </p>
      <div className="space-y-1.5 flex flex-col">
        {headings.map((heading) => (
          <div
            key={heading.id}
            style={{ paddingLeft: `${(heading.level - 1) * 1}rem` }}
          >
            <a
              href={`#${heading.id}`}
              className={`
								block text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100
								transition-colors no-underline
								${heading.level === 1 ? "font-medium" : ""}
							`}
            >
              {heading.text}
            </a>
          </div>
        ))}
      </div>
    </nav>
  );
}
