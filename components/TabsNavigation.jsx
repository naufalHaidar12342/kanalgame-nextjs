import { Tab } from "@headlessui/react";
import { useState } from "react";
import Link from "next/link";
import listOfMenu from "../data/list-of-menu.json";
export default function TabsNavigation() {
	return (
		<div className="w-full h-16 fixed top-0">
			<Tab.Group as={"div"}>
				<Tab.List as="div">
					{listOfMenu.map((menuName, menuNameIndex) => {
						<Tab as="div" key={menuNameIndex}>
							<Link href={menuName.path} passHref={true}>
								<a>{menuName.label}</a>
							</Link>
						</Tab>;
					})}
				</Tab.List>
			</Tab.Group>
			<nav className=""></nav>
		</div>
	);
}
