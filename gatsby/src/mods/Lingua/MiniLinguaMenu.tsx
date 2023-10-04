import * as React from 'react'
import {goldlabelConfig} from "../../goldlabelConfig"
import {
  Avatar,
  useTheme,
  List,
  ListItemButton,
  ListItemAvatar,
  IconButton,
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

export default function MiniLinguaMenu () {
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
            { localeList.map((item: string, i: number) => {
              return <IconButton
                        key={`locale_${i}`}
                        sx={{
                          border: item === locale ? 
                          "1px solid "+ theme.palette.primary.main : "none"
                        }}
                        onClick={(e:React.MouseEvent) => {
                          e.preventDefault()
                          dispatch(setLingua(item))
                          // dispatch(toggleSettings(false))
                        }}>
                          <Avatar 
                              sx={{
                                width: 24,
                                height: 24,
                                border: item === locale ? "1px solid "+ theme.palette.primary.main : "none"
                              }}
                              src={`/svg/flags/${item}.svg`} 
                              alt={localeMeta[item].localised}/>
                      </IconButton>
            }) }
          
      </>
  );
}
