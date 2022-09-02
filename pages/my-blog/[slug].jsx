import Layout from "../../components/Layout";
import { GraphQLClient } from "graphql-request";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { id } from "date-fns/locale";
import { format } from "date-fns";

export default function Blog({ post }) {
	const formattedDatePattern = "dd MMMM yyyy HH:mm OOOO";
	const formattedDate = format(
		new Date(post.publishedAt),
		formattedDatePattern,
		{ locale: id }
	);
	return (
		<Layout title={post.title}>
			<div className="min-h-screen pt-5 max-w-screen-md mx-auto">
				<div className="flex flex-col justify-center ">
					<h2 className="font-bold text-4xl mt-5">{post.title}</h2>
					<h4 className="font-light mt-2">{post.excerpt}</h4>
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
							<h4 className="text-lg font-medium">{post.author.name}</h4>
							<p className="font-light">{formattedDate}</p>
						</div>
					</div>

					<div className="w-32 h-32 relative mx-auto">
						<Image
							src={post.coverImage.url}
							layout="fill"
							objectFit="contain"
						/>
					</div>

					<ReactMarkdown>{post.content.markdown}</ReactMarkdown>
				</div>
			</div>
			<style jsx global>{`
				h3 {
					font-size: 30px;
					font-weight: 600;
				}
			`}</style>
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
				publishedAt
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
