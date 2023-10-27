import * as React from 'react'
import {
  Box,
  IconButton,
} from "@mui/material"
import {
  Icon,
  Font,
  usePwaSelect,
  usePwaDispatch,
  selectCore,
  scrollTo,
} from "../../../core"


export default function ScrollButton() {
  const dispatch = usePwaDispatch()
  const core = usePwaSelect(selectCore)
  const {scrollDirection} = core
  return (<IconButton 
              color="inherit"
              aria-label="Scroll Top"
              onClick={(e: React.MouseEvent) => {
                e.preventDefault()
                let el: any = null
                if (scrollDirection === "up") el = document.getElementById("topAnchor")
                if (scrollDirection === "down") el = document.getElementById("bottomAnchor")
                if (el) dispatch(scrollTo(el))
              }}>
              <Icon icon={scrollDirection === "down" ? "down" : "up"} color="primary" />
            </IconButton>)
}
