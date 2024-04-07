
import type { Product } from '@hanzo/commerce/types'
import type { CardFamily } from '@/types'

import MDX_Content from './detail.mdx'

export default {
  type : 'founder',
  id: 'LXM-CR-F',
  material: 'Cool or Iridescent Chrome',
  parentTitle: 'Lux Credit',
  title: 'Lux Founder Card',
  titleShort: 'Founder',
  img:  {src: '/assets/img/products/credit/families/cards-dual-chr-psm-1475x1220.png', dim: {w: 1475, h: 1220}},
  run: 10000,
  fees: {
    initial: 5000,
    annual: 200 
  },
  detail: <MDX_Content />,
  products: [
    {
      id: 'LXM-CR-F-CC',
      sku: 'LXM-CR-F-CC',
      familyId: 'LXM-CR-F',
      familyTitle: 'Founder',
      optionLabel: 'Cool Chrome',
      price: 5000,
      img: {src: '/assets/img/products/credit/product/chrome-cool-f-700x441.png', dim: {w: 700, h: 441}},
      animation: 'https://prod.spline.design/Wpu4L9F5H1tfK1dv/scene.splinecode'
    } satisfies Product,
    {
      id: 'LXM-CR-F-IC',
      sku: 'LXM-CR-F-IC',
      familyId: 'LXM-CR-F',
      familyTitle: 'Founder',
      optionLabel: 'Iridescent Chrome',
      price: 5000,
      img: {src: '/assets/img/products/credit/product/chrome-irid-f-700x441.png', dim: {w: 700, h: 441}},
      animation: 'https://prod.spline.design/O1mz-aE1mHafZXeX/scene.splinecode'
    } satisfies Product,
  ]

} satisfies CardFamily as CardFamily

