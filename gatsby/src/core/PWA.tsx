import React from "react"
import "./theme/style.css"
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
  } = props

  return <>
            <WrapState>
              <Theme>
                <CssBaseline />
                {/* <Tings /> */}
                <App appData={appData} />
                
              </Theme>
            </WrapState>
          </>
}

/*

<App location={location} appData={appData} type={type}>
  {children}
</App>
*/