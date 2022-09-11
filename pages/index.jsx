import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";
import { AiOutlineRead } from "react-icons/ai";
import { BsSignpostFill } from "react-icons/bs";
import { GraphQLClient } from "graphql-request";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import PostCreatedDate from "../components/PostCreatedDate";

export default function Home({ posts }) {
	const DynamicTodayDate = dynamic(
		() => import("../components/TodayDateIndonesia"),
		{ suspense: true }
	);

	return (
		<Layout title="Home">
			<div className="min-h-screen mx-5 my-5">
				<div className="mx-auto max-w-5xl">
					<div className="rounded-2xl shadow-lg flex py-6 " id="Home title">
						<div className="px-5 my-auto">
							<h2 className="text-3xl font-semibold">
								<BsSignpostFill className="inline-block items-center text-HunterGreen mx-2" />
								Posts
							</h2>
							<p className="text-lg italic font-normal">
								Updated if I have spare time, of course.
							</p>
						</div>
					</div>
					<div className="rounded-2xl flex py-6 shadow-lg max-w-xl mt-6 mx-auto">
						<div className="px-5 my-auto w-full">
							<Suspense fallback={"Loading today date in Indonesia..."}>
								<DynamicTodayDate />
							</Suspense>
						</div>
					</div>
				</div>
				<div className="grid grid-cols-1 gap-7 max-w-5xl mx-auto py-5">
					{posts.map((blogPost, indexOfPost) => (
						<div
							className="rounded-2xl bg-Keppel  text-white hover:bg-white flex group p-4 shadow-2xl"
							key={indexOfPost}
						>
							<div className="w-36 h-36 relative overflow-auto">
								<Image
									src={blogPost.coverImage.url}
									layout="fill"
									objectFit="contain"
									alt={"Post illustration"}
								/>
							</div>
							<div className="px-5 my-auto group-hover:text-black">
								<div className="my-2">
									<h3 className="leading-6 font-semibold text-xl">
										{blogPost.title}
									</h3>
								</div>
								<div className="my-2">
									<ul className="">
										{blogPost.tags.map((tagPost, index) => (
											<li className=" py-2 inline-block mx-1 my-2" key={index}>
												<a className="p-3 bg-white text-black rounded-xl group-hover:bg-slate-500 group-hover:text-slate-50 font-medium ">
													{tagPost}
												</a>
											</li>
										))}
									</ul>
								</div>
								<PostCreatedDate posts={blogPost} />
								<p className="font-medium text-lg mt-2">{blogPost.excerpt}</p>

								<div className="py-5">
									<Link href={`/my-blog/${blogPost.slug}`} passHref={true}>
										<a className="inline-block px-6 py-2 border-2 border-white text-white font-semibold text-sm leading-tight uppercase rounded-2xl focus:outline-none focus:ring-0 transition duration-150 ease-in-out  group-hover:text-slate-50 group-hover:font-semibold bg-slate-500">
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

export async function getStaticProps() {
	const client = new GraphQLClient(
		"https://api-ap-southeast-2.hygraph.com/v2/cl7gawkjl7suf01uhdrd42szp/master"
	);
	const { posts } = await client.request(
		`
		{
			posts(orderBy: id_ASC) {
				id
				title
				createdAt
				slug
				tags
				excerpt
				coverImage {
					url
				}
			}
		}
		`
	);

	return {
		props: {
			posts,
		},
	};
}
