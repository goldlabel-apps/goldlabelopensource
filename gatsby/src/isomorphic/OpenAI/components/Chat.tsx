import * as React from "react"
import Markdown from 'react-markdown'
import moment from "moment"
import {
  Box,
  Avatar,
  CardHeader,
  CardActionArea,
} from "@mui/material"
import {
  Font,
  usePwaSelect,
  selectUser,
} from "../../../goldlabel"

export default function Chat(props: any) {
  const {data} = props
  const user = usePwaSelect(selectUser)
  const {
    updated,
    avatar,
    prompt,
    name,
  } = data
  return <><CardActionArea
          disabled={!user}
          >
            <CardHeader 
                avatar={<Avatar src={avatar} />}
                
                title={<Font>
                        {prompt}
                    </Font>}

                subheader={<Font variant="small">
                 {name} asked {moment(updated).fromNow()}
                </Font>}
            />
          </CardActionArea>
            <Box sx={{mx:2}}>
              <Font variant="small">
                <Markdown>
                  {data.completion.choices[0].message.content}  
                </Markdown>
              </Font>
            </Box>
        </>
}

/*
<Font></Font>
                <Font>
                  
                </Font>
*/