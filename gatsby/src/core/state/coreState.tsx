import {CoreShape} from "../../../src/types"
import {allHosts} from "./allHosts"
import {glConfig} from "../../config"

export const coreState: CoreShape = {
    user: null,
    darkmode: glConfig.theme.defaultDarkmode || false,
    authed: false,
    authing: false,
    allHosts,
    debuggerOpen: false,
    display: null,
    notifyer: null,
    frontmatter: null,
    footerMenuOpen: false,
    scroll: false,
    signinOpen: false,
    accountDialogOpen: false,
}
