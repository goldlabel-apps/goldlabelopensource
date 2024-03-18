import {glConfig} from "../../../config"
import * as React from "react"
import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  CardHeader,
} from "@mui/material"
import {
    Icon,
    Font,
    usePwaSelect,
    usePwaDispatch,
    selectDisplay,
    selectGeo,
} from "../../../goldlabel"
import {
  toggleDialog,
  GeoMap,
} from "../../Geo"
import {
  ThemedIconBtn,
} from "../../Theme"

export default function GeoDialog() {
  const dispatch = usePwaDispatch()
  const geo = usePwaSelect(selectGeo)
  const display = usePwaSelect(selectDisplay)
  let mobile = true
  if (display) mobile = display.mobile
  const {open} = geo

  const {isomorphic} = glConfig
  const geoConfig = isomorphic.geo

  const closeDialog = () => {
    dispatch(toggleDialog(false))
  }

  return <Dialog 
            open={open}
            fullWidth
            fullScreen={mobile}
            onClose={closeDialog}>
          <DialogTitle>
            <CardHeader
              avatar={<Icon icon="geo" color="primary" />} 
              title={<Font>Geo</Font>}
              action={<Box sx={{mt: 0.5}}>
              <ThemedIconBtn 
                onClick={closeDialog}
                label="Close"
                icon="close"
                variant="text"
              />
            </Box>}
            />
          </DialogTitle>
          <DialogContent>
            <Box sx={{
              height: 400,
            }}>
              <GeoMap />
            </Box>
          </DialogContent>
          {/* <DialogActions>
            
          </DialogActions> */}
        </Dialog>
}
