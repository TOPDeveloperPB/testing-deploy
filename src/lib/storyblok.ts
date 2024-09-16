import {
    storyblokInit,
    getStoryblokApi,
    apiPlugin,
    ISbStoriesParams,
    ISbStoryData,
  } from '@storyblok/react/rsc'
  
  const storyblokToken = process.env.NEXT_PUBLIC_SB_PREVIEW_TOKEN
  
  const isDraftModeEnabled = process.env.NEXT_PUBLIC_IS_PREVIEW === 'true'
  const contentVersion = isDraftModeEnabled ? 'draft' : 'published'
  
  storyblokInit({
    accessToken: storyblokToken,
    use: [apiPlugin],
  })
  


  export async function getLinks() {
    const storyblokApi = getStoryblokApi()
    if (!storyblokApi) {
      return
    }
    const { data } = await storyblokApi.get('cdn/links', {
      version: contentVersion,
    })
    const links = data ? data.links : null
    return links
  }
  
  export async function getStory(
    slug?: string,
  ): Promise<{ story: ISbStoryData }> {
    const cv = new Date().getTime() / 1000
    const searchParamsData: ISbStoriesParams = {
      token: process.env.NEXT_PUBLIC_SB_PREVIEW_TOKEN,
      cv,
      version: contentVersion
  
    }
  
    const searchParams = new URLSearchParams(
      searchParamsData as Record<string, string>,
    )
  
    const { story } = await fetch(
      `https://api.storyblok.com/v2/cdn/stories/${slug}?${searchParams.toString()}`,
      {
        next: {
          tags: ['page'],
          revalidate: 1,
        },
      },
    ).then((res) => res.json())
  
    return {
      story,
    }
  }
  
//   export async function getNavStory() {
//     const cv = new Date().getTime() / 1000
//     const searchParamsData: ISbStoriesParams = {
//       token: process.env.NEXT_PUBLIC_SB_PREVIEW_TOKEN,
//       cv,
//       version: contentVersion,
//     }
  
//     const searchParams = new URLSearchParams(
//       searchParamsData as Record<string, string>,
//     )
  
//     const { story } = await fetch(
//       `https://api.storyblok.com/v2/cdn/stories/global/layout/navbar?${searchParams.toString()}`,
//       {
//         next: {
//           tags: ['layout'],
//         },
//       },
//     ).then((res) => res.json())
  
//     return {
//       navbar: story,
//     }
//   }
  
//   export async function getFooterStory() {
//     const cv = new Date().getTime() / 1000
//     const searchParamsData: ISbStoriesParams = {
//       token: process.env.NEXT_PUBLIC_SB_PREVIEW_TOKEN,
//       cv,
//       version: contentVersion,
//     }
  
//     const searchParams = new URLSearchParams(
//       searchParamsData as Record<string, string>,
//     )
  
//     const { story } = await fetch(
//       `https://api.storyblok.com/v2/cdn/stories/global/layout/footer?${searchParams.toString()}`,
//       {
//         next: {
//           tags: ['layout'],
//         },
//       },
//     ).then((res) => res.json())
  
//     return {
//       footer: story,
//     }
//   }
  
  // export async function getStory(slug: string) {
  //   const storyblokApi = getStoryblokApi()
  //   if (!storyblokApi) {
  //     return
  //   }
  //   // cache: 'no-store' is only for dev and preview
  //   // remove it from production
  //   const { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams, {
  //     cache: 'no-store',
  //   })
  //   const story = data ? data.story : null
  //   return story
  // }