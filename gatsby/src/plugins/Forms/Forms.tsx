import * as React from 'react'
import {SwitchInput} from "../Forms"
import {
  usePwaSelect,
  selectBackoffice,  
} from "../../core"

export default function Forms ({form}: any) {  
  const backoffice = usePwaSelect(selectBackoffice)
  const {newDoc} = backoffice
  // let valid: boolean = false
  let validation: any = null
  const {
    onUpdate,
    onSave,
    onCancel,
    fields,
    actions,
  } = form

  

  return <>  
            {fields.map((field: any, i: number) => {
              const {
                id,
                defaultValue,
              } = field
              let value = ""
              if (id && newDoc){
                value = newDoc[id]
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
        </>
}
/*
<pre>{JSON.stringify(addListing, null, 2)}</pre>
*/