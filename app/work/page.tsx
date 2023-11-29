import getWorks from "@/actions/getWorks";
import WorkClient from "@/components/work-client";

export type slideType = {
  slides: IMAGES[];
};
type IMAGES = {
  images: WORK[];
};
export type WORK = {
  imageUrl: string;
  title: string;
  description: string;
  repo: string;
  publishUrl: string;
  tags: string;
};
const WorkPage = async () => {
  const works = await getWorks();

  const formatWorkSlides = (works: any, imagesPerSlide: number) => {
    const workSlides: slideType = { slides: [] };

    for (let i = 0; i < works.length; i += imagesPerSlide) {
      const slideImages: WORK[] = works
        .slice(i, i + imagesPerSlide)
        .map((work: any) => ({
          imageUrl: work[0],
          title: work[1],
          description: work[2],
          repo: work[3],
          publishUrl: work[4],
          tags: work[5],
        }));

      workSlides.slides.push({ images: slideImages });
    }

    return workSlides;
  };

  const worksFormatted = formatWorkSlides(works, 4);

  return <WorkClient works={worksFormatted} />;
};

export default WorkPage;
