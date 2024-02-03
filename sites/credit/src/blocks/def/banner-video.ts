import type { Block, VideoBlock } from '@luxdefi/ui/blocks'

interface BannerVideoBlock extends Block {
  blockType: 'banner-video'
  video: VideoBlock
  specifiers?: string // render hints etc
  content: Block[]
}

export {
  type BannerVideoBlock as default
}
