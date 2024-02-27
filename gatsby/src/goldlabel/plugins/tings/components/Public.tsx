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
          <Box sx={{ background: "#e9e9e9", display: "flex"}}>
            <Box sx={{m:0}}>
              <Tooltip title={<Font color="white">Tings</Font>}>
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
