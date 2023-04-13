import { AppContext } from "@/context"
import { getPokemons } from "@/services"
import React, { useContext, useEffect, useState } from "react"

type IProps = {
  data: any
  onClick: (e: any) => void
}
export const Card = ({ data, onClick }: IProps) => {
  const context = useContext(AppContext)
  const starterPokemons = context.starterPokemons
  const isExistInStarter = starterPokemons.find((q: any) => q.name === data.name) ? true : false
  const { url } = data
  const [pokemon, setpokemon] = useState<any>({})

  const { name, types, sprites } = pokemon || {}
  const handleAdd = () => {
    onClick(data)
  }
  const handleRemove = () => {
    onClick(data)
  }
  useEffect(() => {
    console.log(types)
    getPokemons({ callback: setpokemon, url })
  }, [])

  useEffect(() => {
    console.log(pokemon)
  }, [pokemon])

  return (
    <div className="bg-white border-t-2 border-blue-900">
      <img src={sprites?.front_default} alt="" />
      <h6>{name}</h6>
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
