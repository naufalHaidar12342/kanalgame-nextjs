import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";
import { AiOutlineRead } from "react-icons/ai";
import { BsSignpostFill } from "react-icons/bs";
import { GraphQLClient } from "graphql-request";
import { id } from "date-fns/locale";
import { format } from "date-fns";
import dynamic from "next/dynamic";
import { Suspense } from "react";

export default function Home({ posts }) {
	const formattedDatePattern = "dd MMMM yyyy HH:mm OOOO";
	const todayDatePattern = "EEEE, dd MMMM yyyy HH:mm:ss";
	const DynamicTodayDate = dynamic(
		() => import("../components/TodayDateIndonesia"),
		{ suspense: true }
	);
	return (
		<Layout title="Home">
			<div className="min-h-screen mx-5 my-5">
				<div className="mx-auto max-w-5xl">
					<div className="rounded-2xl shadow-xl flex py-6 " id="Home title">
						<div className="px-5 my-auto">
							<h2 className="text-3xl font-semibold">
								<BsSignpostFill className="inline-block items-center text-HunterGreen mx-2" />
								Posts
							</h2>
							<p className="text-lg italic font-normal">
								Updated if I have spare time, of course.
							</p>
							<Suspense fallback={"Loading today date in Indonesia..."}>
								<DynamicTodayDate />
							</Suspense>
						</div>
					</div>
				</div>
				<div className="grid grid-cols-1 gap-7 max-w-5xl mx-auto py-5">
					{posts.map((blogPost, indexOfPost) => (
						<div
							className="rounded-2xl bg-HunterGreen text-white hover:bg-Keppel flex group p-4 shadow-xl"
							key={indexOfPost}
						>
							<div className="w-36 h-36 relative rounded overflow-auto">
								<Image
									src={blogPost.coverImage.url}
									layout="fill"
									objectFit="contain"
									alt={"Post illustration"}
								/>
							</div>
							<div className="px-5 my-auto group-hover:text-black">
								<h4 className="mb-2 leading-6 font-semibold">
									{blogPost.title}
								</h4>
								<p className="font-light">
									{format(
										new Date(blogPost.publishedAt),
										formattedDatePattern,
										{
											locale: id,
										}
									)}
								</p>
								<ul className="">
									{blogPost.tags.map((tagPost, index) => (
										<li className="text-white py-2 inline-block" key={index}>
											<a className="mx-2 py-2 px-3 bg-OliveDrab7Variant rounded-full group-hover:bg-white group-hover:text-black font-medium ">
												{tagPost}
											</a>
										</li>
									))}
								</ul>
								<p className="font-medium">{blogPost.excerpt}</p>
								<div className="py-5">
									<Link href={`/my-blog/${blogPost.slug}`} passHref={true}>
										<a className="inline-block px-6 py-2 border-2 border-white text-white font-semibold text-sm leading-tight uppercase rounded-2xl focus:outline-none focus:ring-0 transition duration-150 ease-in-out group-hover:border-black group-hover:text-black group-hover:font-semibold">
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
				publishedAt
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
