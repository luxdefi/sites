import type { ImageDef } from "@hanzo/ui/types"
import { ProductMediaAccessor } from '@hanzo/commerce'


export default new ProductMediaAccessor({
  img: {
    'LXM-CR-E': { 
      src: '/assets/img/products/credit/families/cards-dual-gd-sl-1485x1114.png', 
      dim: { w: 1485, h: 1114 }
    } satisfies ImageDef,
    'LXM-CR-E-24G': {
      src: '/assets/img/products/credit/product/gold-f-700x442.png', 
      dim: {w: 700, h: 442}
    } satisfies ImageDef,
    'LXM-CR-E-SS': {
      src: '/assets/img/products/credit/product/silver-f-700x441.png', 
      dim: {w: 700, h: 441}
    } satisfies ImageDef,
  },
  anim: {
    'LXM-CR-E-24G': 'https://prod.spline.design/YaHS6YD1dQbaxp4W/scene.splinecode',
    'LXM-CR-E-SS': 'https://prod.spline.design/sKvZa9cmo3oDBIuA/scene.splinecode'
  }
})