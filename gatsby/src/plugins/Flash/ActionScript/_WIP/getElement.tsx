export const getElement = (mcId: string) => {
    try {
        const el = document.getElementById(mcId)
        if (!el) return false
        return el
    } catch (error) {
        console.warn("getElement", error)
        return false
    }
}
