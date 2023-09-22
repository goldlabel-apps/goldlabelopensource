import * as React from "react"
import {
  Box,
  Alert,
  CardActionArea,
  AlertColor,
} from "@mui/material"
import {
  Font,
  Icon,
} from "../../goldlabel"

export default function CTA(props: any) {
  const {options} = props
  let ctaSeverity: AlertColor = "success"
  let ctaIcon: string = "star"
  let ctaLabel: string = "CTA Label"
  let ctaCallback = () => {}
  const {
    label,
    icon,
    severity,
    callback,
  } = options
  if (label) ctaLabel = label
  if (icon) ctaIcon = icon
  if (severity) ctaSeverity = severity
  if (callback) ctaCallback = callback

  return (<><CardActionArea
                sx={{}}
                onClick={ctaCallback}>
                <Alert
                  severity={ctaSeverity}
                  iconMapping={{
                    success: <Box sx={{}}>
                              <Icon icon={ctaIcon} />
                            </Box>,
                  }}>
                    <Box sx={{m:0.33}}>
                      <Font>
                        {ctaLabel}
                      </Font>
                    </Box>
                  </Alert>
              </CardActionArea>
    </>
  )
}
