import NavigationDesktop from "./NavigationDesktop";
import NavigationMobile from "./NavigationMobile";

export default function Layout({ children }) {
	return (
		<div>
			<NavigationDesktop />
			<main>{children}</main>
		</div>
	);
}
