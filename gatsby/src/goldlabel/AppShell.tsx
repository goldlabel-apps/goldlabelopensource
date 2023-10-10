import React from "react"
import "../style.css"
import {
  CssBaseline,
} from "@mui/material"
import {
  WrapRedux,
  MuiTheme,
  App,
  Notifyer,
} from "../goldlabel"
import {Tings} from "../mods/Tings"
import {Backoffice} from "../mods/Backoffice"
import {AccountPage} from "../goldlabel"

export default function AppShell(props: any) {
  const {
    appData,
    type,
    children,
    location,
  } = props
  return <>
            <WrapRedux>
              <MuiTheme>
                <CssBaseline />
                <Tings />
                {type === "backoffice" ? <Backoffice /> : null }
                {type === "accountPage" ? <><Notifyer /><AccountPage /></> : null }
                {type === "markdown" ? <App location={location} appData={appData} type={type}>
                                        {children}
                                      </App> : null }
              </MuiTheme>
            </WrapRedux>
          </>
}

/*

*/