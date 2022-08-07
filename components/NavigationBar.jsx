import Link from "next/link";
import { MdClose } from "react-icons/md";
import { useState } from "react";

export default function NavigationBar() {
	const [navOpen, setNavOpen] = useState(false);

	return (
		<nav className="w-full fixed top-0 h-full bg-black bg-opacity-80 lg:bg-opacity-0 lg:h-auto">
			<div className="bg-AeroBlue h-1/2 py-3">
				<div className="container flex flex-col lg:flex-row lg:justify-center pt-10 lg:pt-0">
					<div
						id="menu-header"
						className="px-10 flex justify-end lg:hidden"
						onClick={() => setNavOpen(true)}
					>
						<button className="rounded mb-1 active:bg-slate-50 active:rounded-full p-2">
							<MdClose className="text-2xl" />
						</button>
					</div>
					<ul
						id="list-of-options"
						className="flex flex-col px-6 lg:flex-row lg:px-4 "
					>
						{data.map((item, index) => (
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
	);
}

const data = [
	{
		label: "Home",
		path: "/",
	},
	{
		label: "My Projects",
		path: "/my-projects",
	},
	{
		label: "Certifications",
		path: "/my-certifications",
	},
];
