export default function OL({ children }: { children: React.ReactNode }) {
	return (
		<ol className="list-decimal list-inside lg:list-outside">{children}</ol>
	)
}
