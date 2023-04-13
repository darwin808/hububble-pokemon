import { AppContext } from "@/context"
import React, { useContext } from "react"

const ProfilePage = () => {
  const context = useContext(AppContext)
  const starterPokemons = context.starterPokemons
  const playerName = context.playerName
  return (
    <div className="w-full h-screen bg-blue-400">
      <div className="">
        <h2>{playerName}</h2>
      </div>
      <div className="grid-cols-5">{JSON.stringify(starterPokemons)}</div>
    </div>
  )
}

export default ProfilePage