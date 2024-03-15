import {
  FooterLink,
  FooterColumn,
} from "../../state/constants/footer"
import * as React from "react"
import {
  Box,
  Container,
  Grid,
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from "@mui/material"
import {
  Icon,
  Font,
  usePwaSelect,
  usePwaDispatch,
  navigate,
  selectCore,
} from "../../"

export default function FeaturedFooter() {
  const dispatch = usePwaDispatch()
  const core = usePwaSelect(selectCore)
  if (!core.footer) return null
  const columns = core.footer

  return (
    <>
      <Container maxWidth="md" component="footer">

        <Grid container spacing={4} justifyContent="space-evenly">
          {columns.map((item: FooterColumn, i: number) => {
            const {
              title,
              textLines,
              links,
            } = item
            return <Grid key={`column_${i}`} item xs={12} sm={6} md={3}>
                      <Font color="primary">
                        {title}
                      </Font>
                      {textLines ? <>
                        <Box sx={{my:1.5}}>
                          {textLines.map((line: string, i: number) => {
                            return <Box key={`textLine_${i}`}
                                    sx={{mt:1}}
                                    >
                                      <Font variant="small">
                                        {line}
                                      </Font>
                                    </Box>
                          })}
                        </Box>
                      </> : null }

                      {links ? <>
                        <List dense>
                          {links.map((link: FooterLink, i:number) => {
                            const {
                              label,
                              path,
                              target,
                              icon,
                            } = link
                            return <ListItemButton 
                                    key={`footer_link_${i}`} 
                                    sx={{p:0}}
                                    onClick={() => {
                                      // console.log("path", path)
                                      dispatch(navigate(path, target ? target : "_self"))
                                    }}>
                                      {icon ? <>
                                      <ListItemIcon>
                                        <Icon icon={icon} color="primary"/>
                                      </ListItemIcon>
                                    </> : null }
                                    <ListItemText 
                                      sx={{}}
                                      primary={<Font variant="small">
                                                {label}
                                              </Font>}
                                    />
                                    
                                  </ListItemButton>
                          })}
                        </List>
                      </> : null }

                    </Grid>
          })}
        </Grid>
      </Container>
    </>
  )
}
