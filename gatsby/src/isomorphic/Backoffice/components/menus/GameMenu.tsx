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
    resetRedux,
} from "../../../../goldlabel"
import {
  setActiveCollection,
} from "../../../Backoffice"
import {
  hideDiv,
} from "../../../Flash"

export default function GameMenu() {
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
                    dispatch(setActiveCollection(null))
                    dispatch(hideDiv("backoffice"))
                    dispatch(navigate("/backoffice", "_self"))
                  }}>
                  <ListItemIcon>
                    <Icon icon={"dashboard"} color="primary"/>
                  </ListItemIcon>
                  <ListItemText
                    primary={<Font variant="small">
                      {getTranslation("DASHBOARD", locale)}</Font>}
                  />
                </ListItemButton>
              </ListItem>

              {/* <ListItem disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                  onClick={() => {
                    dispatch(setActiveCollection(null))
                    dispatch(hideDiv("backoffice"))
                    dispatch(navigate("/account", "_self"))
                  }}>
                  <ListItemIcon>
                    <Icon icon={"user"} color="primary"/>
                  </ListItemIcon>
                  <ListItemText
                    primary={<Font variant="small">{getTranslation("YOUR_ACCOUNT", locale)}</Font>}
                  />
                </ListItemButton>
              </ListItem> */}

              {collections.map((item: any, i: number) => {
                if (!item) return null
                const {icon, title} = item
                return <ListItem 
                          key={`collection_${i}`}
                          disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                          onClick={() => {
                            dispatch(setActiveCollection(item))
                          }}>
                          <ListItemIcon>
                            <Icon icon={icon} color="primary"/>
                          </ListItemIcon>
                          <ListItemText
                            primary={<Font variant="small">
                                        {title}
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
