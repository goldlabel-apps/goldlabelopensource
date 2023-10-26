import {
  notify,
  setPwaKey,
  store,
} from "../../core"

export const scrollTo = (el: HTMLElement): any =>
  async (dispatch: any) => {
    try {
      if (el){
        el.scrollIntoView({ 
          behavior: "smooth", 
          block: "end", 
          inline: "nearest",
        });
      }
      const {core} = store.getState()
      const {scrollDirection} = core
      dispatch(setPwaKey({key: "core", value: {
        ...core,
        scrollDirection: scrollDirection === "up" ? "down" : "up", 
      }}))
    } catch (e: any) {
      dispatch(notify(
        "VANILLA JS 101",
        "warning", 
        `scrollTo ${e.toString()}`
      ))
    }
  }
