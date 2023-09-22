import React from "react"
import "./theme/default.css"
import {
  WrapRedux,
  MuiTheme,
  App,
} from "../goldlabel"
import {
  CssBaseline,
} from "@mui/material"

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
                <App location={location} appData={appData} type={type} book={book} >
                  {children}
                </App>
              </MuiTheme>
            </WrapRedux>
          </>)
}

/*
<SEO appData={appData} type={type} book={book}/>
*/