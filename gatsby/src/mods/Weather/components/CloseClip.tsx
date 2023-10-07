import * as React from "react"
import {
  Box,
  Button,
} from "@mui/material"
import {
  Icon,
  Font,
  usePwaDispatch,
  usePwaSelect,
  selectLocale,
} from "../../../goldlabel"
import {getTranslation} from "../../Lingua"
import {
  toggleWeather,
  flyToLocation,
} from "../../Weather"

export default function BottomRightClip() {
  const dispatch = usePwaDispatch()
  const locale = usePwaSelect(selectLocale)
  return (
        <Box id="bottomRightClip"
          sx={{
            position: "absolute",
            zIndex: 2000,
            bottom: 4,
            right: 18,
          }}>
          <Button
            variant="outlined"
            color={"secondary"}
            onClick={() => {
              dispatch(toggleWeather(false))
              dispatch(flyToLocation(null))
            }}>                      
              <Box sx={{mr:2}}>
                <Font variant="small">
                  {getTranslation("CLOSE", locale)}
                </Font>
              </Box>
              <Icon icon="tick" />
          </Button>
        </Box>
  )
}
