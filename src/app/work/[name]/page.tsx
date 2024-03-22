import { siteData } from '../../../data/siteData'
import { Img } from '../../../components/Img'
import { Images } from '../../../components/Images'
import Image from 'next/image'
import { ProjectTags } from '../../../components/ProjectTags'
import { ProjectLink } from '../../../components/ProjectLink'

export const generateStaticParams = () => {
  const result = siteData.map((item) => ({
    name: item.slug,
    slug: `/work/${item.slug}`,
  }))
  return result
}

function displayGallery(
  images: { src: string; alt: string }[] = [],
  video: string[] = []
): JSX.Element | null {
  if (images.length > 0 || video.length > 0) {
    return <Images gallery={images} videos={video} />
  }

  return null
}

export default function Work({ params }: { params: { name: string } }) {
  const { name } = params
  const projectData = siteData.find((item) => item.slug === name)

  return projectData ? (
    <section className="bg-page mb:4">
      {projectData.cover && (
        <Img
          src={`/images/${projectData.cover.src}`}
          alt={projectData.cover.alt}
          className="block w-full mb-2 border-b-3 border-black border-opacity-10"
        />
      )}
      <div className="p-4">
        <h1 className="font-bold text-xl mb-2">{projectData.name}</h1>
        <section
          className="mb-4"
          dangerouslySetInnerHTML={{ __html: projectData?.description || '' }}
        />
        {projectData.tags && <ProjectTags tags={projectData.tags} />}
        {projectData.github && (
          <ProjectLink
            url={projectData.github}
            Image={
              <Image
                src="/github.svg"
                alt="github logo"
                width="24"
                height="24"
              />
            }
          />
        )}
        {projectData.link && (
          <ProjectLink
            url={projectData.link}
            Image={
              <Image src="/link.svg" alt="link logo" width="24" height="24" />
            }
          />
        )}
        {displayGallery(projectData.images, projectData.video)}
      </div>
    </section>
  ) : null
}
