import * as React from "react"
import {
  ButtonBase,
  Box,
  CardHeader,
} from "@mui/material"
import {
  Icon,
  Font,
  Image,
  usePwaDispatch,
  navigate,
} from "../../../goldlabel"

export default function ContentCard({content}) {
  const dispatch = usePwaDispatch()
  const {frontmatter} = content
  // console.log("frontmatter", frontmatter)
  const {
    title,
    image,
    slug,
    icon,
    description,
  } = frontmatter

  return <ButtonBase 
          sx={{display: "block"}}
          onClick={() => {
            dispatch(navigate(slug, "_self"))
          }}>
            <Image 
              height={100}
              src={image}
              alt={description}
            />
            <CardHeader 
              avatar={<Icon icon={icon} color={"primary"}/>}
              title={<Font>{title}</Font>}
            />
        </ButtonBase>
}
