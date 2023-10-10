export type IsBigShape = {
    isBig: boolean
    w: number
    h: number
    landscape: boolean
}

export const useIsBig = () => {    
    return {
        isBig: true,
        w: 1024,
        h: 800,
        landscape: true,
    }

}