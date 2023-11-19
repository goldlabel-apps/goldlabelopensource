import { getAuth } from "firebase/auth"
import { 
  setPwaKey,
  notify,
  store,
} from "../../../core"

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
          dispatch(notify(
            "Auth 200",
            "success", 
            "Goodbye sir"
          ))
        })
        .catch((e) => {
          dispatch(notify(
            "FIREBASE 103",
            "error", 
            `firebaseSignout ${e.toString()}`
          ))
        })
    } catch (e: any) {
      dispatch(notify(
        "FIREBASE 102",
        "error", 
        `firebaseSignout ${e.toString()}`
      ))
    }
}
