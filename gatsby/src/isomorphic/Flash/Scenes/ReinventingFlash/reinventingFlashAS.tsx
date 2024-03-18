// import {store} from "../../../../goldlabel"
// import {
//   setFlashKey,
// } from "../../../Flash"

const setup = () => {
  console.log("reinventingFlashAS setup")
  // console.log(position({mc:"flashLogo", position:"centered"}))
  // store.dispatch(setFlashKey("setup", true))
}

const resize = () => {
  console.log("reinventingFlashAS resize")
};

export const reinventingFlashAS = (
  action: "SETUP" | "RESIZE"
) => {
  try {
    if (action === "SETUP") setup()
    if (action === "RESIZE") resize()
  } catch (error: any) {
    // store.dispatch(notify("error", error.message))
  }
}
