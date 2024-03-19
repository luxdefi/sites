'use client'

import React, { useEffect, useState } from 'react'

import { CTABlockComponent, type CTABlock, ImageBlockComponent, type ImageBlock } from '@hanzo/ui/blocks'
import { BuyItemButton } from '@hanzo/commerce'

import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@hanzo/ui/primitives'
import { cn } from '@hanzo/ui/util'
import type { ImageDef, LinkDef } from '@hanzo/ui/types'

type Card = {
  title: string
  byline: string
  skuPath: string
  label?: string
  img: ImageDef
}

const CardComponent: React.FC<{
  card: Card
  current: number
  index: number
}> = ({
  card,
  current,
  index
}) => {
  const {title, byline, skuPath, label, img} = card

  return (
    <div className='flex flex-col gap-5 items-center'>
      <ImageBlockComponent
        block={{blockType: 'image',
          props: {
            style: {
              width: '100%',
              height: 'auto'
            }
          },
          ...img
        } as ImageBlock}
        className={cn('mx-auto', current !== index ? 'cursor-pointer' : '')}
      />
      <div className='flex flex-col items-center'>
        <div className='font-heading text-center text-xs sm:text-lg md:text-sm xl:text-base'>{title}</div>
        <p className='text-sm'>{byline}</p>
      </div>
      <BuyItemButton 
        skuPath={skuPath} 
        popupClx='w-[300px]' 
        size='default'
        className='lg:min-w-[180px] sm:min-w-[180px]'
      >
        {label ? label : 'Buy'}
      </BuyItemButton>

    </div>
)
}

const CardsCarousel: React.FC<{
  cards: Card[]
}> = ({
  cards
}) => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  const selectCard = (index: number) => {
    if (api) {
      api.scrollTo(index)
    }
  }

  return (
    <div className='w-full flex flex-col gap-10 items-center overflow-hidden'>
      <Carousel
        setApi={setApi} 
        options={{ align: 'center', loop: true }}
        className='w-full'
      >
        <CarouselContent>
          {cards.map((card: Card, index) => (
            <CarouselItem key={index} className='basis-3/4 md:basis-pr-35 xl:basis-1/4 px-4' onClick={() => selectCard(index)}>
              <CardComponent card={card} current={current} index={index}/>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}

export default CardsCarousel