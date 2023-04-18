import { AppContext } from "@/context"
import Link from "next/link"
import React, { useContext } from "react"

export const Navbar = () => {
  const context = useContext(AppContext)
  const playerName = context.playerName
  const starterPokemons = context.starterPokemons
  const showProfile = playerName && starterPokemons.length === 6 ? true : false

  return (
    <div className="px-96 py-4 text-2xl bg-white shadow-lg   w-full h-20  flex justify-between  mb-2 ">
      <div className="">
        <Link href={"/"}>Home</Link>
      </div>
      <div className="">
        <Link href={"/profile"} className={`${showProfile ? "block" : "hidden"}`}>
          Profile
        </Link>
      </div>
    </div>
  )
}
