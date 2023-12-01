export const getElementSize = (mcId: string) => {
    try {
        const el = document.getElementById(mcId)
        if (!el) return false
        return {
            h: el.offsetHeight,
            w: el.offsetWidth,
        }
    } catch (error) {
        console.log("getElementSize", error)
        return false
    }
}
