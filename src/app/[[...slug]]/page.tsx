import StoryblokProvider from '@/components/providers/StoryblokProvider'
import { getLinks, getStory } from '@/lib/storyblok'
import { StoryblokStory, StoryblokComponent } from '@storyblok/react/rsc'

interface Paths {
  slug: string[]
}
type Props = {
  params: { slug?: string[] }
  searchParams: { [key: string]: string | string[] | undefined }
}

const isDraftModeEnabled = process.env.NEXT_PUBLIC_IS_PREVIEW === 'true'

export const dynamic = isDraftModeEnabled ? 'force-dynamic' : 'error'

export async function generateStaticParams() {
  const links = await getLinks()
  const paths: Paths[] = []
  Object.keys(links).forEach((linkKey) => {
    if (links[linkKey].is_folder || links[linkKey].slug === 'home') {
      return
    }

    const slug = links[linkKey].slug
    const splittedSlug = slug.split('/')
    paths.push({ slug: splittedSlug })
  })

  return paths
}

export default async function Page({ params }: Props) {
  const slug = params.slug ? params.slug.join('/') : 'home'
  const { story } = await getStory(slug)

  if (!story) {
    return <div>404</div>
  }
  if (isDraftModeEnabled) {
    return (
      <StoryblokProvider>
        <StoryblokStory story={story} />
      </StoryblokProvider>
    )
  }

  return <StoryblokComponent blok={story.content} />
}