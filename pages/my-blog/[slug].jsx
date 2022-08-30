import Layout from "../../components/Layout";
import { GraphQLClient } from "graphql-request";
import ReactMarkdown from "react-markdown";

export default function Blog({ post }) {
	return (
		<Layout title={post.title}>
			<div className="content-wrapper ">
				<ReactMarkdown>{post.content.markdown}</ReactMarkdown>
			</div>
			<style jsx global>{`
				h3 {
					font-size: 30px;
					font-weight: 600;
				}
				.content-wrapper {
					display: flex;
					flex-direction: column;
					justify-content: center;
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
