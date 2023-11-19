import {CoreShape} from "../types"
import {allHosts} from "./allHosts"
import {glConfig} from "../../config"

export const coreState: CoreShape = {
    user: null,
    darkmode: glConfig.theme.defaultDarkmode,
    allHosts,
    authed: false,
    display: null,
    notifyer: null,
    frontmatter: null,
    footerMenuOpen: false,
    scroll: false,
}
