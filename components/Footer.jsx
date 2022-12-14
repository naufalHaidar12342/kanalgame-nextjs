import Link from "next/link";
import { GoOctoface } from "react-icons/go";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";
export default function Footer() {
	return (
		<div className="bg-HunterGreen">
			<footer className="flex flex-wrap items-center justify-between p-3 m-auto h-full">
				<div className="container mx-auto flex flex-col flex-wrap items-center justify-between">
					<ul className="flex mx-auto text-white text-center">
						<li className="p-2 cursor-pointer hover:underline">
							Hit me up on these platform:
						</li>
					</ul>
					<ul className="flex mx-auto text-white text-center">
						<li className="p-2 cursor-pointer" id="GitHub profile">
							<Link
								href={"https://github.com/naufalHaidar12342"}
								passHref={true}
							>
								<a target="_blank">
									<GoOctoface className="h-10 w-10" />
								</a>
							</Link>
						</li>
						<li className="p-2 cursor-pointer" id="Linkedin profile">
							<Link
								href={"https://www.linkedin.com/in/naufal-haidar-rauf/"}
								passHref={true}
							>
								<a target="_blank">
									<IoLogoLinkedin className="h-10 w-10" />
								</a>
							</Link>
						</li>
						<li className="p-2 cursor-pointer" id="Telegram profile">
							<Link href={"https://t.me/heydar12342"} passHref={true}>
								<a target="_blank">
									<FaTelegramPlane className="h-10 w-10" />
								</a>
							</Link>
						</li>
					</ul>
					<ul className="flex mx-auto text-white text-center flex-col">
						<li className="p-1 ">
							Co-authored by
							<Link
								href={"https://github.com/devardha"}
								passHref={true}
								className="cursor-pointer"
							>
								<a target={"_blank"}> devardha </a>
							</Link>
						</li>
						<li className="p-1">
							Check out his{" "}
							<Link
								href={"https://ardha.dev"}
								passHref={true}
								className="cursor-pointer"
							>
								<a target={"_blank"}>cool website</a>
							</Link>
							, too!
						</li>
					</ul>
				</div>
			</footer>
		</div>
	);
}
