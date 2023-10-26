import React from "react"
import {
  Card,
  Box,
  ButtonBase,
  Avatar,
  CardHeader,
} from "@mui/material"
import {
  Icon,
  Font,
  usePwaDispatch,
} from "../../../core"
import {
  uidSelect,
} from "../../Backoffice"

export type TingShape = {
    ting?: any
}

export function TingListItem({ting}: TingShape) {
  const dispatch = usePwaDispatch()
  const {
    browser,
    currentPage,
    countryCode,
    uid,
    device,
  } = ting
  const {title} = currentPage
  
  const {updated, created, host} = ting
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
            <ButtonBase 
              sx={{
                width: "100%",
                display: "block",
                borderBottom: "1px solid #ccc",
              }}
              onClick={(e: React.MouseEvent) => {
                e.preventDefault()
                dispatch(uidSelect(uid))
              }}>
                <Box>
                  
                  <CardHeader 
                    avatar={<>
                              <Box sx={{m:0}}>
                                <Icon icon="blokey" color="primary"/>
                              </Box>
                            </>}
                    title={<Font fixedH={22}>
                            {title}
                          </Font>}
                    subheader={<Font variant="small">{host}</Font>}
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
            </ButtonBase>
          </>
  )
}

/*
<Avatar sx={{width: 24, height: 24, mr:1}} src={`/svg/hosts/${hostSrc}`}/> 
<pre>ting: {JSON.stringify(ting, null, 2)}</pre>
*/