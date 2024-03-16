import React from "react"
// import moment from "moment"
import {
  Card,
  CardHeader,
  Box,
} from "@mui/material"
import {
  usePwaSelect,
  selectPWA,
  Icon,
  Font,
} from "../../../"

export default function Param(props: any) {
  const {slug, hour} = props
  const pwa = usePwaSelect(selectPWA) 
  const {weathermap} = pwa
  const {paramMeta} = weathermap
  const meta = paramMeta[slug]
  if (!meta) return null
  const {
    title,
    //description,
    suffix,
    icon,
    visible,
  } = meta
  if(!hour[slug][0]) return null
  const value = hour[slug][0].value
  if (!visible) return null
  return (<Card sx={{
            background: "rgba(0,0,0,0.3)"
          }}>
            <CardHeader 
              avatar={<Icon icon={icon} />}
              title={<Font variant="title">
                      {title}
                    </Font>}
              // subheader={<Font variant="subheader">
              //        {description}
              //      </Font>}
              action={<Box sx={{m:1.5}}>
                        <Font variant="giant">
                          {value} {suffix}
                        </Font>
                      </Box>}
            />
        </Card>)
}

/* 
<pre>{JSON.stringify(value, null, 2)}</pre> 
*/