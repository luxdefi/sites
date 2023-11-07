import Button from '@/primitives/button'

import media from './video'
import modal from './waitlist-modal'

export default {
  blockType: 'banner',
  title: 'LUX VALIDATOR',
  byline: 'Run the chain.',
  media,
  cta: {
    blockType: 'cta',
    elements: [
      {
        title: "Learn More",
        href: "/validator",
        variant: 'outline'
      },
      {
        text: 'Waitlist',
        props: {
          variant: 'primary',
          size: 'default', 
          className: 'w-1/2'  
        },
        action: {
          type: 'modal',
          def: modal
        }
      },
    ]
  }
}
