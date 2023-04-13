import { BASE_URL } from "@/config"

type IProps = {
  callback: any
  url?: string
}
export const getPokemons = async ({ callback, url = "" }: IProps) => {
  if (!url) {
    url = BASE_URL + "pokemon?limit=100000&offset=0"
  }
  const res = await fetch(url)
    .then((response) => {
      return response.json()
    })
    .catch((e) => {
      console.log(e)
      return []
    })
  callback(res)
}
