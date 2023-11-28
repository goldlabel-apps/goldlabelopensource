import * as React from "react"
import {
  Container,
  Grid,
} from "@mui/material"
import {
  usePwaSelect,
  selectBackoffice,
  BottomBar,
} from "../../../core"
import {
  PingpongSubscribe,
  Ping,
} from "../../Pingpong"

export default function Appshell() {
  const backoffice = usePwaSelect(selectBackoffice)
  const {collection, fbId} = backoffice

  return (
    <React.Fragment>
      <div id="topAnchor" />
      <Container>
        { collection === "pingpong" ? <>
          { fbId ? <Ping /> : <PingpongSubscribe /> }
        </> : null }
      </Container>
      <BottomBar />
    </React.Fragment>
  )
}

/*
<Grid container spacing={1}>
          { fbId ? <Grid item xs={12} md={8}>
          </Grid> : null }
          <Grid item xs={12} md={fbId ? 4 : 12}>
          </Grid>
        </Grid>
*/