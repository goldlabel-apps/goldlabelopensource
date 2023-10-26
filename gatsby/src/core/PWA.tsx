import React from "react"
import "../styles.css"
import {
  CssBaseline,
} from "@mui/material"
import {
  App,
  Theme,
  WrapState,
} from "../core"

export default function PWA(props: any) {
  const {
    appData,
    type,
  } = props

  return <>
            <WrapState>
              <Theme>
                <CssBaseline />
                <App appData={appData} type={type} />
              </Theme>
            </WrapState>
          </>
}
