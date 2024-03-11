import * as React from 'react'
import {
  AppBar,
  IconButton,
  CardHeader,
  Avatar,
} from "@mui/material"
import {
  Icon,
  Font,
  usePwaDispatch,
  usePwaSelect,
  selectTings,
} from "../../../../goldlabel"
import {
  ForgetMe,
  toggleFullScreen,
} from "../../Fingerprint"

export default function Controls() {

  const closeFingerprint = () => {
    dispatch(toggleFullScreen(false))
    return true
  }

  const dispatch = usePwaDispatch()
  const tings = usePwaSelect(selectTings)
  const {ting} = tings
  if (!ting) return null


  const {
    displayName,
    ip,
  } = ting
  
  return <AppBar 
            position="static" 
            color="inherit"
            sx={{
              background: "none",
              boxShadow: "none"
            }}>
            
              <CardHeader 
                avatar={<IconButton
                          onClick={closeFingerprint}
                          color="primary">
                          <Icon icon="left" />
                        </IconButton>}
                action={<>
                  <ForgetMe mode="icon"/>
                  <IconButton
                    onClick={closeFingerprint}
                    color="primary">
                    <Icon icon="close" />
                  </IconButton>
                </>}
                title={<Font noWrap>
                        {displayName}
                      </Font>}
                subheader={<Font variant="small" noWrap>
                            {ip}
                          </Font>}
              />
              
          </AppBar>
}
