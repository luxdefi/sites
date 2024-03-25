import React  from 'react'
import { Footer } from '@luxdefi/common'
import { ApplyTypography, Main } from '@hanzo/ui/primitives'

import SheetTest from '@/components/sheet-test'

/* for example, as slug
type Props = {
  params: { slug: string }
  searchParams?: { [key: string]: string | string[] | undefined }
}
*/ 
import siteDef from '../site-def'

const UniversalPage = (/* { params, searchParams }: Props */) => (<>
  <Main className='md:flex-row md:gap-4 '>
    <SheetTest />
  </Main>
  <Footer siteDef={siteDef} className='max-w-screen-2xl w-full pt-16 lg:mx-auto ' />
</>)

export default UniversalPage
