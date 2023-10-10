import { getAuth } from "firebase/auth"
import { 
  setPwaKey,
  notify,
  store,
} from "../../../goldlabel"

export const firebaseSignout = (): any =>
  async (dispatch: any) => {
    try {
      const {auth} = store.getState()
      const fBauth = getAuth()
      fBauth.signOut()
        .then (() => {
          dispatch(setPwaKey({ key: "auth", value: {
            ...auth,
            user: null,
          }}))
          dispatch(notify("success", "Goodbye"))
        })
        .catch((error) => {
          dispatch(notify("info", error))
        })
    } catch (error: any) {
      console.log("Action error: firebaseSignout", error)
    }
}
