import { gsap, Power1 } from "gsap"

export const fadeDiv =
  (
    divId: string,
): any =>
  async (dispatch: any) => {
    try {
      let e = Power1.easeOut
      let oC = () => {
        console.log("done.")
      }
      let d = 0.25

      gsap.to(`#${divId}`, {
        opacity: 0,
        duration: d,
        ease: e,
        onComplete: oC,
      })
    } catch (error: any) {
      console.log("Action error: fadeDiv", error)
      
    }
}
