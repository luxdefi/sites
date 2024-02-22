import React from 'react'
import { Footer } from '@hanzo/ui/common'
import { Main } from '@hanzo/ui/primitives'

import siteDef from '../siteDef'
import { ScreenfulBlockComponent as Screenful, type EnhHeadingBlock, type ScreenfulBlock, type ElementBlock, type SpaceBlock, type Block } from '@hanzo/ui/blocks'
import AccessCodeInput from '@/components/AccessCodeInput'
import { isUserAuthenticated } from '@hanzo/auth/lib/firebase/firebase-admin'

const Home = async () => {
  let content: Block[] = [
    {blockType: 'enh-heading',
      specifiers: 'byline-center',
      heading: { text: 'For the real ones.', mb: 6 },
      byline: { text: 'Find and trade tokens, NFTs, and real world assets (RWAs)' },
    } as EnhHeadingBlock
  ]

  if (await isUserAuthenticated()) {
    content = [
      {blockType: 'enh-heading',
        specifiers: 'byline-center',
        heading: { text: 'For the real ones.', mb: 6 },
        byline: { text: 'Find and trade tokens, NFTs, and real world assets (RWAs)' },
      } as EnhHeadingBlock,
      {blockType: 'space', level: 1} as SpaceBlock,
      {blockType: 'enh-heading',
        specifiers: 'center',
        heading: { text: 'Enter your access code', level: 5 },
      } as EnhHeadingBlock,
      {blockType: 'element', element: <AccessCodeInput/>} as ElementBlock
    ]
  }

  return (<>
    <Main className='md:flex-row md:gap-4 w-full'>
      <Screenful
        block={{blockType: 'screenful',
          specifiers: 'center vert-center',
          contentColumns: [content]} as ScreenfulBlock} 
        className='mx-auto'
      />
    </Main>
    <Footer siteDef={siteDef} className='max-w-screen-2xl w-full pt-16 lg:mx-auto ' />
  </>)
}

export default Home
