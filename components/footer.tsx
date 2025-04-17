export default function Footer() {
  return (
    <footer className="py-6 px-8 bg-white dark:bg-black border-t border-neutral-200 dark:border-neutral-800 flex flex-col items-center gap-y-4 lg:flex-row lg:justify-between relative z-[10000]">
      <div className="text-sm text-neutral-600 dark:text-neutral-400">
        Made by{" "}
        <a
          href="https://twitter.com/ricardonunez_io"
          className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ricardo Nunez
        </a>
      </div>
    </footer>
  );
}
