import React from 'react'
import cx from 'classnames';

export const Logo = ({ color }: { color: number}) => {
  return (
    <div className='fixed top-4 left-5  md:left-7'>
    <div
      className={cx(`border-2  border-gray-500 w-[150px] md:w-[200px]`, {
        "border-black": color === 1,
        "border-white": color === 2,
      })}
    >
      <p
        className={cx("text-2xl sm:text-3xl text-center py-1.5", {
          "text-black": color === 1,
          "text-white": color === 2,
        })}
      >
        LOGO
      </p>
    </div>
  </div>
  )
}
