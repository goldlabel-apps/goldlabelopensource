import * as React from "react"
import {
  useTheme,
  useMediaQuery,
  Box,
  Grid,
  Alert,
  AlertTitle,
  CardActionArea,
} from "@mui/material"
import {
  Font,
  usePwaDispatch,
  usePwaSelect,
  selectPWA,
  useAllMarkdown,
  usePagesByCategory,
  navigate,
  toggleCategories,
  // Icon,
  Image,
} from "../../../../"
import {fadeDiv} from "../../../packages/Flash"

export default function SubPages() {
  const dispatch = usePwaDispatch()
  let showFeatured: boolean = false
  let cat = "all"
  const allMarkdown = useAllMarkdown()
  const pwa = usePwaSelect(selectPWA)
  const theme = useTheme()
  const isBig = useMediaQuery(theme.breakpoints.up("md"))
  const {
    frontmatter,
  } = pwa
  if (frontmatter) cat = frontmatter.category
  const allSiblings = usePagesByCategory(cat, allMarkdown)
  if (allSiblings.length < 2) showFeatured = true
  
  return (
    <Box sx={{}}>
        
          <Grid container>
            {allSiblings.map((item: any, i: number) => {
                const {
                  title,
                  slug,
                  // icon,
                  image,
                  category,
                  description,
              } = item 
              if(frontmatter.category !== category) return null
              if(frontmatter.slug === slug) return null
              return <Grid item xs={12} md={6} key={`book_${i}`}>
                          <Box sx={{}}>
                            <CardActionArea
                              onClick={() => {
                                if (!isBig) dispatch(toggleCategories(false))
                                dispatch(fadeDiv("listings"))
                                dispatch(navigate(slug, "_self"))
                              }}>
                              <Alert
                                severity={"success"}
                                iconMapping={{
                                  success: <><Image options={{
                                    src: image,
                                    height: 65,
                                    width: 65,
                                    alt: description,
                                  }}
                                /></>
                                }}>
                                  <AlertTitle>
                                    <Font>{title}</Font>
                                  </AlertTitle>
                                  <Font variant="small">{description}</Font>
                              </Alert>                              
                            </CardActionArea>
                          </Box>
                      </Grid>
            })}
          </Grid>
      </Box>
  )
}

/*


iconMapping={{
  success: <Icon icon={icon} />
}}

*/