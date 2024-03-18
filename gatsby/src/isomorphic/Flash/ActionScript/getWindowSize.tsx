export const getWindowSize = () => {
    try {
        const innerHeight = window.innerHeight
        const innerWidth = window.innerWidth
        let mode = 'square'
        let isMobile = false
        if (innerWidth < 650) isMobile = true
        if (innerWidth > innerHeight) mode = 'landscape'
        if (innerWidth < innerHeight) mode = 'portrait'
        return {
            windowW: innerWidth,
            windowH: innerHeight,
            mode,
            isMobile,
        }
    } catch (error) {
        console.warn('getWindowSize error', error)
        return false
    }
}
