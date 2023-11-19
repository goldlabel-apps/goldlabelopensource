import {
    notify,
} from "../../core"

export const resetLocalstorage = (): any => async (dispatch: any) => {
    try {
        console.log("resetLocalstorage")
        let localStorageEnabled = false
        try { 
            localStorageEnabled = !!localStorage 
            if (localStorageEnabled){
                localStorage.clear.bind(localStorage)
            }
            setTimeout(()=>{
                console.log("go away")
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
