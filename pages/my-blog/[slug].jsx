import Layout from "../../components/Layout";
import { GraphQLClient } from "graphql-request";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { id } from "date-fns/locale";
import { format } from "date-fns";
import CodeHighlight from "../../components/react-markdown-custom-renderer/CodeHighlight";
export default function Blog({ post }) {
	const formattedDatePattern = "dd MMMM yyyy HH:mm ";
	const createdAtFormat = format(
		new Date(post.createdAt),
		formattedDatePattern,
		{
			locale: id,
		}
	);
	const updatedAtFormat = format(
		new Date(post.updatedAt),
		formattedDatePattern,
		{ locale: id }
	);

	return (
		<Layout title={post.title}>
			<div className="min-h-screen pt-5 max-w-screen-lg mx-auto">
				<div className="flex flex-col justify-center mx-10">
					<h2 className="font-bold text-4xl mt-5">{post.title}</h2>
					<h4 className="font-semibold mt-2 text-slate-600 text-xl">
						{post.excerpt}
					</h4>
					<ul>
						{post.tags.map((postTags, indexTags) => (
							<li className="py-2 inline-block" key={indexTags}>
								<button className="mx-2 py-2 px-3 bg-slate-600 rounded-xl font-medium text-white">
									{postTags}
								</button>
							</li>
						))}
					</ul>
					<div className="flex">
						<div
							className="w-16 h-16 relative rounded-full overflow-auto mt-4"
							id="Author section"
						>
							<Image
								src={post.author.picture.url}
								layout="fill"
								objectFit="contain"
							/>
						</div>
						<div className="justify-start my-auto p-4">
							<h4 className="text-xl font-semibold">{post.author.name}</h4>
							<h5 className="font-light">
								Posted at {createdAtFormat}, Indonesia
							</h5>
							<h5 className="font-medium">
								Post updated at {updatedAtFormat}, Indonesia
							</h5>
						</div>
					</div>

					<div className="w-80 h-80 relative mx-auto">
						<Image
							src={post.coverImage.url}
							layout="fill"
							objectFit="contain"
							alt="Cover image of post"
						/>
					</div>

					<CodeHighlight content={post.content.markdown} />
				</div>
			</div>
		</Layout>
	);
}

export async function getStaticProps({ params: { slug } }) {
	const client = new GraphQLClient(
		"https://api-ap-southeast-2.hygraph.com/v2/cl7gawkjl7suf01uhdrd42szp/master"
	);
	const { post } = await client.request(
		`
		{
			post(where: { slug: "${slug}" }) {
				title
				createdAt
				publishedAt
				updatedAt
				slug
				tags
				excerpt
				coverImage {
					url
				}
                content {
                    markdown
                }
				author {
					name
					picture {
						url
					}
				}
			}
		}
		`
	);

	return {
		props: {
			post,
		},
	};
}

export async function getStaticPaths() {
	const client = new GraphQLClient(
		"https://api-ap-southeast-2.hygraph.com/v2/cl7gawkjl7suf01uhdrd42szp/master"
	);
	const { posts } = await client.request(
		`
		{
			posts(orderBy: id_ASC) {
				slug
			}
		}
		`
	);

	const paths = posts.map((item) => {
		return { params: { slug: item.slug } };
	});

	return {
		paths,
		fallback: false,
	};
}
