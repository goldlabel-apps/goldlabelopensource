import React from "react"
import {
  Auth,
} from "../../core"
import {Appshell} from "../Backoffice"
export function Backoffice() {
  // return (<Appshell />)
  return (<Auth><Appshell /></Auth>)
}
