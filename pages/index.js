import Layout from "../components/Layout";
import { useState, useEffect } from "react";
export default function Home() {
	const [mobile, setMobile] = useState(() => {});
	return (
		<div>
			<Layout />
		</div>
	);
}
