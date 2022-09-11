import Link from "next/link";
import { MdClose, MdMenu } from "react-icons/md";
import { useState } from "react";
import listOfMenu from "../data/list-of-menu.json";

export default function NavigationDesktop() {
	const [navOpen, setNavOpen] = useState(true);

	return (
		<div className="w-full h-16 fixed top-0 z-30">
			<nav
				className={` h-full bg-black bg-opacity-80 lg:bg-opacity-0 lg:h-auto`}
			>
				<div className="bg-AeroBlue h-1/2 py-3">
					<div className="container flex flex-col lg:flex-row lg:justify-center pt-10 lg:pt-0">
						<div className="relative  flex items-center">
							{listOfMenu.map((menuOptions, optionIndex) => (
								<div
									className="lg:mx-1 px-5 py-2 lg:hover:bg-Keppel lg:hover:text-white rounded-2xl font-semibold"
									key={optionIndex}
								>
									<Link href={menuOptions.path}>
										<a>{menuOptions.label}</a>
									</Link>
								</div>
							))}
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
}
