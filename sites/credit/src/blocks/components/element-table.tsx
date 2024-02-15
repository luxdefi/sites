//'use client'
import React from 'react'

import type { BlockComponentProps, ElementBlock } from '@hanzo/ui/blocks'
import { cn } from '@hanzo/ui/util'
import type ElementTableBlock from '../def/element-table'

const bgClassFromLocation = (row: number, column: number) => {
  if (row % 2 === 0 && column % 2 === 0) {
    return 'bg-background'
  }
  else if (row % 2 === 1 && column % 2 === 0 || row % 2 === 0 && column % 2 === 1 ) {
    return 'bg-level-1'
  }
  return 'bg-level-2'
}

const ElementTableBlockComponent: React.FC<BlockComponentProps> = ({
  block,
  className=''
}) => {
  
  if (block.blockType !== 'element-table') {
    return <>element table block required</>
  }

  const b = block as ElementTableBlock 

  const HeaderRow: React.FC<{
    columns: ElementBlock[]
    rowIndex: number
  }> = ({
    columns,
    rowIndex,
  }) => (
    <tr className='!border-0 '>
    {columns.map((tdElements, columnIndex) => ( 
      <th key={columnIndex} className={'!py-0 !px-1 relative ' +
        ((columnIndex === 0) ? '' : 'w-1/4 group border-transparent border hover:border-muted-1 active:border-accent ') +
        bgClassFromLocation(rowIndex, columnIndex)} 
      >
        {tdElements.element}
      </th> 
    ))}
    </tr>
  )



  const Row: React.FC<{
    columns: ElementBlock[]
    rowIndex: number
  }> = ({
    columns,
    rowIndex,
  }) => (
    <tr className='!border-0 '>
    {columns.map((tdElements, columnIndex) => ( 
      <td key={columnIndex} className={'!px-3 !py-5 !align-middle !border-0 ' + bgClassFromLocation(rowIndex, columnIndex)} >
        <div className='flex flex-col justify-center items-center text-center font-bold' >
          {tdElements.element}
        </div> 
      </td> 
    ))}
    </tr>
  )

     // must use <thead> and <tbody>
     // https://stackoverflow.com/questions/75654427/expected-server-html-to-contain-a-matching-tr-in-table-hydration-failed-be
  return (
    <table className={cn('border-separate border-spacing-0 !text-xs/4 !md:text-sm/5 border border-level-1 max-h-full', className)} >
      <thead className='!border-0 '>
        <HeaderRow columns={b.elements[0]} rowIndex={0} />
      </thead>
      <tbody>
      {b.elements.map((columns, rowIndex) => (
        (rowIndex === 0) ? null : (
          <Row columns={columns} key={rowIndex} rowIndex={rowIndex}/> 
        )
      ))}
      </tbody>
    </table>
  )
}

export default ElementTableBlockComponent
