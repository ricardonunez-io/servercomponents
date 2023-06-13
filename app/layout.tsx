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
			<body className="dark:bg-stone-950 dark:text-gray-300 dark:bg-dark-hero-pattern bg-gray-50 text-gray-700 bg-hero-pattern backdrop-blur-[2px] text-base font-medium md:text-lg overflow-x-hidden">
				{children}
			</body>
		</html>
	);
}
