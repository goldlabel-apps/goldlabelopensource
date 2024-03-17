import React from "react"
import {
  usePwaDispatch,
} from "../../goldlabel"

export type Fingerprint = {
  uid: string
  host: string
  displayName: string
  ip: string
  geo: {
    lat: number
    lng: number
    zoom: number
  }
  device: {
  }
}

export function Fingerprint() {
  const dispatch = usePwaDispatch()

  React.useEffect(() => {
  }, [dispatch])
  
  return <>
          Fingerprint
        </>
}
