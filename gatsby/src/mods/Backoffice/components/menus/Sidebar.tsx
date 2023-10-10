import {goldlabelConfig} from "../../../../goldlabelConfig"
import React from "react"
import {
    Box,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    List,
    ListItem,
} from "@mui/material"
import {
    Font,
    Icon,
    getTranslation,
    usePwaDispatch,
    usePwaSelect,
    selectLocale,
    navigate,
} from "../../../../goldlabel"
import {
  selectCollection,
} from "../../../Backoffice"
import {
  hideDiv,
} from "../../../Flash"

export default function Sidebar(props: any) {
  const {open} = props
  const dispatch = usePwaDispatch()
  const locale = usePwaSelect(selectLocale)
  const {collections} = goldlabelConfig.features.backoffice
  
  return (<>
    <Box sx={{}}>
        {collections ? <>
            <List>
              <ListItem 
                disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                  onClick={() => {
                    dispatch(selectCollection(null, null))
                    dispatch(hideDiv("backoffice"))
                    dispatch(navigate("/", "_self"))
                  }}>
                  <ListItemIcon>
                    <Icon icon={"home"} color="primary"/>
                  </ListItemIcon>
                  <ListItemText
                    primary={<Font>{getTranslation("HOME", locale)}</Font>}
                  />
                </ListItemButton>
              </ListItem>

              <ListItem 
                disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                  onClick={() => {
                    dispatch(selectCollection(null, null))
                    dispatch(hideDiv("backoffice"))
                    dispatch(navigate("/backoffice", "_self"))
                  }}>
                  <ListItemIcon>
                    <Icon icon={"dashboard"} color="primary"/>
                  </ListItemIcon>
                  <ListItemText
                    primary={<Font>{getTranslation("DASHBOARD", locale)}</Font>}
                  />
                </ListItemButton>
              </ListItem>
           
              {collections.map((item: string, i: number) => {
                return <ListItem 
                        key={`collection_${i}`}
                        disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                          onClick={() => {
                            dispatch(selectCollection(item))
                          }}>
                          <ListItemIcon>
                            <Icon icon={item.toLowerCase()} color="primary"/>
                          </ListItemIcon>
                          <ListItemText
                            primary={<Font>
                                        {item}
                                    </Font>}
                          />
                        </ListItemButton>
                      </ListItem>
              })}
            </List>
        </> : null }
    </Box>
</>)
}
