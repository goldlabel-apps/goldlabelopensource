import { getAuth } from "firebase/auth"
import { 
  setPwaKey,
  notify,
  toggleAccount,
} from "../../../../"

export const firebaseSignout = (): any =>
  async (dispatch: any) => {
    try {
      console.log("firebaseSignout")
      
      const auth = getAuth()
      auth.signOut()
        .then (() => {
          dispatch(setPwaKey({ key: "user", value: null}))
          dispatch(notify("success", "Goodbye"))
          dispatch(toggleAccount(false))
        })
        .catch((error) => {
          dispatch(notify("info", error))
        })
    } catch (error: any) {
      console.log("Action error: firebaseSignout", error)
    }
}
