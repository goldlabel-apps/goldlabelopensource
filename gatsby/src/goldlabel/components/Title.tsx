import * as React from "react"
import {
  CardHeader,
} from "@mui/material"
import {
  Font,
  Share,
} from "../../goldlabel"

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
