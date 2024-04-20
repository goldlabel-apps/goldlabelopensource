import * as React from "react"
import {
  Box,
  Avatar,
  CardHeader,
  CardActionArea,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
} from "@mui/material"
import {
  Icon,
  Font,
  usePwaDispatch,
  usePwaSelect,
  selectDisplay,
  selectFingerprint,
} from "../../../goldlabel"
import {
  remove,
  setFingerprintKey,
} from "../../Fingerprint"

export default function SingleFingerprint(props: any) {

  const dispatch = usePwaDispatch()
  const [open, setOpen] = React.useState<boolean>(false)
  const display = usePwaSelect(selectDisplay)
  const fingerprint = usePwaSelect(selectFingerprint)
  const {subscribed} = fingerprint
  // console.log("subscribed", subscribed)

  const {mobile} = display
  const {data} = props
  const {
    name,
    avatar,
    uid,
    hits,
  } = data

  const openFingerprint = () => {
    dispatch(setFingerprintKey("open", true))
  }

  const closeFingerprint = () => {
    setOpen(false)
  }

  return <>
        <Dialog 
          open={open}
          onClose={closeFingerprint}
          fullWidth
          fullScreen={mobile}>
            <DialogTitle>
              <CardHeader 
                avatar={<></>}
                title={<></>}
              />
            </DialogTitle>
            <DialogContent>
              <Font>
              </Font>
            </DialogContent>
            <DialogActions>
              <IconButton sx={{ml: 1}}
                color="primary"
                onClick={() =>{
                  dispatch(remove(uid))
                  closeFingerprint()
                }}>
                
                <Box sx={{mt: 0.5}}>
                  <Icon icon="delete" />
                </Box>
              </IconButton>
              <Box sx={{flexGrow:1}} />
              <IconButton
                sx={{mr:1}}
                color="primary"
                onClick={closeFingerprint}>
                <Icon icon="close" />
              </IconButton>
            </DialogActions>
        </Dialog>
        <CardActionArea
          onClick={openFingerprint}>
          <CardHeader 
            avatar={<Avatar src={avatar} />}
            title={<Font>
                    {name}
                  </Font>}
            subheader={<Font variant="small">
                        hits {hits}
                      </Font>}
          />
        </CardActionArea>
      </>
}

/*
<pre>fingerprint: {JSON.stringify(fingerprint, null, 2)}</pre> 
*/