import React from 'react'

export const ChevronDown = () => {
  return (
    <div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          strokeWidth='2.5'
          stroke='#3b82f6'
          fill='none'
          className='center-arrow w-[74px] h-[74px] md:w-[94px] md:h-[94px]'
        >
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <polyline points='6 9 12 13 18 9' />
        </svg>
    </div>
  )
}

