import * as React from "react"
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material"
import {
  Icon,
  Font,
  usePwaDispatch,
  usePwaSelect,
  selectPWA,
  toggleSettings,
  selectLocale,
  navigate,
} from "../../goldlabel"
import {hideDiv} from "../packages/Flash"
import {firebaseSignout} from "../packages/Auth"
import { getTranslation } from "../../translations"

export default function AuthedNav() {
  const dispatch = usePwaDispatch()
  const pwa = usePwaSelect(selectPWA)
  const locale = usePwaSelect(selectLocale)
  const {frontmatter} = pwa
  let homeBtn = true
  if (frontmatter) homeBtn = false
  return (<>
            <ListItemButton
              onClick={() => {
                dispatch(toggleSettings(false))
                dispatch(hideDiv("listings"))
                dispatch(navigate("/add", "_self"))
              }}>
              <ListItemIcon>
                <Icon icon="add" color="primary"/>
              </ListItemIcon>
              <ListItemText
                primary={<Font variant="small">
                            {getTranslation("ADD_LISTING", locale)}
                          </Font>}
              />
            </ListItemButton>
            
            <ListItemButton
              onClick={() => {
                dispatch(toggleSettings(false))
                dispatch(firebaseSignout())
              }}>
              <ListItemIcon>
                <Icon icon="exit" color="primary"/>
              </ListItemIcon>
              <ListItemText
                primary={<Font variant="small">
                          {getTranslation("SIGNOUT", locale)}
                        </Font>}
              />
            </ListItemButton>
          </>
  )
}
