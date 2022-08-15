import Link from "next/link";
import { MdClose, MdMenu } from "react-icons/md";
import { useState } from "react";
import { listOfMenu } from "../utils/list-of-menu";

export default function NavigationDesktop() {
	const [navOpen, setNavOpen] = useState(true);

	return (
		<div className="w-full h-16 fixed top-0">
			<nav
				className={` h-full bg-black bg-opacity-80 lg:bg-opacity-0 lg:h-auto ${
					navOpen ? "" : "hidden"
				}`}
			>
				<div className="bg-AeroBlue h-1/2 py-3">
					<div className="container flex flex-col lg:flex-row lg:justify-center pt-10 lg:pt-0">
						<ul
							id="list-of-options"
							className={`flex flex-col px-6 lg:flex-row lg:px-4 ${
								navOpen ? "" : "hidden"
							}`}
						>
							{listOfMenu.map((item, index) => (
								<li
									id={item.label}
									className="lg:mx-1 px-5 py-2 lg:hover:bg-Keppel lg:hover:text-white rounded"
									key={index}
								>
									<Link href={item.path}>
										<a>{item.label}</a>
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			</nav>
			<div
				id="menu-header"
				className="px-10 py-5 flex justify-end lg:hidden fixed z-30 top-0"
				onClick={() => setNavOpen(!navOpen)}
			>
				<button className="rounded mb-1 active:bg-slate-50 active:rounded-full p-2">
					{navOpen ? (
						<MdClose className="text-2xl" />
					) : (
						<MdMenu className="text-2xl" />
					)}
				</button>
			</div>
		</div>
	);
}
