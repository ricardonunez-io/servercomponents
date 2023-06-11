export default function ClientWaterfall() {
	return (
		<div className="max-w-fit text-center space-y-4 py-8 text-slate-500 dark:text-slate-400 text-lg md:text-xl">
			<div className="hover:text-slate-700 dark:hover:text-slate-300">
				Client makes <code>fetch()</code> request for profile
			</div>
			<div>↓</div>
			<div className="hover:text-slate-700 dark:hover:text-slate-300">
				Server gets that request, makes a query,{" "}
				<br className="hidden sm:flex" />
				and sends a response back to the client
			</div>
			<div>↓</div>
			<div className="hover:text-slate-700 dark:hover:text-slate-300">
				Client then gets and parses the response
			</div>
			<div>↓</div>
			<div className="hover:text-slate-700 dark:hover:text-slate-300">
				Client uses that response to send another
				<br className="hidden sm:flex" /> <code>fetch()</code>
				&nbsp;request for the feed
			</div>
			<div>↓</div>
			<div className="hover:text-slate-700 dark:hover:text-slate-300">
				...
			</div>
		</div>
	);
}
