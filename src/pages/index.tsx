import { Card, Modal } from "@/components"
import { AppContext } from "@/context"
import { getPokemons } from "@/services"
import { IPokemonList } from "@/types"
import React, { useContext, useEffect, useState } from "react"

export default function Home() {
  const context = useContext(AppContext)
  const [modal, setmodal] = useState(false)
  const [pokemonList, setpokemonList] = useState<any>([])

  const starterPokemons = context.starterPokemons
  const setstarterPokemons = context.setstarterPokemons
  const playerName = context.playerName
  const setplayerName = context.setplayerName

  console.log(context, 444)
  const [currentPage, setcurrentPage] = useState<number>(1)
  const postperPage = 20

  const handleSubmit = (e: any) => {
    e.preventDefault()
    setmodal(false)
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
  const indexoflast = currentPage * postperPage
  const indexoffirst = indexoflast - postperPage
  const pageNum = []

  const pokemons = pokemonList?.results?.slice(indexoffirst, indexoflast)
  for (let i = 1; i <= Math.ceil(pokemonList?.results?.length / postperPage); i++) {
    pageNum.push(i)
  }

  useEffect(() => {
    setmodal(true)
  }, [])

  useEffect(() => {
    console.log(pokemons)
  }, [pokemonList])

  useEffect(() => {
    getPokemons({ callback: setpokemonList })
  }, [])

  return (
    <main className="bg-red-400 h-screen ">
      {modal && (
        <Modal>
          <form action="submit" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="input your name"
              value={playerName}
              onChange={(e) => setplayerName(e.currentTarget.value)}
            />
            <button type="submit">ok</button>
          </form>
        </Modal>
      )}
      {/* POKEMONS */}
      <div className="grid-cols-5 grid gap-4">
        {pokemons?.map((e: IPokemonList) => {
          return <Card data={e} key={e.name} onClick={handleCardClick}></Card>
        })}
      </div>
      {/* PAGINATION */}
      <div className="bg-green-400 flex gap-2 p-2">
        {pageNum?.map((e) => (
          <div
            className=" bg-yellow-400 p-2  cursor-pointer"
            onClick={() => {
              setcurrentPage(e)
            }}
            key={e}
          >
            {e}
          </div>
        ))}
      </div>
    </main>
  )
}
