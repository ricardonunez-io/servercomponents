"use client";

import { useState } from "react";

export default function CopyToClipboard({
  getValue,
}: {
  getValue: () => string;
}) {
  const [copied, setCopied] = useState(false);

  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(getValue());
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }}
      className="p-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-opacity"
        style={{ opacity: copied ? 0 : 1 }}
      >
        <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="absolute transition-opacity top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ opacity: copied ? 1 : 0 }}
      >
        <path d="M20 6 9 17l-5-5" />
      </svg>
    </button>
  );
}
