import { createContext } from "react"

type IProps = {
  starterPokemons: string[]
  setstarterPokemons: any
  playerName: string
  setplayerName: any
}
export const AppContext = createContext<IProps>({
  starterPokemons: [],
  setstarterPokemons: (e: any) => {},
  playerName: "",
  setplayerName: (e: any) => {}
})
