import projectList from "../data/list-of-projects.json";
import Image from "next/image";
import Layout from "../components/Layout";
import Link from "next/link";
import Octocat from "../public/images/Octocat.png";
import AndroidRobot from "../public/images/Android_robot.svg";
import { MdNavigateNext } from "react-icons/md";
export default function MyProjects() {
	return (
		<Layout title="My Projects">
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
								<a href={project.link_repo} target="_blank">
									{project.project_name}
								</a>
								<MdNavigateNext className="text-lg translate-y-[1px] hidden group-hover:block" />
							</h4>
							<p className="">{project.project_short_desc}</p>
						</div>
					</div>
				))}
			</div>
		</Layout>
	);
}
