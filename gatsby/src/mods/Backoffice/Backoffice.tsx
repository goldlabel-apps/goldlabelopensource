import React from "react"
import {
    Auth,
    Notifyer,
    useIsBig,
} from "../../goldlabel"
import {
    Desktop,
    ConfirmDialog,
} from "../Backoffice"

export default function Backoffice() {
    const big = useIsBig()
    if (!big) console.log("big", big)
    return (<>
                <Notifyer />
                <ConfirmDialog />
                <Auth> 
                    <div id="backoffice">      
                        <Desktop />
                    </div> 
                </Auth>
            </>)
}
