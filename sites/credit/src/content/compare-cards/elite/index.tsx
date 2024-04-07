import TravelBenefits from './travel-benefits.mdx'
import LifestyleBenefits from './lifestyle-benefits.mdx'
import Rewards from './rewards.mdx'
import KarmaRewards from './karma-rewards.mdx'
import type { Card } from '@/types/card'

const card: Card = {
  title: 'Elite Card',
  rarity: '1/10,000',
  materials: [
    {
      title: '24k Gold',
      sku: 'LXM-CR-E-24G',
      materialImg: {
        src: '/assets/img/products/credit/option/elite-card-gold-100x99.png',
        dim: {w: 100, h: 99 },
        alt: '24k Gold'
      },
      cardImg: {
        src: '/assets/img/products/credit/product/gold-f-700x442.png',
        dim: {w: 700, h: 442 },
        alt: 'Elite Card 24k Gold'
      },
    },
    {
      title: 'Sterling Silver',
      sku: 'LXM-CR-E-SS',
      materialImg: {
        src: '/assets/img/products/credit/option/elite-card-silver-99x99.png',
        dim: {w: 99, h: 99 },
        alt: 'Sterling Silver'
      },
      cardImg: {
        src: '/assets/img/products/credit/product/silver-f-700x441.png',
        dim: {w: 700, h: 441 },
        alt: 'Elite Card Sterling Silver'
      },
    }
  ],
  annualFee: 999,
  initiationFee: 4990,
  replacementFee: 79,
  rewardPct: 9,
  fxRatePct: 0.5,
  maxAccountHolders: 5,
  travelBenefits: <TravelBenefits/>,
  lifestyleBenefits: <LifestyleBenefits/>,
  rewards: <Rewards/>,
  karmaRewards: <KarmaRewards/>,
}

export {
  card as default
}