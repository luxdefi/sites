import type { Product } from '@hanzo/commerce/types'
import type { CardFamily } from '@/types'

import MDX_Content from './detail.mdx'

export default {
  type : 'elite',
  id: 'LXM-CR-E',
  material: '24k Gold or Sterling Silver',
  parentTitle: 'Lux Credit',
  title: 'Lux Elite Card',
  titleShort: 'Elite',
  img: {src: '/assets/img/products/credit/families/cards-dual-gd-sl-1485x1114.png', dim: {w: 1485, h: 1114}},
  run: 100000,
  fees: {
    initial: 1000,
    annual: 1000 
  },
  detail: <MDX_Content />,
  products: [
    {
      id: 'LXM-CR-E-24G',
      sku: 'LXM-CR-E-24G',
      familyId: 'LXM-CR-E',
      familyTitle: 'Elite',
      optionLabel: '24k Gold',
      price: 500,
      img: {src: '/assets/img/products/credit/product/gold-f-700x442.png', dim: {w: 700, h: 442}},
      animation: 'https://prod.spline.design/YaHS6YD1dQbaxp4W/scene.splinecode'
    } satisfies Product,
    {
      id: 'LXM-CR-E-SS',
      sku: 'LXM-CR-E-SS',
      familyId: 'LXM-CR-E',
      familyTitle: 'Elite',
      optionLabel: 'Sterling Silver',
      price: 500,
      img: {src: '/assets/img/products/credit/product/silver-f-700x441.png', dim: {w: 700, h: 441}},
      animation: 'https://prod.spline.design/sKvZa9cmo3oDBIuA/scene.splinecode'
    } satisfies Product,
  ]
} satisfies CardFamily 

