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
					<div className="w-80 h-80 relative rounded-full bg-AeroBlue overflow-hidden">
						<Image
							src={"/images/Android_robot.svg"}
							layout="fill"
							objectFit="contain"
						/>
					</div>

					<h3 className="mx-auto items-center mt-6 font-semibold text-4xl">
						Naufal Haidar Rauf
					</h3>
					<ul className="text-2xl flex flex-row mt-2">
						<li className="mx-2">
							<Link href={""} passHref={true}>
								<a className="text-center ">
									<GoOctoface className="inline-block mx-2" />
									Github
								</a>
							</Link>
						</li>
						<li className="mx-2">
							<Link href={""} passHref={true}>
								<a>LinkedIn</a>
							</Link>
						</li>
						<li className="mx-2">
							<Link href={""} passHref={true}>
								<a>Telegram</a>
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
								<MdOutlineAndroid className="inline-block text-center w-5 h-5" />{" "}
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
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
							ipsam inventore obcaecati, soluta commodi et? Cumque dolorum iure
							facilis esse ullam ad unde, delectus deleniti distinctio? Quos
							iste amet numquam?
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}
