import React  from 'react'
import { notFound } from 'next/navigation'

import { Footer, Header } from '@hanzo/ui/common'
import { Main, TailwindIndicator } from '@hanzo/ui/primitives'
import CardDetailComponent from '@/blocks/components/card-detail'

import { products } from '@/content'
import type { CardCategory, CardType } from '@/types'
import siteDef from '@/siteDef'

type Props = {
  params: { slug: CardType }
  searchParams?: { [key: string]: string | string[] | undefined }
}

export async function generateStaticParams() {

  const prods = Object.keys(products)
 
  return prods.map((p) => ({
    slug: p,
  }))
}

export async function generateMetadata({ params}: Props) {
  return { title: params.slug }
}

const ProductPage = ({ params, searchParams }: Props) => {

  const card = products[params.slug] as CardCategory
  
  if (!card) {
    notFound()
  }

  // see src/middleware.ts
  const agent = searchParams?.agent as string

  return (<>
    <Header siteDef={siteDef} />
    <Main className='max-w-screen-xl w-full pt-16 sm:pt-4 portrait:pt-4 lx:mx-auto'>
      <CardDetailComponent block={{blockType: 'card-detail', ...card}} agent={agent} />
    </Main>
    <div className='border-t'></div>
    <Footer siteDef={siteDef} className='max-w-screen-2xl w-full pt-16 lg:mx-auto ' />
    <TailwindIndicator />
  </>)
}

export default ProductPage
