import React from "react"
import {
  Box,
} from "@mui/material"
import {
  Icon,
} from "../../../goldlabel"

export function Iconify(props: any) {
  const {needle} = props
  if (!needle) return null
  let iconSlug: any = null
  if (needle.includes("Chrome")) iconSlug = "chrome"
  if (needle.includes("Chromium")) iconSlug = "chrome"
  if (needle.includes("Facebook")) iconSlug = "facebook"
  if (needle.includes("Opera")) iconSlug = "web"
  if (needle.includes("Safari")) iconSlug = "safari"
  if (needle.includes("Samsung")) iconSlug = "web"
  if (needle.includes("Firefox")) iconSlug = "firefox"
  if (needle.includes("Linux")) iconSlug = "linux"
  if (needle.includes("iOS")) iconSlug = "mac"
  if (needle.includes("Mac")) iconSlug = "mac"
  if (needle.includes("Apple")) iconSlug = "mac"
  if (needle.includes("Windows")) iconSlug = "windows"
  if (needle.includes("Android")) iconSlug = "android"
  if (needle.includes("Macintosh")) iconSlug = "desktopmac"
  if (needle.includes("iPhone")) iconSlug = "iphone"  
  if (!iconSlug) return null
  return <Box sx={{m:1}}>
          <Icon icon={iconSlug} color="primary"/>
        </Box>
}
