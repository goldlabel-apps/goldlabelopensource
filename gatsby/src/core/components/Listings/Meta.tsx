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
  ShareMenu,
} from "../../../core"

export default function Meta(props: any) {
  const frontmatter = usePwaSelect(selectFrontmatter)
  const dispatch = usePwaDispatch()
  const siteMetadata = useSiteMetadata()
  // console.log("siteMeta", siteMetadata)
  if (!frontmatter) return null
  let facebook: any = siteMetadata.siteFacebook
  if(frontmatter.facebook) facebook = frontmatter.facebook

  let website: any = null
  if(frontmatter.website) website = frontmatter.website
  
  let phone: any = null
  if(frontmatter.phone) phone = frontmatter.phone

  let twitter: any = null
  if(frontmatter.twitter) twitter = frontmatter.twitter

  return <Box sx={{ display: "flex" }}>
          <Box sx={{ flexGrow:1}} />
          
          {facebook ? <IconButton
            color="primary"
            onClick={() => {
              dispatch(navigate(facebook, "_blank"))
            }}>
            <Icon icon="facebook" />
          </IconButton> : null }
          
          
          {website ? <IconButton
            color="primary"
            onClick={() => {
              dispatch(navigate(website, "_blank"))
            }}>
            <Icon icon="web" />
          </IconButton> : null}

          {phone ? <IconButton
            color="primary"
            onClick={() => {
              dispatch(navigate(`tel:${phone}`, "_blank"))
            }}>
            <Icon icon="whatsapp" />
          </IconButton> : null}
          

          {twitter ? <IconButton
            color="primary"
            onClick={() => {
              console.log("twitter")
              dispatch(navigate(`https://twitter.com/${twitter}`, "_blank"))
              
            }}>
            <Icon icon="twitter" />
          </IconButton> : null }
          
          <ShareMenu />

        </Box>
}

