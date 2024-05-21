'use client'
import { useEffect, useState } from 'react'

import { ApplyTypography } from '@hanzo/ui/primitives'
import { cn } from '@hanzo/ui/util'

import type { CardWithSelectedMaterial } from '@/types'

import RowHeading from './row-heading'
import rowsContent from './rows-content'
import CompareHeader from './compare-header'
import SelectCardRow from './select-card-row'
import PseudoMain from '../../../components/pseudo-main'

import cards from '@/content/cards'

const CompareCards: React.FC<{
  predefinedCards?: string
}> = ({
  predefinedCards
}) => {
  const [selectedCards, setSelectedCards] = useState<CardWithSelectedMaterial[]>([])

  useEffect(() => {
    const cardSKUs = predefinedCards?.split(',')
    if (cardSKUs) {
      const predefinedCards = cardSKUs.map(sku => {
        const card = cards.find(card => !!card.materials.find(material => material.sku === sku))
        const material = card?.materials.find(material => material.sku === sku)

        return {...card, selectedMaterial: material} as CardWithSelectedMaterial
      })
      setSelectedCards(predefinedCards)
    }
  }, [])

  return (
    <>
      <CompareHeader selectedCards={selectedCards} setSelectedCards={setSelectedCards}/>
      <div className='flex flex-col mt-4'>
        <SelectCardRow selectedCards={selectedCards} setSelectedCards={setSelectedCards}/>
        {selectedCards.length > 0 && (
          <>
            <PseudoMain id='benefits'>
              <ApplyTypography className='flex justify-center w-full col-span-2 lg:col-span-11 mt-12 sm:mb-6 text-center'>
                <h3>Exclusive Lux Card Benefits</h3>
              </ApplyTypography>
            </PseudoMain>
            {rowsContent(selectedCards).map(({title, description, content}, i) => (
              <div key={i} className={cn('py-4', i % 2 === 1 ? 'bg-muted-4' : '')}>
                <PseudoMain className='grid grid-cols-2 lg:grid-cols-11 gap-8 sm:gap-10 lg:gap-20'>
                  <RowHeading title={title} description={description}/>
                  {content}
                </PseudoMain>
              </div>
            ))}
          </>
        )}
      </div>
    </>
  )
}

export {
  CompareCards as default,
  type CardWithSelectedMaterial
}