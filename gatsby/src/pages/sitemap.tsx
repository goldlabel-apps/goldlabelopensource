import * as React from "react"
import {
  CardHeader,
  CardActionArea,
  Alert,
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

  return <AppShell appData={{...data}} type="404">
            <Container maxWidth="lg">
              <Alert
                sx={{m:2}}
                severity="success">
                  <Font>Sitemap</Font>
            </Alert>

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

                return <Grid item xs={12} md={6} lg={4} key={`doc_${i}`}>
                        <CardActionArea 
                                  onClick={() => {
                                    window.open(slug, "_self")
                                  }}>
                                  <CardHeader 
                                    avatar={<Image options={{
                                      src: image,
                                      width: 75,
                                      height: 75,
                                      alt: frontmatter.description,
                                    }}
                                  />}
                                    title={<Font>{linguaTitle}</Font>}
                                    subheader={<Font variant="small">{description}</Font>}
                                  />
                                </CardActionArea>
                      </Grid>                  
                  })}
                </Grid>
              </Container>
            </AppShell>
}
