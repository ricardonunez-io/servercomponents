"use client";

import { ReactNode, useRef, useState, useEffect } from "react";
import CopyToClipboard from "./copy-to-clipboard";

export default function Pre({ children }: { children: ReactNode }) {
  const preRef = useRef<HTMLPreElement | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    if (preRef.current) {
      setIsOverflowing(preRef.current.scrollHeight > 360);
    }
    if (isOverflowing && preRef.current) {
      preRef.current.classList.add("h-1000px");
    }
  }, [isExpanded, isOverflowing]);

  const height = isExpanded ? "max-h-fit" : "max-h-[360px]";

  return (
    <div
      className={`p-4 my-4 group relative w-full overflow-y-hidden transition-none overflow-auto rounded-lg dark:bg-neutral-900 bg-neutral-50 border border-neutral-200 dark:border-neutral-800`}
    >
      <pre
        className={`relative font-mono text-sm ${height} overflow-auto overflow-y-scroll`}
        ref={preRef}
      >
        {children}
      </pre>
      {isOverflowing && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="absolute bottom-1.5 right-2 block rounded text-neutral-600 dark:text-neutral-400
					bg-neutral-50 dark:bg-neutral-900
					border border-neutral-200 dark:border-neutral-700
					hover:bg-neutral-100 dark:hover:bg-neutral-800
					hover:border-neutral-300 dark:hover:border-neutral-600
					transition-all px-2.5 py-1 text-xs"
        >
          {isExpanded ? "Show less" : "Show more"}
        </button>
      )}
      <div className="absolute right-1 top-2 group-hover:bg-neutral-50 dark:group-hover:bg-neutral-900 rounded-lg">
        <CopyToClipboard
          getValue={() =>
            preRef.current?.querySelector("code")?.textContent || ""
          }
        />
      </div>
    </div>
  );
}
