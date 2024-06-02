import * as React from "react"
import {
  ClickAwayListener,
  Box,
  ButtonBase,
  IconButton,
  FormControl,
  InputLabel,
  FilledInput,
  InputAdornment,
} from "@mui/material"
import {
  Icon,
  Font,
  usePwaDispatch,
  usePwaSelect,
  selectFingerprint,
} from "../../../goldlabel"
import { update } from "../actions/update"

export default function NameEditor() {
  const dispatch = usePwaDispatch()
  const fingerprint = usePwaSelect(selectFingerprint)
  const {subscribed} = fingerprint
  let name = ""
  if (subscribed) {
    name = subscribed.name
  }
  const [editing, setEditing] = React.useState<boolean>(false)
  const [newName, setNewName] = React.useState<string>(name)

  const onEdit = () => {
    setEditing(true)
  }

  const onSave = () => {
    dispatch(update("name", newName))
    setEditing(false)
  }

  const onFinish = () => {
    setEditing(false)
  }

  if (editing){
    return <>
    <ClickAwayListener onClickAway={onFinish}>
        <FormControl sx={{ mr: 2, width: "100%" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-name">
            <Font>
              Name
            </Font>
          </InputLabel>
          <FilledInput
            size="small"
            id="name"
            autoFocus
            defaultValue={newName}
            onChange={(e) => {
              setNewName(e.target.value)
            }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  edge="end"
                  color="primary"
                  aria-label="Change name"
                  onClick={onSave}>
                  <Icon icon="save" />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        </ClickAwayListener>
      </>
  }

  return (
    <ButtonBase
      onClick={onEdit}
    >
      <Font>
        {name}
      </Font>
      <Box sx={{ml:2}}>
        <Icon icon="edit" color="primary" />
      </Box>
      {/* <pre>fingerprint: {JSON.stringify(fingerprint, null, 2)}</pre>  */}
    </ButtonBase>
  );
}
