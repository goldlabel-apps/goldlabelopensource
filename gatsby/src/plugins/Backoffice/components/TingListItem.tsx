import React from "react"
import moment from "moment"
import {
  Box,
  Avatar,
  CardHeader,
} from "@mui/material"
import {
  Font,
  usePwaDispatch,
} from "../../../core"
import {
  uidSelect,
  Device,
} from "../../Backoffice"

export type TingShape = {
    ting?: any
}

export function TingListItem({ting}: TingShape) {
  const dispatch = usePwaDispatch()
  const {
    uid,
    created,
    updated,
    browser,
    // countryName,
    countryCode,
    device,
    os,
    host, 
    slug,
  } = ting
  let lastSeen = updated
  if (!lastSeen) lastSeen = created
  let time = updated
  if (!updated) time = created
  let hostSrc = "opensource.svg"
  if (host === "listingslab.com") hostSrc = "listingslab.svg"
  if (host === "legalweed.world") hostSrc = "legalweed.svg"
  if (host === "growspy.app") hostSrc = "growspy.svg"
  if (host === "divemalta.app") hostSrc = "divemalta.svg"
  if (host === "localhost:8000") hostSrc = "opensource.svg"
  if (host === "goldlabel-open-source.web.app") hostSrc = "opensource.svg"

  return (<>
            <Box 
              sx={{
                width: "100%",
                display: "block",
                border: "1px solid #ccc",
              }}
              // onClick={(e: React.MouseEvent) => {
              //   e.preventDefault()
              //   
              // }}
            >
                <Box>
                  
                  <CardHeader
                    title={<Font fixedH={22}>
                              <a 
                                onClick={(e: React.MouseEvent)=> {
                                  e.preventDefault()
                                  dispatch(uidSelect(uid))
                                }}
                              
                                href={slug}>{host}{slug}</a>
                          </Font>}
                    subheader={<Font variant="small">
                                Last seen {moment(lastSeen).fromNow()}
                              </Font>}
                    action={<>
                    
                      <Avatar 
                        src={`/svg/flags/${countryCode || "none"}.svg`}
                        sx={{
                          m:1, 
                          width: 24, 
                          height: 24,
                        }}/>
                        
                    </>}
                  />
                </Box>
                <Box sx={{m:1}}>
                  <Device 
                    os={os}
                    device={device}
                    browser={browser}
                  />
                </Box>
            </Box>
          </>
  )
}

/*
<Tooltip title={countryName}></Tooltip>
<Avatar sx={{width: 24, height: 24, mr:1}} src={`/svg/hosts/${hostSrc}`}/> 
<pre>ting: {JSON.stringify(ting, null, 2)}</pre>
*/