import React  from 'react'

import { ScreenfulBlockComponent as Screenful } from '@hanzo/ui/blocks'
import { Footer, Header } from '@luxdefi/common'

import tiles from '@/content'
import siteDef from '@/conf/site-def'

type Props = {
  searchParams?: { [key: string]: string | string[] | undefined }
}

  // Scroll Snap using this is the approach: 
  // https://stackoverflow.com/a/76066443/11645689
  // see also styles on 'html' in @hanzo/ui/style/global.css
const Page = ({ searchParams }: Props ) => {
  
    // see src/middleware.ts
  const agent = searchParams?.agent as string

  return (<>
    <Header siteDef={siteDef} />
    {tiles.map((banner, index) => (
      <Screenful 
        block={banner} 
        initialInView={index === 0} 
        agent={agent}
        key={`section-${index}`} 
      />
    ))}
    <Footer siteDef={siteDef} className='max-w-screen-2xl w-full pt-16 lg:mx-auto ' />
  </>)
}

export default Page
