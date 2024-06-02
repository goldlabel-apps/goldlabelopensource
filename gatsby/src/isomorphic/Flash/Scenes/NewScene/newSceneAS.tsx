// @ts-nocheck
import {store} from "../../../../"
import { 
  notify, 
} from "../../../../";
import {
  setFlashKey,
  position,
} from "../../../Flash"

const setup = () => {
  console.log("reinventingFlashAS setup")
  console.log(position({mc:"flashLogo", position:"centered"}))

  
  store.dispatch(setFlashKey("setup", true))
}

const resize = () => {
  // setInterval(() => {
  //   align("appnavMenu", flashId, "topright");
  // }, 33);
};

export const newSceneAS = (action: string) => {
  try {
    if (action === "SETUP") setup()
    if (action === "RESIZE") resize()
  } catch (error: any) {
    store.dispatch(notify("error", error.message))
  }
}