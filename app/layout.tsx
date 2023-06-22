import "./globals.css";

export const metadata = {
	title: "React Server Components",
	description:
		"An outline of React Server Components, what they are, why they're here, and how to use them conceptually.",
	icons: "./favicon.ico",
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
