import * as React from 'react'
import {
  Box,
  Chip,
} from "@mui/material"
import {
  Font,
  Icon,
  useAllMarkdown,
  useCategories,
  usePwaDispatch,
  navigate,
} from "../../../core"

// useAllMarkdown
export default function Paid(props: any) {
  const {frontmatter} = props
  const dispatch = usePwaDispatch()
  const allMarkdown = useAllMarkdown()
  const categories = useCategories(allMarkdown)

  const email = "dfasff@efsaf"
  return <Box sx={{}}>

Paid
        </Box>
}


