import Image from "next/image";
import { ReactMarkdown } from "react-markdown";
export default function ImageRenderer(props) {
	const imageSource = props.src;
	const imageAlternateText = props.alt;

	return (
		<div className="w-full h-80 mx-auto">
			<Image src={imageSource} alt={imageAlternateText} />
		</div>
	);
}
