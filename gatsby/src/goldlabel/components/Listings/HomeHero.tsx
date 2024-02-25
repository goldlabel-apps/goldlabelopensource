import * as React from "react"
import {
  Box,
  Grid,
} from "@mui/material"
import {
  ContentCard,
  useAllMarkdown,
} from "../../../goldlabel"

export default function HomeHero() {
  const allMarkdown = useAllMarkdown()
  const pageSlugs = ["/work", "/life", "/balance"]
  const content: Array<any> = []
  for (let i=0; i<allMarkdown.length; i++){
    const {frontmatter} = allMarkdown[i]
    const {slug} = frontmatter
    for (let j=0; j<pageSlugs.length; j++){
      if (slug === pageSlugs[j]){
        content.push(allMarkdown[i])
      }
    }
  }
  
  return <Box sx={{}}>
            <Grid container spacing={1}>
              {content.map((item: any, i: number) => {
                return <Grid 
                        key={`content_${i}`}
                        item xs={12} md={4}>
                        <ContentCard content={item}/>
                      </Grid>
              })}
            </Grid>
          </Box>
}
