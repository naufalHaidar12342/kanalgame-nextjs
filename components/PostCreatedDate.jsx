import { id } from "date-fns/locale";
import { format } from "date-fns";
import { IoCalendarNumberSharp } from "react-icons/io5";
export default function PostCreatedDate({ posts }) {
	const formattedDatePattern = "dd MMMM yyyy HH:mm OOOO";
	return (
		<h4 className="font-light text-lg my-auto font-mono">
			<IoCalendarNumberSharp className="inline-block mr-2 w-6 h-6" />
			{format(new Date(posts.createdAt), formattedDatePattern, {
				locale: id,
			})}
		</h4>
	);
}
