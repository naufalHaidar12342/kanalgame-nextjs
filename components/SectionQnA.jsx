import { Disclosure, Transition } from "@headlessui/react";
import { FcExpand } from "react-icons/fc";
import ListQnA from "../data/list-of-qna.json";
export default function SectionQnA() {
	return (
		<div>
			{ListQnA.map((questions, questionIndex) => (
				<Disclosure as={"div"} className="w-full mt-5">
					{({ open }) => (
						<div>
							<Disclosure.Button
								className="flex w-full justify-between rounded-lg bg-AeroBlue px-4 py-2 text-left text-lg font-medium text-Keppel hover:bg-green-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
								key={questionIndex}
							>
								<span>{questions.question}</span>
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
									{questions.answer}
								</Disclosure.Panel>
							</Transition>
						</div>
					)}
				</Disclosure>
			))}
		</div>
	);
}
