import * as React from "react"
import {
  CardHeader,
  List,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material"
import {
  Icon,
  Font,
  usePwaDispatch,
  usePwaSelect,
  selectBackoffice,
} from "../../../core"
import {setBackofficeKey} from "../../Backoffice"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
  {
    label: "Spider Bites",
    collection: "spiders",
    icon: "google",
  },
]

export default function CollectionSelect() {
  const dispatch = usePwaDispatch()
  const backoffice = usePwaSelect(selectBackoffice)

  return <>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
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
        </AccordionSummary>
        <AccordionDetails>
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

        </AccordionDetails>
      </Accordion>


          
                    
          </>
}
