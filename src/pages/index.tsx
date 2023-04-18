import { Button, Card, Modal } from "@/components"
import { AppContext } from "@/context"
import { getPokemons } from "@/services"
import { IPokemonList } from "@/types"
import { useRouter } from "next/router"
import React, { useContext, useEffect, useState } from "react"

export default function Home() {
  const router = useRouter()
  const context = useContext(AppContext)
  const [modal, setmodal] = useState(false)
  const [serch11, setserch11] = useState<string>("")
  const [confirmStarterModal, setconfirmStarterModal] = useState(false)

  const playerName = context.playerName
  const setplayerName = context.setplayerName
  const starterPokemons = context.starterPokemons

  const pokemonList = context.pokemonList
  const setpokemonList = context.setpokemonList

  const [currentPage, setcurrentPage] = useState<number>(1)
  const postperPage = 20

  const handleSubmit = (e: any) => {
    e.preventDefault()
    setmodal(false)
  }

  const handleConfirmStarter = (e: any) => {
    e.preventDefault()
    setconfirmStarterModal(false)
    router.push("/profile")
  }
  const indexoflast = currentPage * postperPage
  const indexoffirst = indexoflast - postperPage
  const pageNum = []

  const newPokemons = pokemonList?.results?.filter((e: any) =>
    e.name.toLowerCase().includes(serch11.toLowerCase())
  )
  const pokemons = newPokemons?.slice(indexoffirst, indexoflast)

  for (let i = 1; i <= Math.ceil(newPokemons?.length / postperPage); i++) {
    pageNum.push(i)
  }

  useEffect(() => {
    !playerName && setmodal(true)
  }, [playerName])

  useEffect(() => {
    if (pokemonList?.results?.length === 0 || pokemonList) {
      getPokemons({
        callback: setpokemonList
      })
    }
  }, [])

  useEffect(() => {
    if (starterPokemons.length === 6) {
      setconfirmStarterModal(true)
    } else {
      setconfirmStarterModal(false)
    }
  }, [starterPokemons])

  return (
    <main className="bg-mainbg h-screen ">
      <div className="w-full bg-yellow-200 flex items-center justify-center py-10">
        <input
          className="w-1/4 py-4 px-4"
          type="text"
          value={serch11}
          placeholder="Search for Pokemon name"
          onChange={(e) => {
            setserch11(e.target.value)
            setcurrentPage(1)
          }}
        />
      </div>
      {modal && (
        <Modal>
          <form
            action="submit"
            onSubmit={handleSubmit}
            className="p-2 flex-col gap-2 flex text-center"
          >
            <h1 className="text-2xl">Enter your Name</h1>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Enter your name"
                value={playerName}
                onChange={(e) => setplayerName(e.currentTarget.value)}
                className="w-full ring-2 ring-purple-300 p-2 focus:ring-purple-600 outline-none"
              />
              <Button type="submit" onClick={handleSubmit} width="w-20">
                Ok
              </Button>
            </div>
          </form>
        </Modal>
      )}
      {confirmStarterModal && (
        <Modal width="w-3/6 h-5/6">
          <form
            action="submit"
            onSubmit={handleConfirmStarter}
            className="p-2 flex-col gap-2 flex text-center h-full relative"
          >
            <p
              className="absolute top-0 right-0 cursor-pointer text-black hover:text-red-500"
              onClick={() => {
                setconfirmStarterModal(false)
              }}
            >
              Close
            </p>
            <h1 className="text-2xl">Your Starter Pokemons</h1>
            <div className="grid grid-cols-3 gap-4 h-full">
              {starterPokemons.map((e: any) => {
                return <Card data={e} key={e.name}></Card>
              })}
            </div>
            <div className="flex gap-2">
              <Button type="submit" onClick={handleConfirmStarter}>
                Ok
              </Button>
            </div>
          </form>
        </Modal>
      )}
      {/* POKEMONS */}
      <div className="grid-cols-5 grid gap-4 px-20 py-20">
        {pokemons?.map((e: IPokemonList) => {
          return <Card data={e} key={e.name}></Card>
        })}
      </div>
      {/* PAGINATION */}
      <div className="bg-green-400 flex gap-2 p-2 w-full items-center justify-center">
        <Pagination data={pageNum} setcurrentPage={setcurrentPage} currentPage={currentPage} />
      </div>
    </main>
  )
}

const Pagination = ({ setcurrentPage, data, currentPage }: any) => {
  if (data.length > 8) {
    return (
      <div className="flex space-x-3">
        <Button
          onClick={() => {
            setcurrentPage(currentPage - 1)
          }}
          key={123}
        >
          Prev
        </Button>
        <div className="flex space-x-1">
          {data.slice(0, 4).map((e: any) => {
            return (
              <Button
                onClick={() => {
                  setcurrentPage(e)
                }}
                key={e}
              >
                {e}
              </Button>
            )
          })}
        </div>
        <div className="flex space-x-1">
          {data.slice(0, 3).map((e: any) => {
            return (
              <button
                onClick={() => {
                  setcurrentPage(e)
                }}
                key={e}
              >
                .
              </button>
            )
          })}
        </div>
        <div className="flex space-x-1">
          {data.slice(-3).map((e: any) => {
            return (
              <Button
                onClick={() => {
                  setcurrentPage(e)
                }}
                key={e}
              >
                {e}
              </Button>
            )
          })}
        </div>
        <Button
          onClick={() => {
            setcurrentPage(currentPage + 1)
          }}
          key={123}
        >
          Next
        </Button>
      </div>
    )
  }
  return (
    <div className="flex space-x-1">
      {data?.map((e: any) => {
        return (
          <Button
            onClick={() => {
              setcurrentPage(e)
            }}
            key={e}
          >
            {e}
          </Button>
        )
      })}
    </div>
  )
}
