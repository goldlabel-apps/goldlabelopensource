import * as React from 'react'
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  EmailShareButton,
  EmailIcon,
} from 'react-share';
import {
  Box,
  IconButton,
  Collapse,
  useTheme,
} from "@mui/material"
import {
  Icon,
  usePwaDispatch,
  usePwaSelect,
  useSiteMetadata,
  selectPWA,
  setShare,
} from "../../"

export default function Share(props: any) {
  const {title} = props
  const meta = useSiteMetadata()
  const theme = useTheme()
  const iconColor = theme.palette.primary.main
  const {siteUrl} = meta
  let shareUrl = siteUrl
  const dispatch = usePwaDispatch()
  const pwa = usePwaSelect(selectPWA)
  const {sharing} = pwa
  if (window.location) shareUrl = window.location.href

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    dispatch (setShare(!sharing))
  }
  
  return (
    <Box sx={{ display: "flex"}}>
      {/* {shareUrl} */}
      
      <Collapse in={sharing} timeout="auto" unmountOnExit>
        <Box sx={{mt: 0.25}}>
          
          <FacebookShareButton 
            url={shareUrl}
            quote={title}>
            <FacebookIcon
              bgStyle={{ fill: "none" }}
              iconFillColor={iconColor}
              size={40}
              round
            />
          </FacebookShareButton>

          <TwitterShareButton 
            title={title}
            url={shareUrl}
          >
            <TwitterIcon
              bgStyle={{ fill: "none" }}
              iconFillColor={iconColor}
              size={40}
              round
            />
          </TwitterShareButton>

          <LinkedinShareButton 
            url={shareUrl}
          >
            <LinkedinIcon
              bgStyle={{ fill: "none" }}
              iconFillColor={iconColor}
              size={40}
              round
            />
          </LinkedinShareButton>

          <EmailShareButton
            url={shareUrl}
            subject={title}
            body={title}
          >
            <EmailIcon
              bgStyle={{ fill: "none" }}
              iconFillColor={iconColor}
              size={40}
              round
            />
          </EmailShareButton>


        </Box>
      </Collapse>
      <Box>
        <IconButton
          color="primary"
          sx={{m:0.5}}
          id="btnShare"
          onClick={handleClick}>
          <Icon icon={"share"} />
        </IconButton>
      </Box>
    </Box>
  );
}

/*
<pre>{JSON.stringify(href, null, 2)}</pre>
*/