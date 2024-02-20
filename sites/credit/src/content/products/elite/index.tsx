<<<<<<< HEAD
import type { Block } from '@hanzo/ui/blocks'

import type { ImageDef } from '@hanzo/ui/types'

import type CardDetailBlock from '@/blocks/def/card-detail'

import MDX_Content from './detail.mdx'
const imageUrl = '/assets/img/gold-and-silver-angled-tight-900x884.png'

export default {blockType: 'card-detail',
  product : 'elite',
  material: '24k Gold or Sterling Silver',
  quantity: '1/100,000',
  image: {
    src: imageUrl,
    dim: {w: 900, h: 884} 
  } satisfies ImageDef,
  detail: <MDX_Content />,
  initial: '$1,000',
  annual: '$1,000' 
} satisfies CardDetailBlock as Block
=======
import type { CardDetail } from '@/types'
import type { ImageDef } from '@hanzo/ui/types'

import MDX_Content from './detail.mdx'
const imageUrl = '/assets/img/gold-and-silver-angled-tight-900x770.png'

export default {
  level : 'elite',
  material: {
    short: '24k Gold or Sterling Silver',
    variants: ['24k Gold', 'Sterling Silver']
  },
  run: 100000,
  image: {
    src: imageUrl,
    dim: {w: 900, h: 770} 
  } satisfies ImageDef,
  detail: <MDX_Content />,
  fees: {
    initial: 1000,
    annual: 1000 
  }
} satisfies CardDetail as CardDetail
>>>>>>> site/credit

