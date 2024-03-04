import React from "react"
import {
  AppBar,
  ButtonBase,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  CardHeader,
} from "@mui/material"
import {
  Icon,
  usePwaDispatch,
  usePwaSelect,
  selectTings,
  resetLocalstorage,
} from "../../../../goldlabel"
import {
  toggleTingDialog,
  TingDisplay,
} from "../"

export function TingDialog() {

  const dispatch = usePwaDispatch()
  const tings = usePwaSelect(selectTings)
  const {
    dialogOpen,
  } = tings

  const closeDialog = () => {
    dispatch(toggleTingDialog(false))
  }

  return (<>
            <Dialog 
              fullScreen
              open={dialogOpen}
              onClose={closeDialog}>
                <Box sx={{display: "flex"}}>
                <Box sx={{flexGrow: 1}} />
                <Box sx={{width: 800}}>
                  <DialogTitle>
                    <CardHeader 
                      avatar={<IconButton
                        onClick={closeDialog}>
                        <Icon icon="ting" />
                      </IconButton>}
                      action={<IconButton
                        onClick={() => {dispatch(resetLocalstorage())}}>
                        <Icon icon="reset" />
                      </IconButton>
                      }
                    />
                  </DialogTitle>
                  <DialogContent>  
                    
                  </DialogContent>
                  <AppBar
                    color="inherit"
                    position="fixed"
                    sx={{ 
                      border: 0, boxShadow: 0,
                      top: 'auto',
                      bottom: 0, 
                    }}>
                    <ButtonBase
                      sx={{p:1}}
                      onClick={closeDialog}>
                      <Box>
                        <TingDisplay />
                      </Box>
                    </ButtonBase>
                  </AppBar> 
                </Box>
                <Box sx={{flexGrow:1}} />
              </Box>
        </Dialog>          
      </>
  )
}
