import Link from "next/link";
import Image from "next/image";
import Layout from "../components/Layout";
import { GoPrimitiveDot, GoOctoface } from "react-icons/go";
import { MdOutlineAndroid, MdSchool, MdGames } from "react-icons/md";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";
export default function AboutMe() {
	return (
		<Layout title="About Me">
			<div className="min-h-screen">
				<div className="flex flex-col justify-center items-center py-5">
					<div className="w-40 h-40 relative rounded-full bg-AeroBlue overflow-hidden">
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
					<ul className="text-2xl flex flex-row mt-2">
						<li className="mx-2">
							<Link
								href={"https://github.com/naufalHaidar12342"}
								passHref={true}
							>
								<a className="text-center ">
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
								<a>
									<IoLogoLinkedin className="inline-block mx-2" />
									LinkedIn
								</a>
							</Link>
						</li>
						<li className="mx-2">
							<Link href={"https://t.me/heydar12342"} passHref={true}>
								<a>
									<FaTelegramPlane className="inline-block mx-2" />
									Telegram
								</a>
							</Link>
						</li>
					</ul>
					<div className="rounded-2xl max-w-4xl shadow-lg mt-2 p-5">
						<ul className="flex flex-row font-medium text-lg">
							<li className="mx-2 ">
								<MdSchool className="inline-block text-center w-5 h-5" />
								Mahasiswa
							</li>
							<li className="mx-2">
								<MdOutlineAndroid className="inline-block text-center w-5 h-5" />
								Android Developer
							</li>
							<li className="mx-2">
								<MdGames className="inline-block text-center w-5 h-5" /> Video
								Game enjoyer
							</li>
						</ul>
					</div>
					<div className="rounded-2xl max-w-5xl shadow-lg mt-2 p-5">
						<div>
							<h5>
								Final year Bachelor of Informatics Engineering/Computer Science
								at Universitas Dian Nuswantoro. Loves to figure out technologies
								used in website/app that piqued my interest.
							</h5>
						</div>
					</div>
					<div className="rounded-2xl max-w-5xl shadow-lg mt-2 p-5">
						<div>
							<h5>
								1 year of experience in Android development, 6 months of
								experience using Kotlin in Android development.
							</h5>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}
