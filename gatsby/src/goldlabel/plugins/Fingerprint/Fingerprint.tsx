import React from "react"
// import { 
//   getFirestore,
//   onSnapshot,
//   doc,
// } from "firebase/firestore"
import {
  usePwaDispatch,
  usePwaSelect,
  selectTings,
} from "../../../goldlabel"
import {
  YourTing,
  ToggleBar,
  init,
  saveTing,
} from "./"

export function Fingerprint() {
  const dispatch = usePwaDispatch()
  const tings = usePwaSelect(selectTings)
  const {
    ting,
  } = tings

  React.useEffect(() => {
    // console.log("subscribe", ting.fingerprint)
    // if (ting){
    //   const {YourTing} = ting
    //   if (YourTing){
    //     // const db = getFirestore()
    //     // const unsubscribe = onSnapshot(doc(db, "YourTings", YourTing), (doc) => {
    //     //   // console.log("docUpdate", doc.data())
    //     //   // dispatch(updateFbTing(doc.data()))
    //     // })
    //     // return () => unsubscribe()
    //   }
    // }
  }, [ting, dispatch])

  React.useEffect(() => {
    const {
      initted,
      initting,
      ting,
    } = tings
    if (!initted && !initting) dispatch(init())
    if (ting){
      const {ip} = ting
      if (ip) dispatch(saveTing())
    }
  }, [tings, dispatch])
  
  return <>
          <YourTing />
          <ToggleBar />
        </>
}
