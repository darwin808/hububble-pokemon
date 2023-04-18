import { Navbar } from "@/components/nav"
import { AppContext } from "@/context"
import "@/styles/globals.css"
import { AppProps } from "next/app"
import { Inter } from "next/font/google"
import React, { useState } from "react"
const inter = Inter({ subsets: ["latin"] })

export default function App({ Component, pageProps }: AppProps) {
  const [starterPokemons, setstarterPokemons] = useState<string[]>([])
  const [playerName, setplayerName] = useState("")
  const [pokemonList, setpokemonList] = useState<any>([])
  return (
    <AppContext.Provider
      value={{
        starterPokemons,
        setstarterPokemons,
        playerName,
        setplayerName,
        pokemonList,
        setpokemonList
      }}
    >
      <main className={inter.className}>
        <Navbar />
        <Component {...pageProps} />
      </main>
    </AppContext.Provider>
  )
}
