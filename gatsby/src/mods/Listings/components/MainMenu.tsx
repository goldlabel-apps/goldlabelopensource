import * as React from "react"
import {
  useTheme,
  useMediaQuery,
  Box,
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Collapse,
} from "@mui/material"
import {
  Font,
  Icon,
  usePwaDispatch,
  usePwaSelect,
  selectPWA,
  useAllMarkdown,
  useCategories,
  navigate,
  toggleCategories,
} from "../../../../"
import {fadeDiv} from "../../../packages/Flash"

export default function MainMenu() {
  const dispatch = usePwaDispatch()
  const allMarkdown = useAllMarkdown()
  const allBooks = useCategories(allMarkdown)
  const pwa = usePwaSelect(selectPWA)
  const theme = useTheme()
  const isBig = useMediaQuery(theme.breakpoints.up("md"))
  const {
    categories,
    frontmatter,
  } = pwa
  if (!frontmatter) return null

  return (
    <Box sx={{ display: "block"}}>
        <Collapse in={categories} timeout="auto" unmountOnExit>
          <List>
            {allBooks.map((category: any, i: number) => {
                const {
                  slug,
                  icon,
                  title,
              } = category

              return <Box key={`book_${i}`}>
                        <ListItemButton
                          onClick={() => {
                            if (!isBig) dispatch(toggleCategories(false))
                            dispatch(fadeDiv("listings"))
                            dispatch(navigate(slug, "_self"))
                          }}>
                          <ListItemIcon>
                            <Icon icon={title !== "Home" ? icon : "home"} color="primary"/>
                          </ListItemIcon>
                          <ListItemText 
                            primary={<Font variant="small">
                                      {title}
                                    </Font>}
                          />
                        </ListItemButton>
                      </Box>
            })}
          </List>
        </Collapse>
      </Box>
  );
}
