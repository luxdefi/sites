import type {
  GridBlock,
  EnhHeadingBlock,
  ImageBlock,
  ScreenfulBlock,
} from '@hanzo/ui/blocks'
import { COMMON_GRID_2_COL } from '@hanzo/ui/types'

const bylines = [
  'Lux Wallet is non-custodial, whereby assets are self-managed instead of third-party managed, private and quantum secure with support for cryptocurrencies, both public and private, fiat currencies, security tokens, and NFT\'s.',
  'Lux Exchange is a decentralized exchange, enabling secure, trustless or no middle-man trading of cryptocurrencies, fiat currencies, commodities, and securities.'
  `Lux Bridge enables complete privacy while exchanging assets across chains, while remaining trustless and non-custodial. ZChain enables anyone to store assets off-chain during bridging, whereby a zero knowledge proof key enables re-minting back on-chain at anytime, in any amount, on any supported chain. Lux DAO maintains asset-backed liquidity pools, ensuring there is always proper liquidity for cross-chain swapping.`,
  `Lux Explorer provides an in-depth look at your multi-bank and multi-wallet assets with ZChain integration. Explorer provides the analytic tools to search for transactions, addresses, and provides tools for performance tracking, trading insights, and portfolio management.`,
]

export default {
  blockType: 'screenful',
  columnSpecifiers: ['center vert-center'],
  contentColumns: [[
    {blockType: 'enh-heading',
      icon: '/assets/content/icon-apps-475.png',
      iconSize: 40,
      preheading: { text: 'NETWORK APPS', level: 5, mb: 2 },
      heading: { text: 'ALL IN ONE PLACE', level: 1 },
    } as EnhHeadingBlock,
    {blockType: 'space', level: 1},
    {blockType: 'grid',
      grid: COMMON_GRID_2_COL,
      cells: [
        {blockType: 'enh-heading',
          specifiers: 'align-middle',
          heading: { text: 'LUX WALLET', level: 3, mb: 6 },
          byline: { text: bylines[0], level: 0 },
        } as EnhHeadingBlock,
        {blockType: 'image',
          src: '/assets/content/image-balance-gt-p-500.png',
          alt: 'Lux Wallet',
          dim: { h: 250, w: 420 },
        } as ImageBlock,
        {blockType: 'enh-heading',
          specifiers: 'align-middle',
          heading: { text: 'LUX EXCHANGE', level: 3, mb: 6 },
          byline: { text: bylines[1], level: 0 },
        } as EnhHeadingBlock,
        {blockType: 'image',
          src: '/assets/content/image-swap-gt-p-500.png',
          alt: 'Lux Swap',
          dim: { h: 250, w: 420 },
        } as ImageBlock,
        {blockType: 'enh-heading',
          specifiers: 'align-middle',
          heading: { text: 'LUX BRIDGE', level: 3, mb: 6 },
          byline: { text: bylines[2], level: 0 },
        } as EnhHeadingBlock,
        {blockType: 'image',
          src: '/assets/content/image-zchain-p-500.png',
          alt: 'Lux Bridge',
          dim: { h: 250, w: 420 },
        } as ImageBlock,
        {blockType: 'enh-heading',
          specifiers: 'align-middle',
          heading: { text: 'LUX EXPLORER', level: 3, mb: 6 },
          byline: { text: bylines[3], level: 0 },
        } as EnhHeadingBlock,
        {blockType: 'image',
          src: '/assets/content/image-lux-explore-p-500.png',
          alt: 'Lux Explorer',
          dim: { h: 250, w: 420 },
        } as ImageBlock,
      ],
    } as GridBlock
  ]]
} as ScreenfulBlock
