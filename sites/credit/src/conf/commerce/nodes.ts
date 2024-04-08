import type { CategoryNode } from '@hanzo/commerce/types'

const BLACK_IMAGE = '/assets/img/products/credit/product/black-f-700x441.png'
const ELITE_IMAGE = '/assets/img/products/credit/product/gold-f-700x442.png'
const FOUNDER_IMAGE = '/assets/img/products/credit/product/chrome-cool-f-700x441.png'
const SOVEREIGN_IMAGE = '/assets/img/products/credit/product/titanium-f-700x441.png'

import CC_AR from './cc-aspect-ratio'

const CARD_LEVELS = [
  {
    skuToken: 'B',
    label: 'Black',
    img: BLACK_IMAGE,
    imgAR: CC_AR
  },
  {
    skuToken: 'E',
    label: 'Elite',
    img: ELITE_IMAGE,
    imgAR: CC_AR,
  },
  {
    skuToken: 'F',
    label: 'Founder',
    img: FOUNDER_IMAGE,
    imgAR: CC_AR,
  },
  {
    skuToken: 'S',
    label: 'Sovereign',
    img: SOVEREIGN_IMAGE,
    imgAR: CC_AR,
  },
] satisfies CategoryNode[]

const level1 = [
  {
    skuToken: 'CR',
    label: 'Lux Credit',
    terminal: true,
    img: BLACK_IMAGE,
    imgAR: CC_AR,
    subNodesLabel: 'Level',
    subNodes: [...CARD_LEVELS]
  },
] satisfies CategoryNode[]

export default {
  skuToken: 'LXM',
  label: '',
  subNodes: level1
} satisfies CategoryNode




