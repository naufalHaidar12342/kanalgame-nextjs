import Link from "next/link";
import Image from "next/image";
import Layout from "../components/Layout";
import { GoOctoface } from "react-icons/go";
import { MdOutlineAndroid, MdSchool, MdGames } from "react-icons/md";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";
import { Disclosure, Transition } from "@headlessui/react";
import { FcExpand } from "react-icons/fc";

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
					<div
						className=" rounded-2xl max-w-md shadow-lg mt-2 p-5 "
						id="my-role"
					>
						<ul className="font-medium text-lg px-4 w-full">
							<li className="mx-auto items-center">
								<MdSchool className="inline-block text-center w-5 h-5" />
								Mahasiswa
							</li>
							<li className="mx-auto items-center ">
								<MdOutlineAndroid className="inline-block text-center w-5 h-5" />
								Android Developer
							</li>
							<li className="mx-auto items-center">
								<MdGames className="inline-block text-center w-5 h-5" /> Video
								Game enjoyer
							</li>
						</ul>
					</div>
					<div className="mx-auto rounded-2xl bg-white p-2 max-w-lg my-5">
						<Disclosure as={"div"} className="w-full">
							{({ open }) => (
								<>
									<Disclosure.Button className="flex w-full justify-between rounded-lg bg-AeroBlue px-4 py-2 text-left text-lg font-medium text-Keppel hover:bg-green-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
										<span>What is your refund policy?</span>
										<FcExpand
											className={`${
												open ? "rotate-180 transform" : ""
											} h-5 w-5 text-purple-500`}
										/>
									</Disclosure.Button>

									<Transition
										enter="transition duration-100 ease-out"
										enterFrom="transform scale-95 opacity-0"
										enterTo="transform scale-100 opacity-100"
										leave="transition duration-75 ease-out"
										leaveFrom="transform scale-100 opacity-100"
										leaveTo="transform scale-95 opacity-0"
									>
										<Disclosure.Panel className="px-4 w-full pt-4 pb-2 text-lg text-gray-500 shadow-md rounded-lg">
											If you're unhappy with your purchase for any reason, email
											us within 90 days and we'll refund you in full, no
											questions asked.
										</Disclosure.Panel>
									</Transition>
								</>
							)}
						</Disclosure>
						<div className="rounded-2xl shadow-lg mt-2 p-5">
							<div>
								<h5>
									Final year Bachelor of Informatics Engineering/Computer
									Science at Universitas Dian Nuswantoro. Loves to figure out
									technologies used in website/app that piqued my interest.
								</h5>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}
