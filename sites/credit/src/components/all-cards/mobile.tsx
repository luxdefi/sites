import { Fragment } from 'react'
import Link from 'next/link'

import { cn } from '@hanzo/ui/util'
import { ApplyTypography, Main, Separator } from '@hanzo/ui/primitives'

import cards from '@/content/cards'
import sovereign from '@/content/cards/sovereign'
import CardPreview from './mobile-card-preview'
import SplinePlayer from '../spline-player'

const DesktopAllCards: React.FC<{
  clx: string
}> = ({
  clx,
}) => {
  return (
    <div className={cn('flex flex-col gap-4 pt-11', clx)}>
      <Main className='flex flex-col gap-2'>
        <SplinePlayer src={sovereign.materials[0].animation ?? ''} className='!aspect-[12/10]'/>
        <ApplyTypography className='flex flex-col gap-2'>
          <h4>Earn up to 11% of your balance annually with Lux Credit.</h4>
          <p className='text-sm'>Learn more about how you can earn rewards infinitely by using your Lux Card without ever impacting your credit score.</p>
          <Link href=''>What are Karma Rewards?</Link>
        </ApplyTypography>
      </Main>
      <ApplyTypography className='flex bg-muted-4'>
        <Main className='flex flex-row justify-between items-center w-full'>
          <div className='text-muted-2'>All Cards</div>
          <Link href='/compare'>Compare Cards</Link>
        </Main>
      </ApplyTypography>
      <div className='flex flex-col'>
        {cards.map((card, index) => (
          <Fragment key={index}>
            <CardPreview card={card} />
            {index < cards.length - 1 && <Separator className='bg-muted-4'/>}
          </Fragment>
        ))}
      </div>
    </div>
  )
}

export {
  DesktopAllCards as default
}