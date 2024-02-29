import React from "react"
import {
  Box,
//   Tooltip,
//   IconButton,
} from "@mui/material"
import {
  usePwaSelect,
  selectFrontmatter,
} from "../../../goldlabel"

export function Keywords() {
  const frontmatter = usePwaSelect(selectFrontmatter)
  // console.log("frontmatter", frontmatter)
  const {keywords} = frontmatter
  if (!keywords) return null
  const keywordArr = keywords.split(", ")

  return (<>
          <Box sx={{ display: "flex"}}>
            <Box sx={{flexGrow:1}}/>
            <Box sx={{m:0}}>
            {/* <pre>
              keywordArr:{JSON.stringify(keywordArr, null, 2)}
            </pre> */}
            </Box>
            <Box sx={{flexGrow:1}}/>
          </Box>
        </>
  )
}
