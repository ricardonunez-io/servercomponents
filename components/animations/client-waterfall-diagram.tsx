export default function ClientWaterfallDiagram() {
  return (
    <div className="max-w-fit mx-auto text-center space-y-4 text-neutral-500 dark:text-neutral-300 text-lg">
      <div className="hover:text-neutral-700 dark:hover:text-neutral-300">
        Client makes <code>fetch()</code> request for profile
      </div>
      <div>↓</div>
      <div className="hover:text-neutral-700 dark:hover:text-neutral-300">
        Server gets that request, <br className="hidden sm:flex" />
        makes a call to an external service (most likely),{" "}
        <br className="hidden sm:flex" />& sends the response back to the client
      </div>
      <div>↓</div>
      <div className="hover:text-neutral-700 dark:hover:text-neutral-300">
        Client then gets and parses the response
      </div>
      <div>↓</div>
      <div className="hover:text-neutral-700 dark:hover:text-neutral-300">
        Client uses that response to send another
        <br className="hidden sm:flex" /> <code>fetch()</code>
        &nbsp;request for the feed
      </div>
      <div>↓</div>
      <div className="hover:text-neutral-700 dark:hover:text-neutral-300">
        ...
      </div>
    </div>
  );
}
