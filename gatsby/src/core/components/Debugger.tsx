import * as React from "react"
import {
  Box,
  Button,
  Card,
  CardHeader,
  CardContent,
  CardActions,
} from "@mui/material"
import {
  Font,
  Icon,
  usePwaSelect,
  usePwaDispatch,
  selectPingpong,
  selectCore,
  persistor,
  setCoreKey,
} from "../../core"

export default function Debugger() {
  const dispatch = usePwaDispatch()
  const pingpong = usePwaSelect(selectPingpong)
  const core = usePwaSelect(selectCore)
  const {debuggerOpen} = core
  if (!debuggerOpen) return true

  const {
    uid,
    fbId,
  } = pingpong

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
            <Card sx={{my:1}}>
              <CardHeader 
                avatar={<Icon icon="bug" color="primary"/>}
                title={<Font>Debugger</Font>}
              />
              {/* <CardContent>
                <pre>uid {JSON.stringify(uid, null, 2)}</pre>
                <pre>fbId {JSON.stringify(fbId, null, 2)}</pre>
              </CardContent> */}
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
                      Close
                    </Font>
                </Button>
              </CardActions>
            </Card>
        </>
  )
}
