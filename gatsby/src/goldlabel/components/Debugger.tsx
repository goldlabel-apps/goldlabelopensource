import * as React from "react"
import {
  Box,
  Button,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
} from "@mui/material"
import {
  Font,
  Icon,
  usePwaSelect,
  usePwaDispatch,
  selectCore,
  persistor,
  setCoreKey,
} from "../../goldlabel"

export default function Debugger() {
  const dispatch = usePwaDispatch()
  const core = usePwaSelect(selectCore)
  const {debuggerOpen} = core
  if (!debuggerOpen) return true

  const purgeRedux = () => {
    console.log("purge")
    persistor.pause();
    persistor.flush().then(() => {
      setTimeout(() => {
        window.location.reload();
      }, 500)
      return persistor.purge()
    })
  }

  return (<>
            <Box sx={{my:1}}>
              <Divider />
              <CardHeader 
                avatar={<Icon icon="bug" color="primary"/>}
                title={<Font>Debugger</Font>}
              />
              <CardContent>
                <Font variant="small">
                  Reset the redux store by tapping purge
                </Font>
              </CardContent>
              <CardActions>
                <Box sx={{flexGrow: 1}}/>
                <Button 
                  className="enterable"
                  color="primary"
                  onClick={purgeRedux}>
                    <Box sx={{mr:2, mt:0.5}}>
                      <Icon icon="reset" />
                    </Box>
                    <Font variant="small">
                      Purge
                    </Font>
                </Button>
                <Button 
                  className="enterable"
                  color="primary"
                  onClick={() => {
                    dispatch(setCoreKey("debuggerOpen", false))
                  }}>
                    <Box sx={{mr:2, mt:0.5}}>
                      <Icon icon="close" />
                    </Box>
                    <Font variant="small">
                      Cancel
                    </Font>
                </Button>
              </CardActions>
              <Divider />
            </Box>
        </>
  )
}
