import Link from "next/link"
import React from "react"

export const Navbar = () => {
  return (
    <div className="px-96 py-4 text-2xl bg-white shadow-lg   w-full h-20  flex justify-between  mb-2 ">
      <div className="">
        <Link href={"/"}>Home</Link>
      </div>
      <div className="">
        <Link href={"/profile"}>Profile</Link>
      </div>
    </div>
  )
}
