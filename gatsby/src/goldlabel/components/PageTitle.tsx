import * as React from "react"
import {
  Box,
  CardHeader,
} from "@mui/material"
import {
  Font,
  Icon,
  usePwaSelect,
  selectPWA,
} from "../../"
import {
  getTranslation,
} from '../../translations'

export default function PageTitle(props: any) {
  const {
    title,
    description,
    icon,
  } = props  
  
  return (<>
          <CardHeader 
              avatar={ icon ? <Box sx={{pt:0.1}}>
                        <Icon icon={icon} color="primary" />
                      </Box> : null}
              title={ title ? <Font variant="title">
                      {title} 
                    </Font> : null}
              subheader={description ? <Font variant="small">
                      {description} 
                    </Font> : null}
              action={icon ? <Icon icon={icon}/> : null}
          />
    </>
  )
}
