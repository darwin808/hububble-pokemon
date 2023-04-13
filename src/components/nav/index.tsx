import Link from "next/link"
import React from "react"

export const Navbar = () => {
  return (
    <div className="w-full h-40 bg-pink-50 flex justify-between">
      <div className="">
        <Link href={"/"}>Home</Link>
      </div>
      <div className="">
        <Link href={"/profile"}>Profile</Link>
      </div>
    </div>
  )
}
