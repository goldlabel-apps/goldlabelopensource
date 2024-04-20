export const getElement = (divId: any) => {
    try {
        const el = document.getElementById(divId)
        if (!el) return false
        let mode = 'square'
        if (el.offsetHeight < el.offsetWidth) mode = 'landscape'
        if (el.offsetHeight > el.offsetWidth) mode = 'portrait'
        return {
            id: `${divId}`,
            height: el.offsetHeight,
            width: el.offsetWidth,
            mode,
        }
    } catch (error) {
        console.warn("getElement error", error)
        return false
    }
}
