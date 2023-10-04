import * as React from 'react'
import {
  Box,
  Button,
  Alert,
  IconButton,
} from "@mui/material"
import {
  Font,
  Icon,
  usePwaSelect,
  usePwaDispatch,
  selectWeather,
} from "../../../goldlabel"
import {
  resetWeather,
  setWeatherKey,
} from "../../Weather"
export default function ErrorAlert() {
  const dispatch = usePwaDispatch()
  const weather = usePwaSelect(selectWeather)
  const {error} = weather
  if (!error) return null

  return (
    <Box sx={{ flexGrow: 1 }}>
        <Alert 
          severity={"info"}
          iconMapping={{
            info: <Icon icon="help" color="primary"/>,
          }}
          variant="filled"
          action={<>
                    <Button
                      sx={{mr:1}}
                      size="small"
                      color="primary"
                      onClick={() => {
                        dispatch(resetWeather())
                      }}>
                        <Box sx={{mx:1}}>
                          <Font variant="small">
                            Retry
                          </Font>
                        </Box>
                        <Box sx={{ml:1, mt:0.5}}>
                          <Icon icon="refresh" />
                        </Box>
                    </Button>
                    <IconButton
                      sx={{mt:0.5}}
                      size="small"
                      color="primary"
                      onClick={() => {
                        dispatch(setWeatherKey("showError", false))
                      }}>
                        <Icon icon="close" />
                    </IconButton>
                  </>
            }>
            <Font>
              {error}
            </Font>
          </Alert>
      </Box>
    )
}
