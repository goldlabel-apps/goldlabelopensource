export const goAuth = (): any =>
  async (dispatch: any) => {
    try {
      window.open("/auth", "_self")
    } catch (error: any) {
      console.log("Action error: goAuth", error)
    }
  }

