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
} from "../../../goldlabel"

export default function Goldlabel() {
  const dispatch = usePwaDispatch()

  return <>
          <Box sx={{display: "flex"}}>
            <Box>
              <Tooltip title={<Font color="white">
                Goldlabel
              </Font>}>
                <IconButton
                  color="primary"
                  onClick={() => {
                    dispatch(navigate("https://goldlabel.pro/start", "_self"))
                  }}>
                  <Icon icon="goldlabel" />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
        </>
}
