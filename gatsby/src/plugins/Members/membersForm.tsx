import {store} from "../../core"
import {updateNewDoc} from "../Backoffice"
const title: string = "Add & Edit"
const description = "Paid or unpaid, everyone with an account is a member"
const icon: string = "members"

export const onSave = () => {
  console.log("Save member")
  return true
}

export const onUpdate = (
  key: string,
  value: any,
) => {
  store.dispatch(updateNewDoc(key, value))
  return true
}

export const membersForm = 
{
  onSave,
  onUpdate,
  title,
  description,
  icon,
  fields: [
    {
      id:"members_email",
      label: "Email",
      required: true,
      type: "InputString",
    },
    {
      id:"members_facebook",
      label: "Facebook",
      type: "InputString",
    },
  ],
  actions: [
    {
      id:"members_save",
      label: "Save",
      icon: "save",
      type: "FormButton",
      variant: "outlined",
      hideOnInvalid: false,
      onClick: onSave,
    } 
  ]
}
