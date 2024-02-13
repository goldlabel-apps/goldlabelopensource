import {CoreShape} from "../../../src/types"
import {glConfig} from "../../config"
import {pricing} from "./constants/pricing"
import {footer} from "../../footer"

export const coreState: CoreShape = {
    user: null,
    authed: false,
    authing: false,
    darkmode: glConfig.theme.defaultDarkmode || false,
    debuggerOpen: false,
    display: null,
    notifyer: null,
    frontmatter: null,
    scroll: false,
    signinOpen: false,
    accountDialogOpen: false,
    settingsMenuOpen: false,
    navDialogOpen: false,
    pricing,
    footer,
}
