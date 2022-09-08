import Link from "next/link";
import Image from "next/image";
import Layout from "../components/Layout";
import { GoOctoface } from "react-icons/go";
import { MdOutlineAndroid, MdSchool, MdGames } from "react-icons/md";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";
import SectionQnA from "../components/SectionQnA";
export default function AboutMe() {
	return (
		<Layout title="About Me">
			<div className="min-h-screen">
				<div className="flex flex-col justify-center items-center py-5">
					<div className="w-48 h-48 md:w-40 md:h-40 relative rounded-full bg-AeroBlue overflow-hidden">
						<Image
							src={"/images/DSC_0491-resize.jpg"}
							layout="fill"
							objectFit="contain"
							alt="My profile"
						/>
					</div>
					<h3 className="mx-auto items-center mt-6 font-semibold text-4xl">
						Naufal Haidar Rauf
					</h3>
					<ul className="text-2xl flex flex-col md:flex-row mt-2">
						<li className="mx-2">
							<Link
								href={"https://github.com/naufalHaidar12342"}
								passHref={true}
							>
								<a className="text-center " target="_blank">
									<GoOctoface className="inline-block mx-2" />
									Github
								</a>
							</Link>
						</li>
						<li className="mx-2">
							<Link
								href={"https://www.linkedin.com/in/naufal-haidar-rauf/"}
								passHref={true}
							>
								<a target="_blank">
									<IoLogoLinkedin className="inline-block mx-2" />
									LinkedIn
								</a>
							</Link>
						</li>
						<li className="mx-2">
							<Link href={"https://t.me/heydar12342"} passHref={true}>
								<a target="_blank">
									<FaTelegramPlane className="inline-block mx-2" />
									Telegram
								</a>
							</Link>
						</li>
					</ul>

					<div className="mx-auto rounded-2xl bg-white p-2 max-w-3xl my-5">
						<div className="rounded-2xl shadow-lg mt-2 p-5 w-full">
							<ul className="text-lg md:inline-flex items-center">
								<li className="mx-2 p-2">
									<h4>
										<MdSchool className="inline-block w-6 h-6" /> Student
									</h4>
								</li>
								<li className="mx-2 p-2">
									<h4>
										<MdOutlineAndroid className="inline-block w-6 h-6" />{" "}
										Android Developer (in-progress)
									</h4>
								</li>
								<li className="mx-2 p-2">
									<h4>
										<MdGames className="inline-block w-6 h-6" />
										Casual video game enjoyer
									</h4>
								</li>
							</ul>
						</div>
						<SectionQnA />
					</div>
				</div>
			</div>
		</Layout>
	);
}
