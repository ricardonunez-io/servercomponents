import "./globals.css";

export const metadata = {
	title: "React Server Components",
	description:
		"A brief outline of React Server Components, as noted by Dan Abramov and Joe Savona.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="dark:bg-stone-950 dark:text-slate-300 dark:bg-dark-hero-pattern bg-slate-50 text-slate-700 bg-hero-pattern backdrop-blur-[2px] text-base font-medium md:text-lg">
				{children}
			</body>
		</html>
	);
}
