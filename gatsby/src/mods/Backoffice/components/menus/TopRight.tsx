import React from "react"
import {
  Box,
  IconButton,
} from "@mui/material"
import {
  Icon,
  usePwaDispatch,
  navigate,
  resetRedux,
} from "../../../../goldlabel"
import {AuthChip} from "../../../../goldlabel"

export default function TopRight() {
  const dispatch = usePwaDispatch()

  return <>
          <Box sx={{my:2, display: "flex"}}>
            
            {/* <IconButton
              color="primary"
              onClick={() => {
                dispatch(navigate("/", "_self"))
              }}>
                <Icon icon="home"/>
              </IconButton>

              <IconButton
                color="primary"
                onClick={() => {
                  dispatch(resetRedux())
                }}>
                <Icon icon="reset"/>
              </IconButton> */}

              <AuthChip />
              
          </Box>
        </>
}
