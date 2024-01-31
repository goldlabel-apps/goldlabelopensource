import * as React from "react"
import {
  Box,
  IconButton,
  Tooltip,
} from "@mui/material"
import {
  Font,
  Icon,
  usePwaDispatch,
  navigate,
  Tings,
} from "../../../goldlabel"

export default function Goldlabel() {
  const dispatch = usePwaDispatch()

  return <>
          {/* Include plugins */}
          <Box sx={{display: "flex"}}>
            <Box>
            <Tooltip title={<Font color="white">
                Goldlabel
              </Font>}>
                <IconButton
                  color="primary"
                  onClick={() => {
                    dispatch(navigate("/goldlabel", "_self"))
                  }}>
                  <Icon icon="goldlabel" />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
        </>
}
