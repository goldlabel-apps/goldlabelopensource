import React from "react"
import {
  Box,
  Tooltip,
  IconButton,
} from "@mui/material"
import {
  Font,
  Icon,
  usePwaDispatch,
  usePwaSelect,
  selectFrontmatter,
  navigate,
} from "../../../goldlabel"

export function Tings({mode}) {

  const dispatch = usePwaDispatch()
  const frontmatter = usePwaSelect(selectFrontmatter)
  if(!frontmatter) return null
  const {plugin} = frontmatter
  const hide = false
  if (mode === "off" || hide) return null

  return (<>
          <Box sx={{}}>
            {/* <Tooltip title={<Font color="white">
              Tings
            </Font>}>
              <IconButton
                color="primary"
                onClick={() => {
                  console.log("do tings!")
                  if (plugin === "tings"){
                    
                  } else {
                    // dispatch(navigate("/work/goldlabel/plugins/tings", "_self"))
                  }
                }}>
                <Icon icon="fing" />
              </IconButton>
            </Tooltip> */}
          </Box>
        </>
  )
}
