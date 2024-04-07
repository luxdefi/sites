import type { Product, Family } from '@hanzo/commerce/types'
import { coinVideo } from '../videos'

const CN_IMG = '/assets/products/coin/lux-coin-800x800.png'
const CN_IMG_DEF = {src: CN_IMG, dim: { w: 800, h: 800}}

const COIN = 0.00011

const K = 1000
const M = 1000 * K
const B = 1000 * M

export default {
  id: 'LXM-CN',
  title: 'Lux Coin',
  img: CN_IMG_DEF, 
  products: [
    {
      id: 'LXM-CN-10B',
      sku: 'LXM-CN-10B',
      familyTitle: 'Lux Coin',
      optionLabel: '10B',
      familyId: 'LXM-CN',
      price: 10 * B * COIN, // $11M
      img: CN_IMG_DEF,
      video: coinVideo
    },
    {
      id: 'LXM-CN-1B',
      sku: 'LXM-CN-1B',
      familyTitle: 'Lux Coin',
      optionLabel: '1B',
      familyId: 'LXM-CN',
      price: B * COIN, // $1.1M
      img: CN_IMG_DEF,
      video: coinVideo
    },
    {
      id: 'LXM-CN-100M',
      sku: 'LXM-CN-100M',
      familyTitle: 'Lux Coin',
      optionLabel: '100M',
      familyId: 'LXM-CN',
      price: 100 * M * COIN, // $110K
      img: CN_IMG_DEF,
      video: coinVideo
    },
    {
      id: 'LXM-CN-10M',
      sku: 'LXM-CN-10M',
      familyTitle: 'Lux Coin',
      optionLabel: '10M',
      familyId: 'LXM-CN',
      price: 10 * M * COIN, // $11K
      img: CN_IMG_DEF,
      video: coinVideo
    },
    {
      id: 'LXM-CN-1M',
      sku: 'LXM-CN-1M',
      familyTitle: 'Lux Coin',
      optionLabel: '1M',
      familyId: 'LXM-CN',
      price: M * COIN, // $1.1K
      img: CN_IMG_DEF,
      video: coinVideo
    },
  ] satisfies Product[]
} satisfies Family