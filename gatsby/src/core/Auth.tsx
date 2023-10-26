import React from "react"
import {
  usePwaSelect,
  selectAuth,
} from "../core"
import {
  Signin
} from "../core"

export function Auth(props: any) {
  const {children} = props
  const auth = usePwaSelect(selectAuth)
  let user: any = null
  if (auth) user = auth.user
  if (!user) return <Signin />
  return <>{children}</>
} 