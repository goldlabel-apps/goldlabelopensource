import * as React from "react"
import {
  CardHeader,
  CardActionArea,
  Container,
  Grid,
} from "@mui/material"
import {
  AppShell,
  Image,
  useAllMarkdown,
  Font,
} from "../goldlabel"
import {getTranslation} from "../mods/Lingua"
export default function SitemapPage(data: any) {
  const {location} = data
  const locale = "en"
  const allMarkdown = useAllMarkdown()

  return <AppShell appData={{...data}} type="sitemap">
            <Container maxWidth="md">
              
            <Grid id="allDocs" container spacing={1}>
              {allMarkdown.map((item: any, i: number) => {
                
                const {frontmatter} = item
                const {
                  title,
                  description,
                  slug,
                  image,
                } = frontmatter

                let linguaTitle = title
                if (title === "<HOME>") linguaTitle = getTranslation("HOME", locale)

                return <Grid item xs={12} md={4}  key={`doc_${i}`}>
                        <CardActionArea 
                          onClick={() => {
                            window.open(slug, "_self")
                          }}>
                          <CardHeader 
                            avatar={<Image options={{
                              src: image,
                              width: 50,
                              height: 50,
                              alt: frontmatter.description,
                            }}
                          />}
                            title={<Font>{linguaTitle}</Font>}
                            // subheader={<Font variant="small">{description}</Font>}
                          />
                        </CardActionArea>
                      </Grid>                  
                  })}
                </Grid>
              </Container>
            </AppShell>
}
