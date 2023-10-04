import * as React from "react"
import {
  // Box,
  Grid,
  // IconButton,
} from "@mui/material"
// import {
//   Icon,
//   usePwaSelect,
//   usePwaDispatch,
//   selectDarkMode,
//   toggleSettings,
//   toggleDarkmode,
//   resetRedux,
// } from "../../goldlabel"
import {
  MiniLinguaMenu,
} from "../../mods/Lingua"
// import {
//   blinkMap,
// } from "../../mods/Geolocator"

export default function MiniSettings() {
  // const dispatch = usePwaDispatch()
  // const darkmode = usePwaSelect(selectDarkMode)
  return (
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <MiniLinguaMenu />
                {/* <IconButton
                  onClick={() => {
                    // dispatch(toggleSettings(false))
                    setTimeout(() => {
                      dispatch(blinkMap())
                    }, 500)
                  }}>
                    <Icon icon={darkmode ? "light" : "dark"} color="primary"/>
                </IconButton> */}

                {/* <IconButton
                  color="primary"
                  onClick={() => {
                    dispatch(toggleSettings(false))
                    dispatch(resetRedux())
                  }}>
                    <Icon icon="refresh"/>
                </IconButton> */}
              </Grid>
          </Grid>
  );
}
