import React, { type PropsWithChildren } from 'react'

import { default as RootLayoutCommon, viewport as _viewport } from '@hanzo/ui/next/root-layout'
import '@hanzo/ui/style/globals.css'

import { Toaster } from '@hanzo/ui/primitives'
import { ChatWidget } from '@hanzo/ui/common'

import { AuthServiceProvider } from '@hanzo/auth/service'
import { getUserServerSide } from '@hanzo/auth/server'
import type { AuthServiceConf } from '@hanzo/auth/types'

import { CommerceServiceProvider } from '@hanzo/commerce'


import siteDef from '../siteDef'
import _metadata from '../metadata'

export const metadata = {
  ..._metadata
}

export const viewport = {
  ..._viewport
}

const RootLayout: React.FC<PropsWithChildren> = async ({
  children
}) =>  {
  const currentUser = await getUserServerSide()

  return (
    <AuthServiceProvider user={currentUser} conf={{} as AuthServiceConf}>
      <CommerceServiceProvider 
        facets={siteDef.ext.commerce.facets} 
        productsByCategory={siteDef.ext.commerce.productsByCategory}
        options={siteDef.ext.commerce.options}
      >
        <RootLayoutCommon siteDef={siteDef} header={false} >
          {children}
          <ChatWidget
            title='LUX'
            subtitle='AI'
            chatbotUrl='https://lux.chat/iframe'
          />
          <Toaster />
        </RootLayoutCommon>
      </CommerceServiceProvider>
    </AuthServiceProvider>
  )
}

export default RootLayout