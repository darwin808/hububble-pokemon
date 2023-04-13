import React from "react"

type Iprops = {
  children: React.ReactNode
  onClick: (e: any) => void
}
export const Button = ({ children, onClick }: Iprops) => {
  return (
    <button
      onClick={onClick}
      className="px-4  py-2 text-gray-400 rounded-lg  bg-white focus:ring-2 ring-0 focus:text-black  ring-pink-300 focus:border-none  border border-gray-400 "
    >
      {children}
    </button>
  )
}
