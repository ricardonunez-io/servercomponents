export default function ClientWaterfallDiagram() {
	return (
		<div className="max-w-fit mx-auto text-center space-y-4 py-8 text-gray-500 dark:text-gray-400 text-lg md:text-xl">
			<div className="hover:text-gray-700 dark:hover:text-gray-300">
				Client makes <code>fetch()</code> request for profile
			</div>
			<div>↓</div>
			<div className="hover:text-gray-700 dark:hover:text-gray-300">
				Server gets that request,{" "}
				<br className="hidden sm:flex"/>makes a call to an external service (most likely),{" "}
				<br className="hidden sm:flex" />
				& sends the response back to the client
			</div>
			<div>↓</div>
			<div className="hover:text-gray-700 dark:hover:text-gray-300">
				Client then gets and parses the response
			</div>
			<div>↓</div>
			<div className="hover:text-gray-700 dark:hover:text-gray-300">
				Client uses that response to send another
				<br className="hidden sm:flex" /> <code>fetch()</code>
				&nbsp;request for the feed
			</div>
			<div>↓</div>
			<div className="hover:text-gray-700 dark:hover:text-gray-300">
				...
			</div>
		</div>
	);
}
