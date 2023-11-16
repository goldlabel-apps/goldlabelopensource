import {
  notify,
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
    } catch (e: any) {
      dispatch(notify(
        "VANILLA JS 101",
        "warning", 
        `scrollTo ${e.toString()}`
      ))
    }
  }
