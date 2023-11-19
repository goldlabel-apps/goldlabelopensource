import * as React from "react"
import {
  useTheme,
  Container,
  Grid,
} from "@mui/material"
import {
  usePwaDispatch,
  usePwaSelect,
  useSiteMetadata,
  selectBackoffice,
  BottomBar,
} from "../../../core"
import {
  CollectionSelect,
} from "../../Backoffice"
import {
  PingpongSubscribe,
} from "../../Pingpong"

export default function Appshell() {
  const dispatch = usePwaDispatch()
  const siteMeta = useSiteMetadata()
  const backoffice = usePwaSelect(selectBackoffice)
  const {collection, fbId} = backoffice
  const {
    version,
  } = siteMeta
  const bgCol = useTheme().palette.background.default

  return (
    <React.Fragment>
      <div id="topAnchor" />
      
      <Container>
        <Grid container spacing={1}>
          <Grid item xs={12} md={3}>
            <CollectionSelect />
          </Grid>
          <Grid item xs={12} md={9}>
            {collection === "pingpong" ? <PingpongSubscribe /> : null }
            {collection === "google" ? <></> : null }
          </Grid>
        </Grid>
      </Container>
      
      <BottomBar />
    </React.Fragment>
  )
}
