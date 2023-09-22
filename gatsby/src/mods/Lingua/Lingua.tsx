import * as React from 'react'
import {goldlabelConfig} from "../../goldlabelConfig"
import {
  Avatar,
  useTheme,
  IconButton,
  List,
  ListItemButton,
  ListItemAvatar,
  ListItemText,
  CardHeader,
} from "@mui/material"
import {
  usePwaDispatch,
  usePwaSelect,
  selectPWA,
  setLingua,
  Icon,
  navigate,
  Font,
} from "../../../"

export default function Lingua () {
  const pwa = usePwaSelect(selectPWA)
  const {locale} = pwa
  const theme = useTheme()
  const dispatch = usePwaDispatch()
  const {localeList, localeMeta} = goldlabelConfig
  // let linguaStr: string = getTranslation("LINGUA", locale)

  return (
      <>        
        
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

/*
<CardHeader 
          avatar={<IconButton
                    sx={{ml:-1}}
                    color="primary"
                    onClick={() => {
                      dispatch(navigate("https://listingslab.com/products/lingua/", "_blank"))
                    }}
                  >
                    <Icon icon={"lingua"} />
                  </IconButton>}
          title={<Font>
                    Lingua
                  </Font>}/>
<CardContent>
                    <Font variant="small">
                      {linguaStr}
                    </Font>
                  </CardContent>
*/