import projectList from "../data/list-of-projects.json";
import Image from "next/image";
import Layout from "../components/Layout";
import Link from "next/link";
import { MdNavigateNext } from "react-icons/md";
import { BsSignpostFill } from "react-icons/bs";
export default function MyProjects() {
	return (
		<Layout title="My Projects">
			<div className="min-h-screen">
				<div className="mx-auto max-w-6xl">
					<div className="rounded-2xl shadow-xl flex py-6" id="Home title">
						<div className="px-5 my-auto">
							<h2 className="text-3xl font-semibold">
								<BsSignpostFill className="inline-block items-center text-HunterGreen mx-2" />
								Projects
							</h2>
							<p className="">Some projects I have done or took part in.</p>
							<p></p>
						</div>
					</div>
				</div>
				<div className="grid grid-cols-2 gap-5 max-w-6xl mx-auto py-5">
					{projectList.map((project, projectIndex) => (
						<div
							className="hover:bg-Keppel hover:text-white hover:rounded-2xl p-4 flex group"
							key={projectIndex}
						>
							<div id="project-repository-logo">
								<div className="w-14 h-14 relative rounded-full overflow-auto bg-AeroBlue">
									<Image
										src={project.project_platform_logo}
										layout="fill"
										objectFit="contain"
									/>
								</div>
							</div>
							<div className="pl-5" id="project-short-info">
								<h4 className="mb-2 leading-6 font-semibold flex items-center">
									<Link href={project.link_repo} passHref={true}>
										<a target="_blank">{project.project_name}</a>
									</Link>
									<MdNavigateNext className="text-lg translate-y-[1px] hidden group-hover:block" />
								</h4>
								<p className="">{project.project_short_desc}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</Layout>
	);
}
