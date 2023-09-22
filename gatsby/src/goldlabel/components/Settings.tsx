import * as React from "react"
import {
  Box,
  Container,
  Grid,
} from "@mui/material"
import {
  usePwaDispatch,
  usePwaSelect,
  selectPWA,
  toggleSettings,
  GenericDialog,
  AuthedNav,
  SettingsNav,
} from "../../"
import {Lingua} from "../packages/Lingua"
import {Signin} from "../packages/Auth"
import {
  getTranslation,
} from "../../translations"

export default function Settings() {
  const dispatch = usePwaDispatch()
  const pwa = usePwaSelect(selectPWA)
  const {settings, locale, authed} = pwa
  let title: string = getTranslation("SETTINGS", locale)
  let closeStr: string = getTranslation("CLOSE", locale)

  return (
    <Box sx={{ display: "block"}}>
      <GenericDialog 
        fullScreen
        open={settings}
        title={title.toUpperCase()}
        closeStr={closeStr}
        onClose={() => dispatch(toggleSettings(false))}>
          <Container maxWidth="md">
            <Grid container spacing={1}>   
              <Grid item xs={12} md={7}>
                <SettingsNav /> 
                { !authed ? <Signin /> :<AuthedNav /> }
              </Grid>
              <Grid item xs={12} md={5}>
                <Box sx={{}}>
                  <Lingua />
                </Box>
              </Grid>
          </Grid>
        </Container>
      </GenericDialog>
    </Box>
  );
}
