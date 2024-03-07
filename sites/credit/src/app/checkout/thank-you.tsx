import React from 'react'
import Link from 'next/link'

import { 
  type EnhHeadingBlock, 
  type ScreenfulBlock, 
  type ElementBlock, 
  ScreenfulBlockComponent, 
} from '@hanzo/ui/blocks'

const WHILE_YOU_WAIT = (
  <p>
  While you wait, we cordially invite you to join the <Link href='https://warpcast.com/~/channel/lux'>Lux Channel</Link> on <Link href='https://warpcast.com/~/invite-page/227706?id=fbc9ca91'>Warpcast</Link>.
  </p>
)

const HEADING = 'Once your payment has been confirmed we will send additional information to your email.'

const ThankYou: React.FC = () =>  (
  <ScreenfulBlockComponent 
    block={{blockType: 'screenful',
      contentColumns: [[
        {blockType: 'enh-heading',
        preheading: { text: 'Thank you for your order!', level: 3, mb: 10 },
        heading: { text: HEADING, level: 6, mb: 10 },
      } as EnhHeadingBlock,
      {blockType: 'element',
        element: WHILE_YOU_WAIT
      } as ElementBlock
      ]]
    } as ScreenfulBlock}
  />
)

export default ThankYou
