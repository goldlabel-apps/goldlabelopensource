export type IsBigShape = {
    isBig: boolean
    w: number
    h: number
}

export const useIsBig = () => {   
    let isBig = true 
    let w = window.innerWidth
    if (w < 700) isBig = false
    let h = window.innerWidth
    return {
        isBig,
        w,
        h,
    }
}
