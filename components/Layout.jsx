import Footer from "./Footer";
import NavigationDesktop from "./NavigationDesktop";

import Head from "next/head";

export default function Layout({ children, title = "" }) {
	return (
		<div>
			<Head>
				<title>{title}</title>
			</Head>
			<NavigationDesktop />
			<main className="mt-16">{children}</main>
			<Footer />
		</div>
	);
}
