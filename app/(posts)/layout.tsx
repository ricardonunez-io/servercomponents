import Logo from "../../components/logo";
import GithubLink from "@/components/github";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<main className="flex min-h-screen flex-col text-left">
			<div className="gap-x-4 space-y-4">
				<div className="sticky top-0 py-2 px-8 bg-gray-50 dark:bg-stone-950 border-b-2 border-gray-200 dark:border-gray-800 z-[100] flex justify-between items-center">
					<Logo />
					<GithubLink />
				</div>
				<div className="py-8 px-8 md:px-12 lg:px-16 lg:py-12 max-w-5xl mx-auto">
					{children}
				</div>
			</div>
		</main>
	);
}
