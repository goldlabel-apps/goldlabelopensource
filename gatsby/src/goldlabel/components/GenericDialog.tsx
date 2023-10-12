import * as React from 'react'
import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
  DialogActions,
  CardHeader,
} from "@mui/material"
import {
  Icon,
  Font,
  useIsBig,
} from "../../goldlabel"

export default function GenericDialog (props: any) {
  const {
    title,
    onClose,
    children,
    open,
    closeStr,
  } = props
  const isBig = useIsBig().isBig
  const closeGenericDialog = () => onClose()

  return (<>
            <Dialog 
              open={open}
              onClose={closeGenericDialog}
              fullScreen={!isBig}
              fullWidth
              maxWidth="sm">
                
              {title ? <DialogTitle sx={{margin:"auto"}}>
                          <CardHeader title={<Font>{title} </Font>}/>
                      </DialogTitle> : null }

              <DialogContent>
                {children}
              </DialogContent>
              
              <DialogActions>
                <Box sx={{flexGrow:1}} />
                <Box sx={{mx:4}}>
                  <Button
                    color={"inherit"}
                    onClick={closeGenericDialog}>                      
                      <Box sx={{mx:1}}>
                        <Font variant="small">
                          {closeStr || "Close"}
                        </Font>
                      </Box>
                      <Icon icon="tick" color="primary"/>
                  </Button>
                </Box>
                <Box sx={{flexGrow:1}} />
              </DialogActions>

          </Dialog>
        </>
    );
}
