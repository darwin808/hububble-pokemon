import { AppContext } from "@/context"
import { getPokemons } from "@/services"
import { IPokemonList } from "@/types"
import React, { useContext, useEffect, useState } from "react"

type IProps = {
  data: any
}
export const Card = ({ data }: IProps) => {
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

  useEffect(() => {
    console.log(types)
    getPokemons({ callback: setpokemon, url })
  }, [])

  useEffect(() => {
    console.log(pokemon)
  }, [pokemon])

  const type = types && types[0]?.type?.name
  const bgChanger = () => {
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
  return (
    <div
      className={`${bgChanger()}  bg- border-4 ring-1 ring-gray-200 rounded-md p-4 drop-shadow-sm hover:drop-shadow-xl cursor-pointer`}
    >
      <img src={sprites?.front_default} alt="" width={100} />
      <h6>{name}</h6>
      <h5>{type}</h5>
      {!isExistInStarter ? (
        <button
          onClick={handleAdd}
          className="px-4 py-2 text-white  border-r-2 bg-purple-600 rounded-md"
        >
          Add
        </button>
      ) : (
        <button
          onClick={handleRemove}
          className="px-4 py-2 text-white  border-r-2 bg-red-600 rounded-md"
        >
          remove
        </button>
      )}
    </div>
  )
}
