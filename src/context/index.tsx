import { createContext } from "react"

type IProps = {
  starterPokemons: string[]
  setstarterPokemons: any
  playerName: string
  setplayerName: any
  pokemonList: any
  setpokemonList: any
}
export const AppContext = createContext<IProps>({
  starterPokemons: [],
  setstarterPokemons: (e: any) => {},
  playerName: "",
  setplayerName: (e: any) => {},
  pokemonList: {},
  setpokemonList: (e: any) => {}
})
