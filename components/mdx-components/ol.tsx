export default function OL({ children }: { children: React.ReactNode }) {
	return (
		<ol className="list-decimal lg:list-outside px-8">{children}</ol>
	)
}
