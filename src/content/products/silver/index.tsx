import type * as C from '@/types/block'

import MiniChart from '@/components/mini-chart'

import YahooFinanceCard from './yahoo-finance-card.mdx'
import SilverStockInvestorCard from './silver-stock-investor-card.mdx'

import media from './video'
import accordian from './accordian'

export default {
  blockType: 'product-detail',
  title: 'LUX SILVER',
  desc: 'Get unprecedented access to silver with 1:1 asset-backed Lux Silver NFTs, sovereign ownership of physical silver without management fees, and mine-direct discount pricing.',
  media,
  accordian,
  price: {
    heading: 'Price',
    priceCard: {
      blockType: 'card',
      title: 'Lux Silver Price / Oz',
      content: <h4>USD 20</h4>,
    },
    msCard: {
      blockType: 'card',
      specifiers: 'full-width',
      title: 'Market Spot Price / Oz',
      content: <MiniChart symbol='SILVER' exchange='TVC' /> 
    } 
  },
  blocks: [
    {
      blockType: 'heading',
      heading: 'Editions'
    } as C.HeadingBlock,
    {
      blockType: 'card',
      specifiers: 'media-left',
      title: 'NEXT MINT',
      content: <>
        <p>Available: 10,000,100 oz</p>
        <p>Price: $20 / oz</p>
        <p>Spot price:: ~$25 / oz</p>
      </>,
      media,
    } as C.CardBlock,
    {
      blockType: 'cta',
      elements: [{
        title: 'Buy Now',
        href: '/', // TOOD
        variant: 'primary',
        size: 'lg'
      }]
    } as C.CTABlock,
    {
      blockType: 'space'
    },
    {
      blockType: 'heading',
      heading: 'Lux Silver News'
    } as C.HeadingBlock,
    {
      blockType: 'card',
      specifiers: 'left-justify-content bg-card',
      content: <YahooFinanceCard />,
      link: {
        title: 'View on Yahoo Finance',
        external: true,
        href: 'https://finance.yahoo.com/news/viscount-mining-lux-partners-ltd-114500431.html'
      }
    } as C.CardBlock,
    {
      blockType: 'space'
    },
    {
      blockType: 'heading',
      heading: 'Silver Market News'
    } as C.HeadingBlock,
    {
      blockType: 'card',
      specifiers: 'news',
      content: <SilverStockInvestorCard />,
      link: {
        title: 'Download PDF',
        href: '/assets/pdf/Silver-Stock-Investor.pdf'
      }
    } as C.CardBlock,

  ] as C.Block[]
} as C.ProductDetailBlock
