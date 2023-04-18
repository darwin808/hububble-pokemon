import { AppContext } from "@/context"
import { getPokemons } from "@/services"
import { IPokemonList } from "@/types"
import React, { useContext, useEffect, useState } from "react"
import { Loader } from "../loader"
import { Button } from "../button"
import { useRouter } from "next/router"

type IProps = {
  data: any
}

export const Card = ({ data }: IProps) => {
  const router = useRouter()
  const [loading, setloading] = useState(false)
  const context = useContext(AppContext)
  const starterPokemons = context.starterPokemons
  const setstarterPokemons = context.setstarterPokemons
  const isExistInStarter = starterPokemons.find((q: any) => q.name === data.name) ? true : false
  const { url } = data
  const [pokemon, setpokemon] = useState<any>({})

  const { name, types, sprites } = pokemon || {}
  const handleAdd = () => {
    handleCardClick(data)
  }
  const handleRemove = () => {
    handleCardClick(data)
  }

  const handleCardClick = (e: IPokemonList) => {
    const isExistInStarter = starterPokemons.find((q: any) => q.name === e.name) ? true : false
    if (starterPokemons.length < 6 && !isExistInStarter) {
      setstarterPokemons([...starterPokemons, e])
    } else if (isExistInStarter) {
      const res = starterPokemons.filter((w: any) => w.name !== e.name)
      setstarterPokemons(res)
    } else {
      return null
    }
  }

  const type = types && types[0]?.type?.name
  const bgChanger = (type?: any) => {
    switch (type) {
      case "grass":
        return "bg-green-200"
      case "bug":
        return "bg-green-200"
      case "poison":
        return "bg-green-500"
      case "fire":
        return "bg-orange-400"
      case "water":
        return "bg-blue-200"
      case "normal":
        return "bg-beige"
      case "ground":
        return "bg-beige"
      case "fighting":
        return "bg-beige"
      case "flying":
        return "bg-beige"
      case "rock":
        return "bg-beige"
      case "psychic":
        return "bg-yellow-300"
      case "steel":
        return "bg-gray-200"
      case "dark":
        return "bg-violet-400"
      case "ice":
        return "bg-sky-500/75 "
      case "dragon":
        return "bg-orange-500/75 "
      case "ghost":
        return "bg-purple-500/75 "
      case "electric":
        return "bg-orange-400"
      case "fairy":
        return "bg-pink-100"

      default:
        return "bg-white"
    }
  }

  const bgMain = bgChanger(type)

  useEffect(() => {
    getPokemons({ callback: setpokemon, url, loading, setloading })
  }, [])

  if (loading) {
    return (
      <div
        className={`${bgMain} box-border bg- border-4 ring-1 ring-gray-200 rounded-md p-4 drop-shadow-sm hover:drop-shadow-xl cursor-pointer h-64`}
      >
        <div className="flex justify-center content-center   ">
          <Loader />
        </div>
      </div>
    )
  }
  return (
    <div
      className={`${bgMain} box-border bg- border-4 ring-1 ring-gray-200 rounded-md p-4 drop-shadow-sm hover:drop-shadow-xl cursor-pointer h-64`}
    >
      <div
        className="flex justify-center content-center   "
        onClick={() => {
          router.push(`/pokemon/${pokemon.id}`)
        }}
      >
        {Object?.keys(sprites || {}).length !== 0 && !loading ? (
          <img src={sprites?.front_default} alt="" width={100} height={100} />
        ) : (
          <Loader />
        )}
      </div>
      <div className="block h-20 ">
        <h6 className="text-xl capitalize">Name: {name}</h6>
        <h5 className="text-sm ">Type: {type}</h5>
      </div>
      <div className="h-10 w-full  flex justify-end    flex-col">
        <div className="block">
          {!isExistInStarter ? (
            <Button onClick={handleAdd}>Add</Button>
          ) : (
            <Button onClick={handleRemove} bg="bg-red-700">
              remove
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
