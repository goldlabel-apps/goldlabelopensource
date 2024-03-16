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
  toggleBigMap,
} from "../../Geolocator"

export default function BottomRightClip() {
  const dispatch = usePwaDispatch()
  const locale = usePwaSelect(selectLocale)
  return (
        <Box id="closeClip"
          sx={{
            position: "absolute",
            zIndex: 2000,
            top: 8,
            right: 8,
          }}>
          <Button
            variant="outlined"
            color={"secondary"}
            onClick={() => {
              dispatch(toggleBigMap(false))
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
