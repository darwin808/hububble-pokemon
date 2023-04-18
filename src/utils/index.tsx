export const bgChanger = (type: any) => {
  switch (type) {
    case "grass":
      return "bg-green-200"
    case "bug":
      return "bg-green-200"
    case "poison":
      return "bg-green-500"
    case "fire":
      return "bg-orange-400"
    case "water":
      return "bg-blue-200"
    case "normal":
      return "bg-beige"
    case "ground":
      return "bg-beige"
    case "fighting":
      return "bg-beige"
    case "flying":
      return "bg-beige"
    case "rock":
      return "bg-beige"
    case "psychic":
      return "bg-yellow-300"
    case "steel":
      return "bg-gray-200"
    case "dark":
      return "bg-violet-400"
    case "ice":
      return "bg-sky-500/75 "
    case "dragon":
      return "bg-orange-500/75 "
    case "ghost":
      return "bg-purple-500/75 "
    case "electric":
      return "bg-orange-400"
    case "fairy":
      return "bg-pink-100"

    default:
      return "bg-white"
  }
}
