import {
  store,
  notify,
} from "../../../../goldlabel"
import {
  setPosition,
} from "../../../Flash"

const setup = () => {
  setPosition({
    divId: "mcMacromedia",
    position: "centered"
  })
}

const resize = () => {
  console.log("reinventingFlashAS resize")
}

export const reinventingFlashAS = (
  action: "SETUP" | "RESIZE"
) => {
  try {
    if (action === "SETUP") setup()
    if (action === "RESIZE") resize()
  } catch (error: any) {
    store.dispatch(notify("reinventingFlashAS", "error", error.toString()))
  }
}
