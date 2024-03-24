'use client'
import React, { useState, type ReactNode, useEffect  } from 'react'
import { useRouter } from 'next/navigation'

import {
  ScrollArea,
} from '@hanzo/ui/primitives'

import { CartPanel, useCommerce } from '@hanzo/commerce'

import type { LinkDef } from '@hanzo/ui/types'
import { cn } from '@hanzo/ui/util'
import { AuthWidget, LoginComponent } from '@hanzo/auth/components'

import sendGAEvent from '../../next/analytics/google-analytics'

import { Logo } from '..'

import MenuToggleButton from './mobile-menu-toggle-button'
import BagButton from './bag-button'
import MobileBagDrawer from './mobile-bag-drawer'
import BagIcon from './bag-icon'

import NavMenu from './mobile-nav-menu'

const MobileHeader: React.FC<{
  currentAs: string | undefined
  links: LinkDef[]
  className?: string
}> = ({
  currentAs,
  links,
  className = ''
}) => {

  const cmmc = useCommerce()
  const [menuOpen, _setMenuOpen] = useState<boolean>(false)
  const [menuPanel, setMenuPanel] = useState<'none' | 'login' | 'bag'>('none')
  const router = useRouter()

  useEffect(() => {
    if (menuPanel === 'bag') {
      sendGAEvent('view_cart', {
        items: cmmc.cartItems.map((item) => ({
          item_id: item.sku,
          item_name: item.title,
          item_category: item.categoryId,
          price: item.price,
          quantity: item.quantity
        })),
        value: cmmc.cartTotal,
        currency: 'USD',
      })
    }
  }, [menuPanel])

  const onLoginChanged = (loggedIn: boolean) => {
    if (loggedIn) {
      setMenuPanel('none')
    }
  }

  const setMenuOpen = (open: boolean) => {
    if (!open) {
      setMenuPanel('none')
    }
    _setMenuOpen(open)
  }

  const toCheckout = () => {
    setMenuOpen(false)
    router.push('/checkout')
  }

  return (<>
    <header className={cn('bg-background sticky z-50 top-0 left-0 w-full', className)} >
      {/* smaller than md: mobile style drawer menu; h-11 is 44px, the standard mobile header height */}
      <div className="flex h-11 items-center justify-between pl-6 pr-4">
        <div className='relative h-full w-200 flex flex-row'>
          <Logo href='/' size='sm' className={'top-[3px] h-full'}/>
          {/* Not that key to the cross-fade effect 
              is that this is **on top of** the logo. */}
          {menuOpen && ( 
            <div className={'absolute left-0 top-0 bottom-0 right-0 ' + 
              'flex flex-col justify-center ' +
              'bg-background animate-mobile-menu-open'
            }>
              <AuthWidget className='' handleLogin={() => {setMenuPanel('login')}}/>
            </div>
          )}
        </div>
        <div className='flex gap-0 '>
          { menuOpen ? (
            <BagButton className='text-primary -mr-[3px]' onClick={() => {setMenuPanel('bag')}}/>
          ) : (
            <MobileBagDrawer trigger={<BagButton className='text-primary -mr-[3px]' />} />
          ) }
          <MenuToggleButton 
            className='text-foreground' 
            open={menuOpen} 
            setOpen={setMenuOpen}
          />
        </div>
      </div>
    </header>
    {menuOpen && (
      <div className={  
        'fixed top-0 left-0 w-full h-full ' + 
        'flex flex-column p-6 pt-15 bg-background z-40 animate-mobile-menu-open' 
      }>
      {menuPanel === 'login' ? (
        <LoginComponent noHeading onLoginChanged={onLoginChanged} className='sm:animate-in sm:zoom-in-90' />
      ) : ( 
        menuPanel === 'bag' ? (
          <ScrollArea className='w-full sm:animate-in sm:zoom-in-90'>
            <CartPanel
              className={
                'mt-4 mb-8 border-none py-0 px-4 w-full ' +
                'sm:min-w-[350px] sm:max-w-[500px] sm:mx-auto min-h-[60vh] max-h-[70vh]'
              }
              handleCheckout={toCheckout}
            >
              <div className='flex items-center justify-center'>
                <BagIcon width={32} height={32} className='fill-foreground mr-2 relative -top-1'/>
                <p className='font-nav text-default'>Your Bag</p>
              </div>
              <div className='h-[1px] w-full mb-4 mt-3 bg-muted-3'/>
            </CartPanel>
          </ScrollArea>
        ) : (
          <NavMenu 
            currentAs={currentAs}
            links={links}
            className='sm:animate-in sm:zoom-in-90' 
            commonItemClx='px-0 text-xl h-16 justify-start ' 
          />
        )
      )} 
      </div>
    ) /* menuOpen */}
  </>)
}

export default MobileHeader
