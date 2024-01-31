import React from "react"
import {
  MembersOnly,
  usePwaSelect,
  selectAuth,
} from "../goldlabel"

export function Auth(props: any) {
  const {children} = props
  const auth = usePwaSelect(selectAuth)
  let user: any = null
  if (auth) user = auth.user
  if (!user) return <MembersOnly />
  return <>{children}</>
} 