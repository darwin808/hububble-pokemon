import { BASE_URL } from "@/config"

type IProps = {
  callback: any
  url?: string
  setloading?: any
  loading?: boolean
}
export const getPokemons = async ({
  callback,
  url = "",
  setloading = (e: boolean) => {},
  loading
}: IProps) => {
  setloading(true)
  if (!url) {
    url = BASE_URL + "pokemon?limit=100000&offset=0"
  }
  const res = await fetch(url)
    .then((response) => {
      setloading(false)
      return response.json()
    })
    .catch((e) => {
      setloading(false)
      console.log(e)
      return []
    })
  callback(res)
  return res
}
