import { Navbar } from "@/components/nav"
import { AppContext } from "@/context"
import "@/styles/globals.css"
import { AppProps } from "next/app"
import React, { useState } from "react"

export default function App({ Component, pageProps }: AppProps) {
  const [starterPokemons, setstarterPokemons] = useState<string[]>([])
  const [playerName, setplayerName] = useState("")
  return (
    <AppContext.Provider value={{ starterPokemons, setstarterPokemons, playerName, setplayerName }}>
      <Navbar />
      <Component {...pageProps} />
    </AppContext.Provider>
  )
}
