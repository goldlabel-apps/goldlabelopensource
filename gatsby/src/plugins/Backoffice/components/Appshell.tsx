import * as React from "react"
import {
  Box,
  AppBar,
  IconButton,
  Toolbar,
} from "@mui/material"
import {
    Icon,
    usePwaDispatch,
    navigate,
    firebaseSignout,
    scrollTo,
} from "../../../core"
import {
  ViewTings,
} from "../../Backoffice"

export default function Appshell() {
  const dispatch = usePwaDispatch()
  // const [mode, setMode] = React.useState<"tings"|"othertings">("tings")
  const mode = "tings"
  return (
    <React.Fragment>
      <div id="topAnchor" />

      {mode === "tings" ? <ViewTings /> : null }

      <AppBar position="fixed" color="inherit" sx={{ top: "auto", bottom: 0 }}>
        <Toolbar>
          <IconButton 
            color="primary"
            aria-label="signout"
            onClick={(e: React.MouseEvent) => {
              e.preventDefault()
              dispatch(firebaseSignout())
            }}>
            <Icon icon="signout" />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />  
          

          <IconButton 
            color="primary"
            aria-label="scroll up"
            onClick={(e: React.MouseEvent) => {
              e.preventDefault()
              let el = document.getElementById("topAnchor")
              if (el) dispatch(scrollTo(el))
            }}>
            <Icon icon="up" />
          </IconButton>

          <IconButton 
            color="primary"
            aria-label="home"
            onClick={(e: React.MouseEvent) => {
              e.preventDefault()
              dispatch(navigate("/", "_self"))
            }}>
            <Icon icon="home" />
          </IconButton>

        </Toolbar>
      </AppBar>
    </React.Fragment>
  )
}
