import {
  notify,
} from "../../core"

export const scrollTop =
  (): any =>
  async (dispatch: any) => {
    try {
      const el = document.getElementById("top")
      if (el){
        el.scrollIntoView({ 
          behavior: "smooth", 
          block: "end", 
          inline: "nearest",
        });
      }
    } catch (e: any) {
      dispatch(notify(
        "JS 101",
        "error", 
        `scrollTop ${e.toString()}`
      ))
    }
  }
