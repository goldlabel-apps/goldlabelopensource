import * as React from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import 
  Select, 
  { 
    // SelectChangeEvent
  } from '@mui/material/Select'
import {
  usePwaSelect,
  // selectCreate,
  selectCollections,
  Font,
} from "../../../goldlabel"

export default function SelectOption(props: any) {
  
  // const create = usePwaSelect(selectCreate)
  // const {collection} = create
  const collection = ""
  const collections = usePwaSelect(selectCollections)
  const {
    field,
    onSelect,
  } = props
  const {
    label,
    // options,
  } = field

  return (
    <div>
      <FormControl 
        variant="standard" 
        sx={{ 
          m: 1, 
          minWidth: 250,
        }}>
        <InputLabel id="select-option-label">
          <Font>
            {label}
          </Font>
        </InputLabel>

        <Select
          labelId="select-option-label"
          id="select-option"
          value={collection}
          onChange={onSelect}
          label={label}
        >
          
          {collections.map((item:any, i:number) => {
            const {
              slug,
              title,
            } = item
            return <MenuItem 
                    key={`collection_${i}`}
                    value={slug}>
                    <Font>
                      {title}
                    </Font>
                  </MenuItem>
          })}
          
        </Select>
      </FormControl>
      
    </div>
  )
}
