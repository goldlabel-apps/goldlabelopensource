import { getElement } from './'

export const getStage = () => {
    try {
        const stage = getElement('flashStage')
        if (!stage) {
            console.error('getStage error No stage')
            return false
        }
        let colWidth = 345
        const { width, height } = stage
        if (width > 700) colWidth = 690
        let aspect = 'landscape'
        if (width < height) aspect = 'mobile'

        return {
            aspect,
            cols: 1,
            colWidth,
        }
    } catch (error) {
        return false
    }
}
