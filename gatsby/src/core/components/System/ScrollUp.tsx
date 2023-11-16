import * as React from "react"
import {
  IconButton,
} from "@mui/material"
import {
  Icon,
  usePwaDispatch,
  scrollTo,
  setCoreKey,
} from "../../../core"


export default function ScrollUp() {
  const dispatch = usePwaDispatch()
  const hideScrollBtn = false
  if (hideScrollBtn) return null
  return (<IconButton 
              color="inherit"
              aria-label="Scroll up"
              onClick={(e: React.MouseEvent) => {
                e.preventDefault()
                let el: any = document.getElementById("topAnchor")
                if (el){
                  dispatch(scrollTo(el))                  
                }
              }}>
              <Icon icon={"up"} color="primary" />
            </IconButton>)
}
