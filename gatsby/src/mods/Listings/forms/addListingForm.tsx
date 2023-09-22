import {cancelAddListing} from "../actions/cancelAddListing"
import {updateAddListing} from "../actions/updateAddListing"
import {store} from "../../../../"

const title: string = "Add Business"
const description = "Listing your business here is free. Extras are extra."

export const onSave = () => {
  console.log("onSave")
  return true
}

export const onCancel = () => {
  store.dispatch(cancelAddListing())
  return true
}



export const onUpdate = (
  key: string,
  value: any,
) => {
  store.dispatch(updateAddListing(key, value))
  return true
}

export const addListingForm = 
{
  onUpdate,
  onSave,
  onCancel,
  title,
  description,
  fields: [
    {
      autoFocus: true,
      id:"add_listing_name",
      label: "Title",
      required: true,
      type: "InputString",
    },
    {
      id:"add_listing_email",
      label: "Email",
      required: true,
      type: "InputString",
    },
    {
      id:"add_listing_image",
      label: "Image",
      type: "InputString",
      defaultValue: "/jpg/default.jpg",
    },
    {
      id:"add_listing_facebook",
      label: "Facebook",
      type: "InputString",
    },
  ],
  actions: [
    {
      id:"add_listing_clear",
      label: "Clear form",
      icon: "refresh",
      type: "FormIconButton",
      onClick: onCancel,
    }, 
    {
      id:"add_listing_save",
      label: "Save",
      icon: "save",
      type: "FormButton",
      variant: "outlined",
      onClick: onSave,
      hideOnInvalid: true,
    } 
  ]
}
