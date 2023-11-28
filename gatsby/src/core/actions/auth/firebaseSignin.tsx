import { 
  getAuth, 
  signInWithEmailAndPassword,
} from "firebase/auth"
import {
  notify,
  store,
  setPwaKey,
  setCoreKey,
} from "../../../core"

export const firebaseSignin = (email: string, password: string): any =>
  async (dispatch: any) => {
    try {
      const fBauth = getAuth()
      const {auth} = store.getState()
      dispatch(setCoreKey("authing", true))
      signInWithEmailAndPassword(fBauth, email, password)
        .then((user) => {
          dispatch(setPwaKey({ key: "auth", value: {
            ...auth,
            user,
          }}))
          dispatch(setCoreKey("signinOpen", false))
          dispatch(setCoreKey("authing", false))
          dispatch(notify(
            "Auth 200",
            "success", 
            `Hello again sir`
          ))
        })
        .catch((e) => {
          let message = e.message
          if (message.includes("auth/invalid-email")) message = `Invalid Email`
          if (message.includes("auth/user-not-found")) message = `${email} not found`
          if (message.includes("auth/wrong-password")) message = "Wrong password"
          dispatch(setCoreKey("authing", false))
          dispatch(notify(
            "FIREBASE 103",
            "info", 
            `${message}`
          ))
      });
    } catch (e: any) {
      dispatch(notify(
        "FIREBASE 102",
        "error", 
        `firebaseSignin ${e.toString()}`
      ))
    }
}
