import { Tweet as ReactTweet } from "react-tweet";

export default async function Tweet({ id }: { id: string }) {
	return (
		<div className={`flex justify-center`}>
			<ReactTweet id={id}/>
		</div>
	);
}
