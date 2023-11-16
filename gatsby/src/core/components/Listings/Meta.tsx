import * as React from 'react'
import {
  Box,
  IconButton,
} from "@mui/material"
import {
  Icon,
  usePwaDispatch,
  useSiteMetadata,
  usePwaSelect,
  selectFrontmatter,
  navigate,
} from "../../../core"

export default function Meta(props: any) {
  const frontmatter = usePwaSelect(selectFrontmatter)
  const dispatch = usePwaDispatch()
  const siteMetadata = useSiteMetadata()
  // console.log("siteMeta", siteMetadata)
  if (!frontmatter) return null
  let facebook: any = null
  let website: any = null  
  let phone: any = null
  let twitter: any = null

  if(frontmatter.facebook) facebook = frontmatter.facebook
  if(frontmatter.website) website = frontmatter.website
  if(frontmatter.twitter) twitter = frontmatter.twitter
  if(frontmatter.phone) phone = frontmatter.phone

  return <Box sx={{ display: "flex" }}>
          <Box sx={{ flexGrow:1}} />
          
          {facebook ? <IconButton
            aria-label="Facebook"
            color="primary"
            onClick={() => {
              dispatch(navigate(facebook, "_blank"))
            }}>
            <Icon icon="facebook" />
          </IconButton> : null }
          
          
          {website ? <IconButton
            aria-label="Web"
            color="primary"
            onClick={() => {
              dispatch(navigate(website, "_blank"))
            }}>
            <Icon icon="web" />
          </IconButton> : null}

          {phone ? <IconButton
            aria-label="WhatsApp"
            color="primary"
            onClick={() => {
              dispatch(navigate(`tel:${phone}`, "_blank"))
            }}>
            <Icon icon="whatsapp" />
          </IconButton> : null}
          
          {twitter ? <IconButton
            aria-label="Twitter"
            color="primary"
            onClick={() => {
              console.log("twitter")
              dispatch(navigate(`https://twitter.com/${twitter}`, "_blank"))
              
            }}>
            <Icon icon="twitter" />
          </IconButton> : null }
        
        </Box>
}

