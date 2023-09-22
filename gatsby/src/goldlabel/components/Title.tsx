import * as React from "react"
import {
  Box,
  CardHeader,
} from "@mui/material"
import {
  Font,
  Icon,
  Share,
} from "../../"

export default function Title(props: any) {
  const {frontmatter} = props
  const {
    title,
    description,
    icon,
  } = frontmatter
  let displayTitle = title
  if(title === "Home") displayTitle = description
  return (<>
          <CardHeader 
            title={<Font variant="title">
                    {displayTitle} 
                  </Font>}
            action={<Share />}
          />
    </>
  )
}
