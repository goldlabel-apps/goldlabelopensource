import React from "react"
import {
  Box,
  Tooltip,
  IconButton,
} from "@mui/material"
import {
  Font,
  Icon,
} from "../../../../goldlabel"

export function Public() {
  return (<>
          <Box sx={{ display: "flex"}}>
            <Box sx={{flexGrow:1}}/>
            <Box sx={{m:0}}>
              <Tooltip title={<Font>Your Ting</Font>}>
                <IconButton
                  color="primary"
                  onClick={() => {
                    // console.log("do tings!")
                  }}>
                  <Icon icon="fing" />
                </IconButton>
              </Tooltip>
            </Box>
            <Box sx={{m:1}}>
              <Font>
                fingerprint...
              </Font>
            </Box>
          </Box>
        </>
  )
}
