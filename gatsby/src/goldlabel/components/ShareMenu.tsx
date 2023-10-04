import * as React from "react"
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
} from 'react-share';
import {
  useTheme,
  IconButton,
  Box,
  Menu,
  MenuItem,
} from "@mui/material"
import {
  Font,
  Icon,
  usePwaSelect,
  selectFrontmatter,
} from "../../goldlabel"

export default function ShareMenu() {
  const frontmatter = usePwaSelect(selectFrontmatter)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const theme = useTheme()
  const open = Boolean(anchorEl)
  let title = "Listingslab"
  let iconColor = theme.palette.primary.main
  let shareUrl: string = "https://listingslab.com"
  if (window.location) shareUrl = window.location.href
  if (frontmatter){
    title = `${frontmatter.title}. ${frontmatter.description}`
  }

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <IconButton
        color="primary"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Icon icon="share" />
      </IconButton>
      <Menu
        id="share-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "share-button",
        }}>
        <MenuItem onClick={handleClose}>
          <FacebookShareButton 
            url={shareUrl}
            quote={title}>
              <Box sx={{display: "flex"}}>
                <Box>
                  <FacebookIcon
                    iconFillColor={iconColor}
                    bgStyle={{ fill: "none" }}
                    size={40}
                    round
                  />
                </Box>
                <Box sx={{m:1.25}}>
                  <Font variant={"small"}>
                    Facebook
                  </Font>
                </Box>
              </Box>
          </FacebookShareButton>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <TwitterShareButton 
            title={title}
            url={shareUrl}>
            <Box sx={{display: "flex"}}>
                <Box>
                  <TwitterIcon
                    iconFillColor={iconColor}
                    bgStyle={{ fill: "none" }}
                    size={40}
                    round
                  />
                </Box>
                <Box sx={{m:1.25}}>
                  <Font variant={"small"}>
                    Twitter
                  </Font>
                </Box>
              </Box>
          </TwitterShareButton>
        </MenuItem>
      </Menu>
    </>
  )
}
