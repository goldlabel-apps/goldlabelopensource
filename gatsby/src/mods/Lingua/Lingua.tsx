import * as React from 'react'
import {goldlabelConfig} from "../../goldlabelConfig"
import {
  Avatar,
  useTheme,
  List,
  ListItemButton,
  ListItemAvatar,
  ListItemText,
  // CardHeader,
} from "@mui/material"
import {
  usePwaDispatch,
  usePwaSelect,
  selectPWA,
  selectLocale,
  setLingua,
  Font,
  Icon,
} from "../../goldlabel"
import {
  getTranslation,
} from "../Lingua"

export default function Lingua () {
  const locale = usePwaSelect(selectLocale)
  const theme = useTheme()
  const dispatch = usePwaDispatch()
  const {features} = goldlabelConfig
  const {lingua} = features
  const {
    localeList,
    localeMeta,
  } = lingua
  
  return (
      <>        
        {/* <CardHeader 
          avatar={<Icon icon="lingua" />}
          title={<Font>
                  Lingua
                </Font>}
        /> */}
          <List>
            { localeList.map((item: string, i: number) => {
              return <ListItemButton
                        key={`locale_${i}`}
                        sx={{
                          borderLeft: item === locale ? 
                          "1px solid "+ theme.palette.primary.main : "none"
                        }}
                        onClick={(e:React.MouseEvent) => {
                          e.preventDefault()
                          dispatch(setLingua(item))
                          // dispatch(toggleSettings(false))
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
                          <ListItemText 
                            primary={
                              <Font variant="small">
                                {item !== locale ? 
                                localeMeta[item].localised : localeMeta[item].default}
                              </Font>} />
                      </ListItemButton>
            }) }
          </List>
          
      </>
  );
}
