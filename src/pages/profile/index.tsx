import { Button, Card, Modal } from "@/components"
import { AppContext } from "@/context"
import { useRouter } from "next/router"
import React, { useContext, useEffect, useState } from "react"

const ProfilePage = () => {
  const router = useRouter()
  const context = useContext(AppContext)
  const starterPokemons = context.starterPokemons
  const playerName = context.playerName
  const [profileModal, setprofileModal] = useState(false)
  const handlePokemonIncomplete = (e: any) => {
    e.preventDefault()
    router.push("/")
  }
  useEffect(() => {
    if (starterPokemons.length < 6) {
      setprofileModal(true)
    } else {
      setprofileModal(false)
    }
  }, [starterPokemons])

  return (
    <div className="w-full h-screen bg-white">
      {profileModal && (
        <Modal width="w-2/6">
          <form
            action="submit"
            onSubmit={handlePokemonIncomplete}
            className="p-2 flex-col gap-2 flex text-center"
          >
            <h1 className="text-2xl">Starter Pokemons not complete</h1>
            <h1 className="text-xl">Please add more pokemons</h1>
            <div className=" w-full flex gap-2 align-center justify-center">
              <Button type="submit" onClick={handlePokemonIncomplete}>
                Ok
              </Button>
            </div>
          </form>
        </Modal>
      )}
      <div className="text-center w-full py-10">
        <h2 className="text-4xl capitalize">Player Name :{playerName}</h2>
      </div>
      <div className="grid grid-cols-3 p-4 gap-4">
        {starterPokemons.map((e: any) => {
          return <Card data={e} key={e.name} />
        })}
      </div>
    </div>
  )
}

export default ProfilePage
