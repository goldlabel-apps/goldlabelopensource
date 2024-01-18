import * as React from "react"
import {
  Box,
} from "@mui/material"
import {
  usePwaSelect,
  selectBackoffice,
} from "../../../core"

export default function BOMenu() {
  const backoffice = usePwaSelect(selectBackoffice)
  const {collection, fbId} = backoffice
  

  return (
    <React.Fragment>
      BOMenu
    </React.Fragment>
  )
}
