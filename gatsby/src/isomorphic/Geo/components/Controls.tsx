import * as React from "react"
import {
  Box,
  IconButton,
  AppBar,
} from "@mui/material"
import {
  Icon,
  usePwaDispatch,
} from "../../../"


export function Controls() {
  const dispatch = usePwaDispatch()

  return <>
          <AppBar position="static" sx={{boxShadow: "none"}}>
            <Box id={"weathermapControls"} sx={{display: "flex"}}>
              {/* <Box sx={{flexGrow:1}} /> */}
              <Box>

                <IconButton 
                  color="inherit" 
                  aria-label="Zoom In"
                  onClick={()=>{
                    // dispatch(())
                  }}>
                  <Icon icon="zoomin"/>
                </IconButton>

                <IconButton
                  color="inherit" 
                  aria-label="Zoom Out"
                  onClick={()=>{}}>
                  <Icon icon="zoomout"/>
                </IconButton>

                <IconButton
                  color="inherit" 
                  aria-label="Reset Map"
                  onClick={()=>{
                    console.log("Reset Map")
                  }}>
                  <Icon icon="refresh"/>
                </IconButton>

              </Box>
            </Box>
        </AppBar>
      </>
}
