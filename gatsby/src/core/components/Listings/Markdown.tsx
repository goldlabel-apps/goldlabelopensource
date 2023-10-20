import * as React from "react"
import {
  Box,
} from "@mui/material"
import {
  Font,
} from "../../../core"

export default function Markdown(props: any) {
  const {html} = props
  return <Box sx={{}}>
            <Font>
            <span dangerouslySetInnerHTML={{ __html: html }}/>
            </Font>
        </Box>
}
