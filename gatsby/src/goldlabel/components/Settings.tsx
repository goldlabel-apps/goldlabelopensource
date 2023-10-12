import * as React from "react"
import {
  Box,
  Grid,
} from "@mui/material"
import {
  Font,
  usePwaDispatch,
  usePwaSelect,
  toggleSettings,
  GenericDialog,
  SettingsMenu,
  selectSettings,
  selectLocale,
  getTranslation,
} from "../../goldlabel"
import {
  Lingua,
} from "../../mods/Lingua"

export default function Settings() {
  const dispatch = usePwaDispatch()
  const settings = usePwaSelect(selectSettings)
  const locale = usePwaSelect(selectLocale)
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
