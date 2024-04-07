import TravelBenefits from './travel-benefits.mdx'
import LifestyleBenefits from './lifestyle-benefits.mdx'
import Rewards from './rewards.mdx'
import KarmaRewards from './karma-rewards.mdx'
import type { Card } from '@/types/card'

const card: Card = {
  title: 'Sovereign Card',
  rarity: '1/10,000',
  materials: [{
    title: 'Reflective Titanium',
    sku: 'LXM-CR-S-RT',
    materialImg: {
      src: '/assets/img/products/credit/option/sovereign-card-reflective-titanium-100x99.png',
      dim: {w: 100, h: 99 },
      alt: 'Reflective Titanium'
    },
    cardImg: {
      src: '/assets/img/products/credit/product/titanium-f-700x428.png',
      dim: {w: 700, h: 428 },
      alt: 'Sovereign Card Reflective Titanium'
    },
  }],
  annualFee: 4999,
  initiationFee: 49050,
  replacementFee: 89,
  rewardPct: 11,
  fxRatePct: 0,
  maxAccountHolders: 10,
  travelBenefits: <TravelBenefits/>,
  lifestyleBenefits: <LifestyleBenefits/>,
  rewards: <Rewards/>,
  karmaRewards: <KarmaRewards/>,
}

export {
  card as default,
}