import Link from "next/link";
import { GoOctoface } from "react-icons/go";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";
export default function Footer() {
	return (
		<div className="bg-HunterGreen">
			<footer className="flex flex-wrap items-center justify-between p-3 m-auto">
				<div className="container mx-auto flex flex-col flex-wrap items-center justify-between">
					<ul className="flex mx-auto text-white text-center">
						<li className="p-2 cursor-pointer" id="GitHub profile">
							<a href={"https://github.com/naufalHaidar12342"} target="_blank">
								<GoOctoface className="h-10 w-10" />
							</a>
						</li>
						<li className="p-2 cursor-pointer" id="Linkedin profile">
							<a
								href={"https://www.linkedin.com/in/naufal-haidar-rauf/"}
								target="_blank"
							>
								<IoLogoLinkedin className="h-10 w-10" />
							</a>
						</li>
						<li className="p-2 cursor-pointer" id="Telegram profile">
							<a href={""} target="_blank">
								<FaTelegramPlane className="h-10 w-10" />
							</a>
						</li>
					</ul>
					<div className="flex mx-auto text-white text-center">
						Massive thanks to
						<Link href={""}>
							<a>ardhayudhatama</a>
						</Link>
					</div>
				</div>
			</footer>
		</div>
	);
}
