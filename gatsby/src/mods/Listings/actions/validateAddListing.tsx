import { 
    notify,
    store,
    setPwaKey,
} from "../../../../"


export const validateEmail = (email) => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
} 

export const validateAddListing = (): any =>
    async (dispatch: any) => {
      try {
        const validation: any = {
          valid: true,
          errors: []
        }
        const {listings} = store.getState()
        const {addListing} = listings
        
        let businessName = addListing.add_listing_name
        let contactEmail = addListing.add_listing_email

        if(!businessName && businessName === "") {
          validation.errors.push({
            id: "add_listing_name",
            severity: "error",
            message: "Business name missing",
          })
        }

        if(businessName.length < 3) {
          validation.errors.push({
            id: "add_listing_name",
            message: "Business name too short",
          })
        }

        
        if(!validateEmail(contactEmail)) {
          validation.valid = false
          validation.errors.push({
            id: "add_listing_email",
            message: "email invalid",
          })
        }

        if (validation.errors.length) validation.valid = false
        
        dispatch(setPwaKey({ key: "listings", value: {
          ...listings,
          "addListing": {
            ...addListing,
            validation,
          },
        }}))
      } catch (error: any) {
        dispatch(notify("error", error))
      }
  }