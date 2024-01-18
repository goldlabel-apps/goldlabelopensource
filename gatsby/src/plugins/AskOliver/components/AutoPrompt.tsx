import * as React from "react"
import {
  Grid,
  ListItemIcon,
  TextField,
  Autocomplete,
  ListItem,
  ListItemText,
} from "@mui/material"
import {
  Font,
  Icon,
  usePwaSelect,
  usePwaDispatch,
  selectAskOliver,
} from "../../../core"
import {
  setAskOliverKey,
} from "../"

export default function AutoPrompt() {
  const dispatch = usePwaDispatch()
  const askoliver = usePwaSelect(selectAskOliver)
  const {
    list, 
    prompt,
  } = askoliver

  return (
    <Autocomplete
      id="ask-oliver-prompt"
      freeSolo
      fullWidth
      value={{data: {prompt: prompt || ""}}}
      options={list}
      onChange={(e: React.MouseEvent, newValue: any) => {
        if (!newValue) return
        const {data} = newValue
        const {prompt} = data
        // dispatch(setAskOliverKey("prompt", prompt))
      }}
      getOptionLabel={(option: any) => {
        if (!option.data) return <></>
        return option.data.prompt
      }}
      renderOption={(props, option, i) => {
        const {data} = option
        const {prompt} = data
        return <ListItem 
                  key={`prompt_${i.index}`} 
                  component="li" 
                  {...props}>
                    <ListItemIcon>
                      <Icon icon="right" />
                    </ListItemIcon>
                    <ListItemText 
                      primary={<Font variant="small">
                                {prompt}
                              </Font>}
                    />
              </ListItem>
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          onChange={(e) => {
            // dispatch(setAskOliverKey("prompt", e.target.value))
          }}
          label={<Font variant="small">
                    Ask Oliver
                  </Font>}
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password',
          }}
        />
      )}
    />
  )
}
