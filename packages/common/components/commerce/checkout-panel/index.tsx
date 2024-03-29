'use client'
import React, { useEffect, useRef, useState }  from 'react'

import { capitalize, cn } from '@hanzo/ui/util'

import { useCommerce, ShippingStepForm, PaymentStepForm } from '@hanzo/commerce'
import type { CheckoutStep } from '@hanzo/commerce/types'

import ThankYou from './thank-you'

const STEPS = [
  {
    name: 'payment',
    Comp: PaymentStepForm
  }, 
  {
    name: 'delivery',
    Comp: ShippingStepForm
  }, 
  {
    name: 'done',
    label: 'Done!',
    Comp: ThankYou
  }
] satisfies CheckoutStep[]

const STEP_NAMES = STEPS.map((s) => (s.label ? s.label : capitalize(s.name)))

import DesktopCP from './dt-checkout-panel'
import MobileCP from './mb-checkout-panel'

const CheckoutPanel: React.FC<{
  close: () => void
  className?: string
}> = ({
  close,
  className=''
}) => {

  const cmmc = useCommerce()
    
    // For sites that don't initialize cmmc
  if (!cmmc) {
    return <></>
  }
  const [stepIndex, setStepIndex] = useState<number>(0)
  const [orderId, setOrderId] = useState<string | undefined>(undefined)

    // Step.name or 'first' or 'next' or 'last' 
  const setStep = (name: string): void => {

    if (name === 'first') {
      setStepIndex(0)
    }
    else if (name === 'last') {
      setStepIndex(STEPS.length - 1)
    } 
    else if (name === 'next') {
      if (stepIndex <= STEPS.length - 2) {
        setStepIndex(stepIndex + 1)
      }
      else {
        throw new Error('CheckoutPanel.setStep(): Attempting to advance past last step!')
      }
    } 
    else {
      const indexFound = STEPS.findIndex((el) => (el.name === name))
      if (indexFound !== -1) {
        setStepIndex(indexFound)
      }
      else {
        throw new Error('CheckoutPanel.setStep(): Step named ' + name + ' not found!')
      }
    }
  } 

  const _close = () => {
    setStep('first')
    close()
  }

  // Determine if mobile or desktop based on visibility of e
  const desktopEl = useRef<HTMLDivElement>(null)
  const [agent, setAgent] = useState<'mobile' | 'desktop' | undefined>()
  useEffect(() => {
    const checkAgent = () => {
      setAgent(!!desktopEl.current?.offsetParent ? 'desktop' : 'mobile')
    }

    // initial agent check
    checkAgent()
    
    window.addEventListener('resize', checkAgent)
    return () => {
      window.removeEventListener('resize', checkAgent)
    }
  }, [])

  const StepToRender = STEPS[stepIndex].Comp

  return (<>
    <DesktopCP 
      className={cn('h-full', className, 'hidden md:flex')} 
      close={_close}
      index={stepIndex}
      stepNames={STEP_NAMES}
    >
      {/* Element required to determine if DesktopCP is visible */}
      <div ref={desktopEl}/>
      {agent === 'desktop' && <StepToRender onDone={() => {setStep('next')}} orderId={orderId} setOrderId={setOrderId}/>}
    </DesktopCP>
    <MobileCP 
      className={cn('h-full overflow-y-auto', className, 'md:hidden' )} 
      close={_close}
      index={stepIndex}
      stepNames={STEP_NAMES}
    >
      {agent === 'mobile' && <StepToRender onDone={() => {setStep('next')}} orderId={orderId} setOrderId={setOrderId}/>}
    </MobileCP>
  </>)
}

export default CheckoutPanel
