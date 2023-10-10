import { 
  getAuth, 
  signInWithEmailAndPassword,
} from "firebase/auth"
import {
  notify,
  store,
  setPwaKey,
} from "../../../goldlabel"

export const firebaseSignin = (email: string, password: string): any =>
  async (dispatch: any) => {
    try {
      const fBauth = getAuth()
      const {auth} = store.getState()
      signInWithEmailAndPassword(fBauth, email, password)
        .then((user) => {
          dispatch(setPwaKey({ key: "auth", value: {
            ...auth,
            user,
          }}))
        })
        .catch((error) => {
          let message = error.message
          if (message.includes("auth/invalid-email")) message = `Invalid Email`
          if (message.includes("auth/user-not-found")) message = `${email} not found`
          if (message.includes("auth/wrong-password")) message = "Wrong password"
          dispatch(notify("info", message))
      });
    } catch (error: any) {
      console.log("Action error: firebaseLogin", error)
    }
}
