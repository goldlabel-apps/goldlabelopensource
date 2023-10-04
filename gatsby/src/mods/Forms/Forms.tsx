import * as React from 'react'
import {
  Alert,
  Box,
  Container,
  CardActions,
} from "@mui/material"
import {
  usePwaSelect,
  selectPWA,
} from "../../goldlabel"
import {SwitchInput} from "../Forms"

export default function Forms (props: any) {  
  const pwa = usePwaSelect(selectPWA)
  const {listings} = pwa
  const {addListing} = listings
  let valid: boolean = false
  let validation: any = null
  
  if(addListing){
    validation = addListing.validation
    if (addListing.validation){
      valid = addListing.validation.valid
    } 
  }
  
  const {form} = props
  const {
    onUpdate,
    onSave,
    onCancel,
    fields,
    // actions,
  } = form

  return <>
          <Container>    
            {fields.map((field: any, i: number) => {
              const {
                id,
                defaultValue,
              } = field
              let value = ""
              if (id && addListing){
                value = addListing[id]
              }
              return <SwitchInput 
                        key={`f_${i}`}
                        defaultValue={defaultValue || ""}
                        value={value || ""}
                        field={field}
                        onSave={onSave}
                        onUpdate={onUpdate}
                        onCancel={onCancel}
                        validation={validation}
                      />
            })} 
          </Container>
        </>
}
/*
<pre>{JSON.stringify(addListing, null, 2)}</pre>
*/