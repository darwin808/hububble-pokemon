import React from "react"

type Props = {
  children: React.ReactNode
}

export const Modal = ({ children }: Props) => {
  return (
    <div
      className=" z-50 fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center"
      id="my-modal"
    >
      <div className="bg-white h-1/6 w-1/6 rounded-lg p-4">{children}</div>
    </div>
  )
}
