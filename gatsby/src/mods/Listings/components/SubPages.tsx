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
  Icon,
  usePwaDispatch,
  usePwaSelect,
  selectPWA,
  useAllMarkdown,
  usePagesByCategory,
  navigate,
  toggleCategories,
  Image,
} from "../../../goldlabel"
import {fadeDiv} from "../../Flash"

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
        
          <Grid container sx={{mt:1}}>
            {allSiblings.map((item: any, i: number) => {
                const {
                  title,
                  slug,
                  icon,
                  // image,
                  category,
                  description,
              } = item 
              if(frontmatter.category !== category) return null
              if(frontmatter.slug === slug) return null
              return <Grid item xs={12} md={6} key={`book_${i}`} sx={{p:0.5}}>
                            <CardActionArea
                              onClick={() => {
                                if (!isBig) dispatch(toggleCategories(false))
                                dispatch(fadeDiv("listings"))
                                dispatch(navigate(slug, "_self"))
                              }}>
                              <Alert
                                severity={"success"}
                                iconMapping={{
                                  success: <><Icon icon={icon} /></>
                                }}>
                                  <AlertTitle>
                                    <Font>{title}</Font>
                                  </AlertTitle>
                                  <Font variant="small">{description}</Font>
                              </Alert>                              
                            </CardActionArea>
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