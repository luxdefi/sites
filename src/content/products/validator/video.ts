import { type MediaBlock } from '@/types/block'
import { DEF_VIDEO_PROPS } from '@/util'

export default  {
  blockType: 'video',
  videoProps: DEF_VIDEO_PROPS, 
  image: '/assets/video/Lux-VALIDATOR-poster.jpg',
  sources: [
    '/assets/video/Lux-VALIDATOR-transcode.mp4', 
    '/assets/video/Lux-VALIDATOR-transcode.webm'
  ],
    // Determin aspect ration from dims manually...
    // https://stackoverflow.com/questions/684015/how-can-i-get-the-resolution-width-and-height-for-a-video-file-from-a-linux-co
  dim: {
    // dims are 656x484, let's cut in half
    // ratio: 1.355

    md: {
      width: 328,
      height: 242
    },

    lg: {
      width: 400,
      height: 295
    },
  }
} as MediaBlock