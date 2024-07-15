import React from 'react'

export const ChevronLeft = () => {
  return (
    <div>
         <svg
        xmlns='http://www.w3.org/2000/svg'
        className='w-[54px] h-[54px] md:w-[84px] md:h-[84px]'
        viewBox='0 0 24 24'
        strokeWidth='2.5'
        stroke='white'
        fill='none'
      >
        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
        <polyline points='15 6 11 12 15 18' />
      </svg>
    </div>
  )
}
