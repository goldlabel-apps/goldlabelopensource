import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import {
  notify,
} from "../../../../"

export const firebaseSignin = (email: string, password: string): any =>
  async (dispatch: any) => {
    try {
      const auth = getAuth()
      signInWithEmailAndPassword(auth, email, password)
        .then((user) => {
          if (!user) console.log("signin", user)
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
