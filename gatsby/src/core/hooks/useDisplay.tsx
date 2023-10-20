export const useDisplay = (): any => {
    let mobile = false
    const w = window.innerWidth
    const h = window.innerHeight
    if (w < 700) mobile = true
    const display = {
        mobile,
        w,
        h,
    }
    return display
}
