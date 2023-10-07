import * as React from "react"
import {
  Box,
  Container,
  Grid,
} from "@mui/material"
import {
  Font,
  usePwaDispatch,
  usePwaSelect,
  selectPWA,
  toggleSettings,
  GenericDialog,
  SettingsMenu,
} from "../../goldlabel"
import {
  Lingua,
  getTranslation,
} from "../../mods/Lingua"

export default function Settings() {
  const dispatch = usePwaDispatch()
  const pwa = usePwaSelect(selectPWA)
  const {settings, locale, authed} = pwa
  let title: string = getTranslation("SETTINGS", locale)
  let closeStr: string = getTranslation("CLOSE", locale)

  return (
    <Box sx={{ display: "block"}}>
      <GenericDialog 
        open={settings}
        fullScreen={false}
        title={title.toUpperCase()}
        closeStr={closeStr}
        onClose={() => dispatch(toggleSettings(false))}>
            <Grid container spacing={1}>
              <Grid item xs={12} md={6}>
                <SettingsMenu /> 
              </Grid>
              <Grid item xs={12} md={6}>
                <Box sx={{}}>
                  <Lingua />
                  <Font variant="small">
                    {getTranslation("LINGUA", locale)}
                  </Font>
                  
                </Box>
              </Grid>
          </Grid>
      </GenericDialog>
    </Box>
  );
}
