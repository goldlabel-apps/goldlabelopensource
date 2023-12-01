import { gsap } from "gsap"

export const hideDiv =
  (
    divId: string,
): any =>
  async (dispatch: any) => {
    try {
      gsap.set(`#${divId}`, {
        opacity: 0,
      })
    } catch (error: any) {
      console.log("Action error: hideDiv", error)
    }
}
