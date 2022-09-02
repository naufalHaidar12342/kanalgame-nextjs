import { useState, useEffect } from "react";
import { id } from "date-fns/locale";
import { format } from "date-fns";
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
		<p>
			Today is{" "}
			{format(todayDateIndonesia, todayDatePattern, {
				locale: id,
			})}{" "}
			in Indonesia
		</p>
	);
}
