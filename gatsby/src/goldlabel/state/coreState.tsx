import {glConfig} from "../../config"
import {pricing} from "../algorithms/pricing"
import {footer} from "../../footer"

export const coreState: any = {
    user: null,
    authed: false,
    authing: false,
    darkmode: glConfig.isomorphic.theme.defaultDarkmode || false,
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
    isNewTing: true,
}
