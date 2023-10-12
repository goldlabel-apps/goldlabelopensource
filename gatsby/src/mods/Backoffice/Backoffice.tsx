import React from "react"
import {
    Auth,
    Notifyer,
    useIsBig,
    usePwaSelect,
    selectBackoffice,
} from "../../goldlabel"
import {
    Desktop,
    Mobile,
    ConfirmDialog,
} from "../Backoffice"

export default function Backoffice() {
    const {isBig} = useIsBig()
    const backoffice = usePwaSelect(selectBackoffice)
    if(!backoffice) console.log("backoffice", backoffice)
    return (<>
                <Notifyer />
                <ConfirmDialog />
                <Auth> 
                    <div id="backoffice">   
                        {isBig ? <Desktop /> : <Mobile /> }      
                    </div> 
                </Auth>
            </>)
}
