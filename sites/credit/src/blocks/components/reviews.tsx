'use client'

import React, { useState } from 'react'

import { ImageBlockComponent, type BlockComponentProps, type ImageBlock } from '@hanzo/ui/blocks'
import type ReviewBlock from '../def/reviews'
import { cn } from '@hanzo/ui/util'

const Review: React.FC<{
  image: ImageBlock,
  title: string,
  text: string,
  author: string
}> = ({image, title, text, author}) => {
  return (
    <div className='flex gap-4 sm:gap-8 mx-auto'>
      <ImageBlockComponent block={image} className='w-20 h-20 rounded-full'/>
      <div className='flex flex-col gap-2'>
        <div className='flex gap-2 sm:gap-6'>
          <svg viewBox="0 0 155 132" className='h-6 sm:h-9'>
            <path d="M154.141 0.349609V34.2852C141.283 34.2852 132.412 37.0521 127.529 42.5859C122.809 47.957 120.449 55.1185 120.449 64.0703H154.141V131.453H86.5137V64.0703C86.5137 47.1432 89.7689 34.1224 96.2793 25.0078C102.952 15.7305 111.416 9.30143 121.67 5.7207C131.924 2.13997 142.747 0.349609 154.141 0.349609ZM67.959 0.349609V34.2852C55.2637 34.2852 46.4746 37.0521 41.5918 42.5859C36.709 47.957 34.2676 55.1185 34.2676 64.0703H67.959V131.453H0.576172V64.0703C0.576172 47.1432 3.83138 34.1224 10.3418 25.0078C16.8522 15.7305 25.2344 9.30143 35.4883 5.7207C45.9049 2.13997 56.7285 0.349609 67.959 0.349609Z" fill="currentColor"/>
          </svg>
          <h5>{title}</h5>
        </div>
        <p className='hidden sm:flex'>{text}</p>
        <p>-{author}</p>
      </div>
    </div>
  )
}

const ReviewsBlockComponent: React.FC<BlockComponentProps> = ({
  block,
  className=''
}) => {
  
  if (block.blockType !== 'review') {
    return <>review block required</>
  }

  const b = block as ReviewBlock

  const [slide, setSlide] = useState(0)

  return (
    <div className='w-full flex flex-col gap-10 items-center'>
      {b.reviews.map(({image, title, text, author}, index) => (
        <div
          key={index}
          className={cn('flex duration-700 ease-in-out transition-all transform max-w-[50rem]', slide === index ? '' : 'absolute opacity-0')}
        >
          <Review image={image} title={title} text={text} author={author}/>
        </div>
      ))}

      <div className='flex gap-2 justify-center'>
        {b.reviews.map((_, index) => (
          <div
            key={index}
            className={cn('w-3 h-3 rounded-full border border-foreground cursor-pointer', slide === index ? 'bg-foreground' : '')}
            onClick={() => setSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default ReviewsBlockComponent