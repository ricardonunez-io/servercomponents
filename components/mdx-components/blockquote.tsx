export default function Blockquote({ children }: { children: React.ReactNode }) {
	return (
		<blockquote className="my-2 text-gray-500 pl-6 border-l-4 border-current italic">
			{children}
		</blockquote>
	);
}
