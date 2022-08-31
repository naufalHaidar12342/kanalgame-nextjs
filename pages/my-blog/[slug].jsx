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
	console.log(formattedDate);
	return (
		<Layout title={post.title}>
			<div className="min-h-screen pt-5">
				<div className="flex flex-col justify-center items-center ">
					<h2 className="font-bold text-4xl mt-5">{post.title}</h2>
					<div className="flex">
						<div
							className="w-32 h-32 relative rounded-full overflow-auto mt-4"
							id="Author section"
						>
							<Image
								src={post.author.picture.url}
								layout="fill"
								objectFit="contain"
							/>
						</div>
						<div className="mx-auto my-auto items-center p-4">
							<h4 className="text-lg font-medium">{post.author.name}</h4>
							<p className="font-light">{formattedDate}</p>
						</div>
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

	console.log(post);

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
