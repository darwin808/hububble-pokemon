/* eslint-disable react/display-name */
import { LOADING_SPINNER } from "@/assets"
import Image from "next/image"
import React from "react"

export const Loader = React.memo(() => {
  return <Image src={LOADING_SPINNER} alt="pokemon loading" height={"100"} width={"100"} />
})
