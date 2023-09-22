import {
  notify,
} from "../../goldlabel"

export const scrollUp =
  (): any =>
  async (dispatch: any) => {
    try {
      const el = document.getElementById("scrollIntoView")
      if (el){
        el.scrollIntoView({ 
          behavior: "instant", 
          block: "end", 
          inline: "nearest",
        });
      }
    } catch (error: any) {
      dispatch(notify("error", error))
    }
  }

