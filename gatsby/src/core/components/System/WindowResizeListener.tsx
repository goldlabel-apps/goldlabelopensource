import React, { useEffect } from "react"
import {
  usePwaDispatch,
  setDisplay,
} from "../../../core"

const debounce = (fn, delay) => {
  let timer
  return (...args) => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn(...args)
    }, delay)
  }
}

const WindowResizeListener = () => {
  const dispatch = usePwaDispatch()
  const onResize = debounce(() => {
    dispatch(setDisplay())
  }, 125)

  useEffect(() => {
    dispatch(setDisplay())
  }, [])

  useEffect(() => {
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  return null
}

export default WindowResizeListener
