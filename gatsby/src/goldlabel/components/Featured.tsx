import * as React from "react"
import {
  useTheme,
  useMediaQuery,
  Box,
  CardHeader,
  Alert,
  AlertTitle,
  CardActionArea,
  Grid,
  IconButton,
} from "@mui/material"
import {
  Font,
  Icon,
  Image,
  useFeatured,
  usePwaDispatch,
  navigate,
} from "../../"

export default function Featured() {
  
  const dispatch = usePwaDispatch()
  const theme = useTheme()
  const isBig = useMediaQuery(theme.breakpoints.up("md"))
  const featured = useFeatured()
  if (!featured.length) return null
  let max: number = 1
  if (isBig) max = 9
  
  return (<>  
  <Grid container spacing={1}>
    {featured.map((item: any, i: number) => {
      const {
        frontmatter,
      } = item
      const {
        title,
        // description,
        slug,
        icon,
      } = frontmatter
      if (i > max-1) return null
      if (isBig && !frontmatter) console.log("isBig", isBig)

      return <Grid item xs={12} md={4} key={`featuredItem_${i}`}>
                  <Box sx={{}}>
                  <CardActionArea
                    onClick={() => {
                      dispatch(navigate(slug, "_self"))
                    }}>
                      <Alert 
                        severity={"success"}
                        iconMapping={{
                          success: <Box sx={{mt:1.5}}>
                                    <Icon icon={icon} />
                                  </Box>
                        }}
                      >
                        <AlertTitle>
                          <Box sx={{}}>
                            <Font>{title}</Font>
                          </Box>
                        </AlertTitle>
                          {/* <Font variant="small">{description}</Font> */}
                        </Alert>                    
                  </CardActionArea>
                  </Box>
              </Grid>
        })}
      </Grid>
    </>
  )
}

/*

<pre>{JSON.stringify(featured, null, 2)}</pre>




*/