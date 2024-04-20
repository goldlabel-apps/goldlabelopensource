import * as React from "react"
import {
  Avatar,
  IconButton,
  Popover,
} from "@mui/material"
import {
  usePwaDispatch,
  usePwaSelect,
  selectFingerprint,
} from "../../../goldlabel"
import { avatars } from "../../../goldlabel/state/constants/avatars"
import { update } from "../actions/update"

export default function AvatarEditor() {
  const dispatch = usePwaDispatch()
  const fingerprint = usePwaSelect(selectFingerprint)
  const {subscribed} = fingerprint
  let avatar = ""
  if (subscribed) {
    avatar = subscribed.avatar
  }
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)

  const onChangeAvatar = (avatar: string) => {
    dispatch(update("avatar", avatar))
    setAnchorEl(null)
  }

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  const open = Boolean(anchorEl)
  const id = open ? 'avatar-popover' : undefined

  return <>
    <div>
      <IconButton 
        aria-describedby={id}
        onClick={handleClick}>
        <Avatar src={avatar} />
      </IconButton>
      
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        {avatars.map((item: any, i: number) => {
          const {
            src,
            title,
          } = item

          return <IconButton
                    key={`avatar_${i}`}
                    onClick={() => {
                      onChangeAvatar(src)
                    }}
                    sx={{
                      m:1,
                    }}>
                  <Avatar src={src} alt={title} />
                </IconButton>
        })}
      </Popover>
    </div>
  </>
}
