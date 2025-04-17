import Link from "next/link";

export default function BlogFooter({
  previousPost,
  nextPost,
  previousHref,
  nextHref,
}: {
  previousPost: string;
  nextPost: string;
  previousHref: string;
  nextHref: string;
}) {
  return (
    <div className="my-12 grid grid-cols-1 gap-4 md:grid-cols-2">
      {previousPost && (
        <Link
          href={previousHref}
          className="group flex items-center rounded-xl border border-neutral-200 p-6 transition-all hover:border-neutral-300 hover:bg-neutral-50 dark:border-neutral-800 dark:hover:border-neutral-700 dark:hover:bg-neutral-900/50"
        >
          <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 text-neutral-500 transition-colors group-hover:bg-neutral-200 group-hover:text-neutral-900 dark:bg-neutral-800 dark:text-neutral-400 dark:group-hover:bg-neutral-700 dark:group-hover:text-neutral-100">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="p-0">
            <div className="text-sm text-neutral-500 dark:text-neutral-400">
              Previous
            </div>
            <div className="mt-1 font-medium text-neutral-900 dark:text-neutral-100">
              {previousPost}
            </div>
          </div>
        </Link>
      )}

      {nextPost && (
        <Link
          href={nextHref}
          className="group flex items-center justify-end rounded-xl border border-neutral-200 p-6 transition-all hover:border-neutral-300 hover:bg-neutral-50 dark:border-neutral-800 dark:hover:border-neutral-700 dark:hover:bg-neutral-900/50"
        >
          <div className="mr-auto py-0">
            <div className="text-sm text-neutral-500 dark:text-neutral-400">
              Next
            </div>
            <div className="mt-1 font-medium text-neutral-900 dark:text-neutral-100">
              {nextPost}
            </div>
          </div>
          <div className="ml-4 flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 text-neutral-500 transition-colors group-hover:bg-neutral-200 group-hover:text-neutral-900 dark:bg-neutral-800 dark:text-neutral-400 dark:group-hover:bg-neutral-700 dark:group-hover:text-neutral-100">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 6L15 12L9 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </Link>
      )}
    </div>
  );
}
