import React, { type PropsWithChildren } from 'react'

import { AuthServiceProvider } from '@hanzo/auth/service'
import { getUserServerSide } from '@hanzo/auth/server'
import type { AuthServiceConf } from '@hanzo/auth/types'

import { CommerceServiceProvider, initSelectionUI } from '@hanzo/commerce'

import { 
  RootLayout as RootLayoutCommon, 
  rootLayoutViewport,
  ChatWidget
} from '@luxdefi/common'

import { selectionUISpecifiers } from '@luxdefi/common/conf'
import '@luxdefi/common/style/lux-global.css'

import siteDef from '../site-def'
import _metadata from '../metadata'

export const metadata = { ..._metadata }
export const viewport = { ...rootLayoutViewport}

initSelectionUI(selectionUISpecifiers)

const RootLayout: React.FC<PropsWithChildren> = async ({
  children
}) =>  {
  const currentUser = await getUserServerSide()

  return (
    <AuthServiceProvider user={currentUser} conf={{} as AuthServiceConf}>
      <CommerceServiceProvider 
        rootNode={siteDef.ext.commerce.rootNode} 
        productsByFamily={siteDef.ext.commerce.productsByFamily}
        options={siteDef.ext.commerce.options}
      >
        <RootLayoutCommon siteDef={siteDef} header={false}>
          {children}
          <ChatWidget
            title='LUX'
            subtitle='AI'
            chatbotUrl='https://lux.chat/iframe'
          />
        </RootLayoutCommon>
      </CommerceServiceProvider>
    </AuthServiceProvider>
  )
}

export default RootLayout
