export const useScreensize = () => {
    const win = window
    if (win){
        return {
            w: win.innerWidth,
            h: win.innerHeight
        }
    }
    return {
        w: 0,
        h: 0
    }
    
}