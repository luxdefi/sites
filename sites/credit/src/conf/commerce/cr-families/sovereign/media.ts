import type { ImageDef } from "@hanzo/ui/types"
import { ProductMediaAccessor } from '@hanzo/commerce'


export default new ProductMediaAccessor({
  img: {
    'LXM-CR-S': {
      src: '/assets/img/products/credit/families/cards-2-flat-tit-1593x1231.png', 
      dim: {w: 1593, h: 1231}
    } satisfies ImageDef,
    'LXM-CR-S-RT': {
      src: '/assets/img/products/credit/product/titanium-f-700x441.png', 
      dim: {w: 700, h: 441}
    } satisfies ImageDef,
  },
  anim: {
    'LXM-CR-S-RT': 'https://prod.spline.design/gLe0xmFfLrftccCc/scene.splinecode',
  }
})