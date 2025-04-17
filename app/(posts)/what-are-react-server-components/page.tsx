import RSCs from "./rscs.mdx";
import TableOfContents from "@/components/table-of-contents";

export const metadata = {
  title: "What Are React Server Components?",
  description:
    "A brief introduction to React Server Components and how they differ from Server-Side Rendering",
  publisher: "Ricardo Nunez",
};

export default function RSCsPage() {
  return (
    <div className="lg:grid lg:grid-cols-4 w-full gap-x-12">
      <div className="col-span-4 max-w-4xl mx-auto xl:col-span-3 h-fit w-full">
        <RSCs />
      </div>
      <div className="hidden xl:grid xl:col-span-1 h-fit sticky top-32 w-full">
        <TableOfContents />
      </div>
    </div>
  );
}
