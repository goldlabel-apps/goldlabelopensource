import * as React from "react"
import {
  Container,
} from "@mui/material"
import {
  useSiteMetadata,
  usePwaSelect,
  selectFrontmatter,
  selectDisplay,
} from "../../../goldlabel"

export default function Keyword(props: any) {
  const frontmatter = usePwaSelect(selectFrontmatter)
  const display = usePwaSelect(selectDisplay)


  return <>
    <Container maxWidth="md" sx={{
      mb: "50px",    
    }}>
      <div id="topAnchor" />
        KEYWORD
      <div id="bottomAnchor" />
    </Container>
  </>
}
