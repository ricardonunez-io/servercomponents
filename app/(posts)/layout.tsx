import Browser from "../browser";
import Logo from "../logo";
import SubtitleTransition from "./subtitle-transition";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<main className="flex min-h-screen flex-col text-left">
			<div className="gap-x-4 space-y-4">
				<div className="sticky top-0 py-2 px-8 bg-slate-50 dark:bg-stone-950 border-b-2 border-slate-200 dark:border-slate-800 z-[100]">
					<Logo />
				</div>
				<div className="py-8 px-8 md:px-12 lg:px-16 lg:py-12 max-w-5xl mx-auto">
					{children}
				</div>
			</div>
		</main>
	);
}
