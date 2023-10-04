import React from "react"
import {
  CardActions,
} from "@mui/material"
import {
  usePwaSelect,
  selectPWA, 
} from "../../../goldlabel"
import {SwitchInput} from "../../Forms"

export function FormActions(props: any) {
  const pwa = usePwaSelect(selectPWA)
  const {listings} = pwa
  const {addListing} = listings
  let valid: boolean = false
  let validation: any = null
  const {form} = props
  const {actions} = form
  const {
    onUpdate,
    onSave,
    onCancel,
  } = form
  if(addListing){
    validation = addListing.validation
    if (addListing.validation){
      valid = addListing.validation.valid
    } 
  }
  return (<>
          <CardActions sx={{}}>
          {actions.map((action: any, i: number) => {
              const {
                id,
                hideOnInvalid,
              } = action
              if (hideOnInvalid && !valid) return null 
              return <SwitchInput 
                        key={`f_${i}`}
                        id={id}
                        action={action}
                        onSave={onSave}
                        onUpdate={onUpdate}
                        onCancel={onCancel}
                        validation={null}
                      />
            })}
          </CardActions>
        </>
  )
}

/* 
<pre>{JSON.stringify(props, null, 2)}</pre> 
*/
