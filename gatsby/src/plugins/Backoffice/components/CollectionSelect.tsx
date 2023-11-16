import * as React from "react"
import {
  CardHeader,
  List,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  IconButton,
} from "@mui/material"
import {
  Icon,
  Font,
  usePwaDispatch,
  usePwaSelect,
  selectBackoffice,
} from "../../../core"
import {setBackofficeKey} from "../../Backoffice"
const collectionList = [
  {
    label: "Pingpong",
    collection: "pingpong",
    icon: "pingpong",
  },
  {
    label: "Members",
    collection: "members",
    icon: "members",
  },
]

export default function CollectionSelect() {
  const dispatch = usePwaDispatch()
  const backoffice = usePwaSelect(selectBackoffice)
  return <>
          <CardHeader 
            title={<Font variant="title">Backoffice</Font>}
            avatar={<>
              <IconButton 
                sx={{ml:-1}}
                color="primary"
                aria-label="deslect collection"
                onClick={(e: React.MouseEvent) => {
                  e.preventDefault()
                  dispatch(setBackofficeKey("collection", null))
                }}>
                <Icon icon="backoffice" />
              </IconButton>
            </>}
          />
           <List>
            {collectionList.map((item: any, i: number) => {
              const {
                label,
                icon,
                collection,
              } = item
              return <ListItemButton
                        key={`collection_${i}`}
                        onClick={(e: React.MouseEvent) => {
                          e.preventDefault()
                          dispatch(setBackofficeKey("collection", collection))
                        }}>
                        <ListItemIcon>
                          <Icon icon={icon} color="primary"/>
                        </ListItemIcon>
                        <ListItemText
                          primary={<Font>
                            {label}
                          </Font>}
                        />
                      </ListItemButton>
            })}
          </List>          
          </>
}
