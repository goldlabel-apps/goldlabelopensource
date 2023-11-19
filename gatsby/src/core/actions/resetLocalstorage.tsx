import {
    notify,
    navigate,
} from "../../core"

export const resetLocalstorage = (): any => async (dispatch: any) => {
    try {
        // console.log("resetLocalstorage")
        let localStorageEnabled = false
        try { 
            localStorageEnabled = !!localStorage 
            if (localStorageEnabled){
                localStorage.clear.bind(localStorage)
            }
            setTimeout(()=>{
                dispatch(navigate("/", "_self"))
            }, 1000)
        } catch(e) {};
    } catch (e: any) {
        dispatch(notify(
            "Redux Localstorage 101",
            "error", 
            `resetLocalstorage ${e.toString()}`
        ))
    }
}
