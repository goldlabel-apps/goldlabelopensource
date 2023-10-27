import * as React from 'react'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import ListItemText from '@mui/material/ListItemText'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import Checkbox from '@mui/material/Checkbox'
import {
  Font,
} from "../../../core"

// const ITEM_HEIGHT = 48
// const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      // maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 225,
    },
  },
}

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
]

type MultiSelectShape = {
  id: string
  label: string
  list: Array<any>
  
}

export default function MultiSelect({ 
    list,
    label,
  }: MultiSelectShape) {

  const [host, setHost] = React.useState<string[]>([])

  const handleChange = (event: SelectChangeEvent<typeof host>) => {
    const {
      target: { value },
    } = event
    setHost(typeof value === 'string' ? value.split(',') : value)
  }

  return (
    <div>
      <FormControl sx={{ 
          m: 1, 
          minWidth: 200, 
      }}>
        <InputLabel id="multiSelect-label">
          {label}
        </InputLabel>

        <Select
          labelId="multiSelect-label"
          id="multiSelect"
          multiple
          value={host}
          onChange={handleChange}
          input={<OutlinedInput label={label} />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}>
          {list.map((item: any, i: number) => {
            // console.log("item", item)
            const {
              fbId,
              label,
            } = item
            return (<MenuItem key={`host_${i}`} value={fbId}>
                      <Checkbox checked={host.indexOf(label) > -1} />
                      <ListItemText primary={<Font>{label}</Font>} />
                    </MenuItem>)    
          })}
        </Select>
      </FormControl>
    </div>
  )
}
