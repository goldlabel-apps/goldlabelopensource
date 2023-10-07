import React from "react"
import "../style.css"
import {
  WrapRedux,
  MuiTheme,
  App,
  PublicTing,
} from "../goldlabel"
import {
  CssBaseline,
} from "@mui/material"
import {Tings} from "../mods/Tings"

export default function AppShell(props: any) {
  const {
    appData,
    type,
    book,
    children,
    location,
  } = props
  return (<>
            <WrapRedux>
              <MuiTheme>
                <CssBaseline />
                <Tings />
                {type !== "tings" ? <App location={location} appData={appData} type={type} book={book} >
                  {children}
                </App> : <PublicTing /> }
              </MuiTheme>
            </WrapRedux>
          </>)
}
