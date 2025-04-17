import IncrementalAdoption from "./incremental-adoption.mdx";
import TableOfContents from "@/components/table-of-contents";

export const metadata = {
  title: "Adopting React Server Components Incrementally",
  description:
    "How to incrementally adopt React Server Components to get the benefits",
  publisher: "Ricardo Nunez",
};

export default function IncrementalAdoptionPage() {
  return (
    <div className="lg:grid lg:grid-cols-4 w-full gap-x-12">
      <div className="col-span-4 max-w-4xl mx-auto xl:col-span-3 h-fit w-full">
        <IncrementalAdoption />
      </div>
      <div className="hidden xl:grid xl:col-span-1 h-fit sticky top-32 w-full">
        <TableOfContents />
      </div>
    </div>
  );
}
