import { getAuth, onAuthStateChanged } from "firebase/auth"
import { 
  notify,
  store,
  setPwaKey,
} from "../../../goldlabel"

export const authListener = () => {
    const fBauth = getAuth()
    onAuthStateChanged(fBauth, (user) => {
        const {auth} = store.getState()
        if (user) {
          console.log("onAuthStateChanged user", user)
          store.dispatch(setPwaKey({ key: "auth", value: {
            ...auth,
            user,
          }}))
        } else {
          store.dispatch(setPwaKey({ key: "auth", value: {
            ...auth,
            user: null,
          }}))
        }
      });
    return true
}
