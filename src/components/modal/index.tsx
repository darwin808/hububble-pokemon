import React from "react"

type Props = {
  children: React.ReactNode
  width?: string
  height?: string
}

export const Modal = ({ children, width = "w-1/6", height = "h-1/6" }: Props) => {
  return (
    <div
      className=" z-50 fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center"
      id="my-modal"
    >
      <div className={`bg-white rounded-lg p-4 ${width} ${height}`}>{children}</div>
    </div>
  )
}
