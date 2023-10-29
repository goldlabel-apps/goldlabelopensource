import * as React from "react"
import {
  IconButton,
} from "@mui/material"
import {
  Icon,
  usePwaSelect,
  usePwaDispatch,
  selectCore,
  scrollTo,
} from "../../../core"


export default function ScrollButton() {
  const dispatch = usePwaDispatch()
  const core = usePwaSelect(selectCore)
  const {scrollDirection} = core
  const hideScrollBtn = false
  if (hideScrollBtn) return null
  return (<IconButton 
              color="inherit"
              aria-label="Scroll Top"
              onClick={(e: React.MouseEvent) => {
                e.preventDefault()
                let el: any = document.getElementById("topAnchor")
                // if (scrollDirection === "up") el = document.getElementById("topAnchor")
                // if (scrollDirection === "down") el = document.getElementById("bottomAnchor")
                if (el) dispatch(scrollTo(el))
              }}>
              <Icon icon={"up"} color="primary" />
            </IconButton>)
}
