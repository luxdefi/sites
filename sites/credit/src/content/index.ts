import type BannerVideoBlock from '@/blocks/def/banner-video'
import type { HeadingBlock } from '@luxdefi/ui/blocks'
import { DEF_VIDEO_PROPS } from '@luxdefi/ui/util'

export default [
  {
    blockType: 'banner-video',
    specifiers: 'right top text-align-right',
    content: [
      {
        blockType: 'heading',
        heading: 'This is the Coral tile',
        byline: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      } as HeadingBlock,
    ],
    video: {
      blockType: 'video',
      videoProps: DEF_VIDEO_PROPS, 
      poster: '/assets/video/coral-poster-comp.png',
      sources: ['/assets/video/coral-md.mp4'],
      dim: {md: {w: 1920, h: 1080}},
    }
  },
  {
    blockType: 'banner-video',
    content: [
      {
        blockType: 'heading',
        heading: 'This is the card reader tile',
        byline: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      } as HeadingBlock,
    ],
    video: {
      blockType: 'video',
      videoProps: DEF_VIDEO_PROPS, 
      poster: '/assets/video/card-reader-poster-comp.png',
      sources: ['/assets/video/card-reader-md.mp4'],
      dim: {md: {w: 1920, h: 1080}},
    }
  },
  {
    blockType: 'banner-video',
    content: [
      {
        blockType: 'heading',
        heading: 'This is the Fireworks tile',
        byline: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      } as HeadingBlock,
    ],
    video: {
      blockType: 'video',
      videoProps: DEF_VIDEO_PROPS, 
      poster: '/assets/video/fireworks-poster-comp.png',
      sources: ['/assets/video/fireworks-md.mp4'],
      dim: {md: {w: 1920, h: 1080}},
    }
  },
] as BannerVideoBlock[]