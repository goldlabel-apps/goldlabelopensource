import * as React from 'react'
import {
  Alert,
  AlertTitle,
  Box,
  IconButton,
} from "@mui/material"
import {
  Icon,
  Font,
  usePwaSelect,
  selectAskOliver,
} from "../../../core"
// import {
//   setAskOliverKey,
//   reset,
// } from "../"

export default function AskOliverError() {
  const chatgpt = usePwaSelect(selectAskOliver)
  return (
    <>
      <Alert
        severity="error"
        iconMapping={{
        error: <Box sx={{}}>
                  <IconButton
                    color="primary"
                    onClick={() => {
                      window.open("/", "_self")
                    }}>
                    <Icon icon={"reset"} />
                  </IconButton>
                </Box>
        }}>
          <AlertTitle>
            <Box sx={{mt:1}}>
            <Font variant="title">
              Ask Oliver API Error
            </Font>
            </Box>
          </AlertTitle>
          <Font variant="small">
            {`${process.env.REACT_APP_2ND_API}/openai`}
          </Font>
      </Alert>
    </>
  )
}
