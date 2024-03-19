import * as React from "react"
import moment from "moment"
import {
  Box,
  List,
  ListItemButton,
  ListItemAvatar,
  ListItemText,
  ListSubheader,
  Avatar,
} from "@mui/material"
import {
  Font,
  usePwaSelect,
  selectFingerprint,
} from "../../../goldlabel"

export default function DisplayMessages() {

  const fingerprint = usePwaSelect(selectFingerprint)
  const {messages} = fingerprint

  return <Box sx={{ pb: "50px" }}>
          <List sx={{ mb: 2 }}>
            <ListSubheader>
              <Font variant="title">
                Messages
              </Font>
            </ListSubheader>
            {messages.map(({ time, message, from }, i: number) => {
              const {
                role,
                displayName,
                avatar,
              } = from
              return <Box key={`message_${i}`}>
                <ListItemButton
                  onClick={() => {
                    // console.log("messages click", displayName)
                  }}>

                  {role === "customer" ? <ListItemAvatar >
                    <Avatar alt={displayName} src={avatar} />
                  </ListItemAvatar> : null }
                  
                  <ListItemText
                    primary={<Font>
                                 {moment(time).fromNow()} {displayName} said...
                              </Font>} 
                    secondary={<Font variant="small">
                                {message}
                              </Font>}
                    
                  />

                  {role === "owner" ? <ListItemAvatar>
                    <Avatar alt={displayName} src={avatar} />
                  </ListItemAvatar> : null }

                </ListItemButton>
              </Box>
            })}

          </List>
        </Box>
}
