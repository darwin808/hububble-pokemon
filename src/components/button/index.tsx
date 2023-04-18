/* eslint-disable react/display-name */
import React from "react"

type Iprops = {
  children: React.ReactNode
  onClick: (e: any) => void
  type?: any
  width?: string
  bg?: string
}
export const Button = React.memo(
  ({ children, onClick, type = "button", width = "w-full", bg = "bg-purple-300" }: Iprops) => {
    return (
      <button
        type={type}
        onClick={onClick}
        className={`px-4  py-2  rounded-lg   focus:ring-2 ring-0   ring-pink-300 focus:border-none  border border-gray-400 ${width}  text-white ${bg}`}
      >
        {children}
      </button>
    )
  }
)
