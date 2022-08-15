import { projectList } from "../utils/list-of-projects";
import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
export default function MyProjects() {
	const [emblaRef, emblaApi] = useEmblaCarousel();

	const scrollPrev = useCallback(() => {
		if (emblaApi) emblaApi.scrollPrev();
	}, [emblaApi]);
	const scrollNext = useCallback(() => {
		if (emblaApi) emblaApi.scrollNext();
	}, [emblaApi]);

	return (
		<div className="container flex mx-auto">
			<div className="embla relative flex items-center" ref={emblaRef}>
				<div className="embla__container">
					{projectList.map((item, index) => (
						<div className="embla__slide flex justify-center">
							<img
								src={item.image}
								alt=""
								loading="lazy"
								className="w-full object-cover"
							/>
							<div className="absolute bottom-5 text-center text-white w-full">
								<h4>{item.appName}</h4>
								<p className="w-full">{item.shortDesc}</p>
							</div>
						</div>
					))}
				</div>
				<button className="embla__prev absolute left-5" onClick={scrollPrev}>
					<MdNavigateBefore className="text-white text-6xl" />
				</button>
				<button className="embla__next absolute right-5" onClick={scrollNext}>
					<MdNavigateNext className="text-white text-6xl" />
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
				@media (min-width: 768px) {
					.embla__slide {
					  flex: 0 0 50%; /* Breakpoint SM slide covers 50% of the viewport */
					}
			`}</style>
		</div>
	);
}
