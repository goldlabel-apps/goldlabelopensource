import * as React from 'react'
import {goldlabelConfig} from "../../goldlabelConfig"
import {
  Box,
  Avatar,
  Button,
  useTheme,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  List,
  ListItemButton,
  ListItemAvatar,
  ListItemText,
  CardHeader,
  CardContent,
} from "@mui/material"
import {
  usePwaDispatch,
  usePwaSelect,
  selectPWA,
  setLingua,
  Icon,
  Font,
} from "../../goldlabel"
import {
  toggleLingua,
  getTranslation,
} from "../Lingua"

export default function LinguaDialog () {
  const pwa = usePwaSelect(selectPWA)
  const {locale, lingua} = pwa
  const theme = useTheme()
  const dispatch = usePwaDispatch()
  const {localeList, localeMeta} = goldlabelConfig
  let linguaStr: string = getTranslation("LINGUA", locale)
  
  const onOpenLingua = () => {
    dispatch(toggleLingua(true))
    return true
  }

  const closeLingua = () => {
    dispatch(toggleLingua(false))
    return true
  }

  return (
      <>

        <IconButton onClick={onOpenLingua}>
          <Avatar 
            sx={{
              width: 22,
              height: 22,
            }}
            src={`/svg/flags/${locale}.svg`}
          />
        </IconButton>
        <Dialog 
          open={lingua}
          onClose={closeLingua}
          fullWidth
          maxWidth="xs"
          fullScreen={false}>
          <DialogTitle>
            <CardHeader 
              avatar={<Icon icon={"lingua"} />}
              title={<Font variant="title">
                        Lingua
                      </Font>}
            />
           
          </DialogTitle>

          <DialogContent>
              <List>
              { localeList.map((item: string, i: number) => {
                  return <ListItemButton
                            key={`locale_${i}`}
                            sx={{
                              borderLeft: item === locale ? "1px solid "+ theme.palette.primary.main : "none"
                            }}
                            onClick={(e:React.MouseEvent) => {
                              e.preventDefault()
                              dispatch(setLingua(item))
                              closeLingua()
                            }}>
                              <ListItemAvatar>
                                <Avatar 
                                  sx={{
                                    width: 24,
                                    height: 24,
                                    border: item === locale ? "1px solid "+ theme.palette.primary.main : "none"
                                  }}
                                  src={`/svg/flags/${item}.svg`} 
                                  alt={localeMeta[item].localised}/>
                              </ListItemAvatar>
                              <ListItemText primary={<Font>{item !== locale ? localeMeta[item].localised 
                              : localeMeta[item].default}</Font>} />
                          </ListItemButton>
                }) }
              </List>
              


            <CardContent>
            <Font variant="small">
              {linguaStr}
            </Font>
            </CardContent>


          </DialogContent>

          
          <DialogActions>
          
            <Button
              color={"inherit"}
              onClick={closeLingua}>
                <Box sx={{mx:1}}>
                  Close
                </Box>
                <Icon icon="close" color="primary" />
            </Button>
          </DialogActions>
        </Dialog>
      </>
  );
}
