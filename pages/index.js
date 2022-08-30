import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";
import InitialPost from "../data/initial-posts.json";
import { AiOutlineRead } from "react-icons/ai";
import { BsSignpostFill } from "react-icons/bs";
export default function Home() {
	return (
		<Layout title="Home">
			<div className="min-h-screen mx-5 my-5">
				<div className="mx-auto max-w-5xl">
					<div className="rounded-2xl shadow-xl flex py-6" id="Home title">
						<div className="px-5 my-auto">
							<h2 className="text-3xl font-semibold">
								<BsSignpostFill className="inline-block items-center text-HunterGreen mx-2" />
								Posts
							</h2>
							<p className="">Updated if I have spare time, of course.</p>
							<p></p>
						</div>
					</div>
				</div>
				<div className="grid grid-cols-1 gap-7 max-w-5xl mx-auto py-5">
					{InitialPost.map((post, indexOfPost) => (
						<div className="rounded-2xl bg-HunterGreen text-white hover:bg-Keppel flex group p-4 shadow-xl">
							<div
								className="w-36 h-36 relative rounded overflow-auto"
								key={indexOfPost}
							>
								<Image
									src={post.post_illustration}
									layout="fill"
									objectFit="contain"
								/>
							</div>
							<div className="px-5 my-auto group-hover:text-black">
								<h4 className="mb-2 leading-6 font-semibold">
									{post.post_title}
								</h4>
								<p className="font-medium">{post.post_short_desc}</p>
								<div className="py-5">
									<Link href={""} passHref={true}>
										<a className="inline-block px-6 py-2 border-2 border-white text-white font-medium text-sm leading-tight uppercase rounded-full focus:outline-none focus:ring-0 transition duration-150 ease-in-out group-hover:border-black group-hover:text-black group-hover:font-semibold">
											<AiOutlineRead className="inline-block h-6 w-6 mr-2" />
											Read More
										</a>
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</Layout>
	);
}
