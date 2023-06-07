import Browser from "../browser";
import Logo from "../logo";
import SubtitleTransition from "./subtitle-transition";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<main className="flex min-h-screen flex-col text-left">
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 space-y-4">
				<div className="lg:sticky lg:top-0 lg:h-screen lg:max-h-screen lg:grid lg:place-items-center">
					<div className="relative pt-12 px-8 lg:px-16 w-full h-full flex flex-col justify-center">
						<Logo />
						<SubtitleTransition />
						<div className="hidden lg:grid mt-12">
							<Browser />
						</div>
					</div>
				</div>
				<div className="py-8 px-8 md:px-12 lg:px-16 lg:py-12">
					{children}
				</div>
			</div>
		</main>
	);
}
