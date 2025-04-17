import Solutions from "./solutions.mdx";
import TableOfContents from "@/components/table-of-contents";

export const metadata = {
  title: "The Problems That React Server Components Solve",
  description:
    "How React Server Components address data fetching, composing business logic, and bundle sizes differently than existing solutions",
  publisher: "Ricardo Nunez",
};

export default function SolutionsPage() {
  return (
    <div className="lg:grid lg:grid-cols-4 w-full gap-x-12">
      <div className="col-span-4 max-w-4xl mx-auto xl:col-span-3 h-fit w-full">
        <Solutions />
      </div>
      <div className="hidden xl:grid xl:col-span-1 h-fit sticky top-32 w-full">
        <TableOfContents />
      </div>
    </div>
  );
}
