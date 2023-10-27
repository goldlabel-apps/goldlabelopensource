import React from "react"
import {
  Auth,
} from "../../core"
import {Appshell} from "../Backoffice"
export function Backoffice() {
  return (<Auth>
            <Appshell />     
          </Auth>
  )
}