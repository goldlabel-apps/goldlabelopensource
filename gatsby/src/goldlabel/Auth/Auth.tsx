import React from "react"
import {
  usePwaSelect,
  selectAuth,
} from "../../goldlabel"
import {
  Signin,
  // authListener,
} from "../Auth"

export function Auth(props: any) {
  const {children} = props
  const auth = usePwaSelect(selectAuth)
  const {user} = auth

  // React.useEffect(() => {
  //   authListener()
  // }, [])

  if (!user) return <Signin />
  return <>{children}</>
} 

/*
  <pre>{JSON.stringify(auth, null, 2)}</pre>
  Signed in <pre>{JSON.stringify(auth, null, 2)}</pre>
*/
