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
  YourFingerprint,
  ToggleBar,
  init,
  saveTing,
} from "./"
import { doc } from "firebase/firestore"

export function Fingerprint() {
  const dispatch = usePwaDispatch()
  const tings = usePwaSelect(selectTings)
  const {
    ting,
  } = tings

  React.useEffect(() => {
    // const params = window.location.search
    // console.log("params", params)
    // console.log("subscribe", ting.fingerprint)
    // if (ting){
    //   const {YourFingerprint} = ting
    //   if (YourFingerprint){
    //     // const db = getFirestore()
    //     // const unsubscribe = onSnapshot(doc(db, "YourFingerprints", YourFingerprint), (doc) => {
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
          <YourFingerprint />
          <ToggleBar />
        </>
}
