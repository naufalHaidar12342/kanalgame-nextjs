import { useCallback, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import Image from "next/image";
import Layout from "../components/Layout";
import Autoplay from "embla-carousel-autoplay";
import { GraphQLClient } from "graphql-request";
export default function MyCertifications({ certificates }) {
	const autoPlay = useRef(Autoplay({}, (emblaRoot) => emblaRoot.parentElement));
	const options = { delay: 1000 };
	const [emblaRef, emblaApi] = useEmblaCarousel(options, [autoPlay.current]);

	const scrollPrev = useCallback(() => {
		if (emblaApi) emblaApi.scrollPrev();
	}, [emblaApi]);
	const scrollNext = useCallback(() => {
		if (emblaApi) emblaApi.scrollNext();
	}, [emblaApi]);
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [scrollSnaps, setScrollSnaps] = useState([]);
	const DotButton = ({ selected, onClick }) => (
		<button
			className={`embla__dot ${selected ? "is-selected" : ""}`}
			type="button"
			onClick={onClick}
		/>
	);

	return (
		<Layout title="My Certificates">
			<div className="min-h-screen ">
				<div className="flex max-w-6xl mx-auto">
					<div
						className="embla relative flex items-center  w-full"
						ref={emblaRef}
					>
						<div className="embla__container  w-full">
							{certificates.map((certificate, index) => (
								<div
									className="embla__slide flex justify-center w-full"
									key={index}
								>
									<div className=" w-full h-[1000px] relative">
										<Image
											src={certificate.certificateImage.url}
											layout="fill"
											objectFit="contain"
										/>
									</div>

									<div className="absolute bottom-5 w-full">
										<div className="embla__dots">
											{scrollSnaps.map((_, index) => (
												<DotButton
													key={index}
													selected={index === selectedIndex}
													onClick={() => scrollTo(index)}
												/>
											))}
										</div>
									</div>
								</div>
							))}
						</div>
						<button
							className="embla__prev absolute left-5"
							onClick={scrollPrev}
						>
							<MdNavigateBefore className="text-black text-6xl" />
						</button>
						<button
							className="embla__next absolute right-5"
							onClick={scrollNext}
						>
							<MdNavigateNext className="text-black text-6xl" />
						</button>
					</div>

					<style jsx>{`
						.embla {
							overflow: hidden;
						}
						.embla__container {
							display: flex;
						}
						.embla__slide {
							flex: 0 0 100%;
						}
						.embla__dots {
							display: flex;
							list-style: none;
							justify-content: center;
							padding-top: 10px;
						}

						.embla__dot {
							background-color: transparent;
							cursor: pointer;
							position: relative;
							padding: 0;
							outline: 0;
							border: 0;
							width: 30px;
							height: 30px;
							margin-right: 7.5px;
							margin-left: 7.5px;
							display: flex;
							align-items: center;
						}

						.embla__dot:after {
							background-color: #efefef;
							width: 100%;
							height: 4px;
							border-radius: 2px;
							content: "";
						}

						.embla__dot.is-selected:after {
							background-color: #1bcacd;
							opacity: 1;
						}
					`}</style>
				</div>
			</div>
		</Layout>
	);
}

export async function getStaticProps() {
	const client = new GraphQLClient(
		"https://api-ap-southeast-2.hygraph.com/v2/cl7gawkjl7suf01uhdrd42szp/master"
	);
	const { certificates } = await client.request(
		`
		{
			certificates(orderBy: publishedAt_ASC) {
				certificateName
				certificateImage {
					url
				}
			}
		}
		`
	);

	return {
		props: {
			certificates,
		},
	};
}
