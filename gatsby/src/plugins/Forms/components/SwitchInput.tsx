import React from "react"
import {
  Alert,
} from "@mui/material"
import {
  Font,
  InputString,
  InputCheckbox,
  FormButton,
  FormIconButton,
} from "../../../core"

export function SwitchInput(props: any) {
  const {
    defaultValue,
    value,
    action,
    field,
    onUpdate,
    onClick,
    validation, 
  } = props
  let inputType = null
  if (action) inputType = action.type
  if (field) inputType = field.type
  
  if (inputType === "InputCheckbox") return <InputCheckbox 
                                              defaultValue={defaultValue}
                                              value={value}
                                              field={field} 
                                              onUpdate={onUpdate}
                                              helperText={"Looks good."}
                                              validation={validation}
                                            /> 

  if (inputType === "InputString") return <InputString 
                                            defaultValue={defaultValue}
                                            value={value}
                                            field={field} 
                                            onUpdate={onUpdate}
                                            helperText={"Looks good."}
                                            validation={validation}
                                          /> 
  if (inputType === "FormButton") return <FormButton 
                                          field={field} 
                                          action={action} 
                                          onClick={onClick} 
                                          validation={validation}
                                        />

  if (inputType === "FormIconButton") return <FormIconButton 
                                            field={field} 
                                            action={action} 
                                            onClick={onClick} 
                                            validation={validation}
                                          />                                     

  return <Alert severity="error">
          <Font>
            inputType "{inputType}" missing
            <pre>
              {JSON.stringify(field, null, 2)}
            </pre>
          </Font>
        </Alert>
}
