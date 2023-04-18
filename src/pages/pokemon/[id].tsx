import { Button } from "@/components"
import { AppContext } from "@/context"
import { getPokemons } from "@/services"
import { bgChanger } from "@/utils"
import React, { useContext } from "react"

export default function PokemonPage(props: any) {
  const context = useContext(AppContext)
  const starterPokemons = context.starterPokemons
  const setstarterPokemons = context.setstarterPokemons
  const pokemonList = context.pokemonList
  const pokemon = props.data
  const { name, types, sprites } = pokemon || {}
  const type = types && types[0]?.type?.name
  const isExistInStarter = starterPokemons.find((q: any) => q.name === pokemon.name) ? true : false

  const bg = `${bgChanger(
    type
  )} box-border bg- border-4 ring-1 ring-gray-200 rounded-md p-20 drop-shadow-sm hover:drop-shadow-xl cursor-pointer h-full`

  const data = pokemonList?.results?.find((e: any) => e.name === pokemon.name)
  const handleAdd = () => {
    handleCardClick(data)
  }
  const handleRemove = () => {
    handleCardClick(data)
  }

  const handleCardClick = (e: any) => {
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
  return (
    <div className="p-10">
      <div className={bg}>
        <div className="flex justify-center content-center   ">
          <img src={sprites?.front_default} alt="" width={200} height={200} />
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
    </div>
  )
}
export async function getServerSideProps(context: any) {
  const pokemonId = context.params.id
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`
  const res = await getPokemons({ callback: () => {}, url, loading: false, setloading: () => {} })
  return {
    props: { data: res }
  }
}
