import { useState, useEffect } from "react";
import { id } from "date-fns/locale";
import { format } from "date-fns";
import { FcClock } from "react-icons/fc";
export default function TodayDateIndonesia() {
	const todayDatePattern = "EEEE, dd MMMM yyyy HH:mm:ss";
	const [todayDateIndonesia, setTodayDateIndonesia] = useState(new Date());

	useEffect(() => {
		const interval = setInterval(() => setTodayDateIndonesia(new Date()), 1000);
		return () => {
			clearInterval(interval);
		};
	}, []);
	return (
		<p className="w-full">
			<FcClock className="inline-block w-8 h-8 mx-2" />
			Today is{" "}
			{format(todayDateIndonesia, todayDatePattern, {
				locale: id,
			})}{" "}
			in Indonesia
		</p>
	);
}
