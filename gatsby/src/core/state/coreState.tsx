import {CoreShape} from "../types"
import {allHosts} from "./allHosts"

export const coreState: CoreShape = {
    user: null,
    darkmode: false,
    allHosts,
    authed: false,
    display: null,
    notifyer: null,
    frontmatter: null,
    footerMenuOpen: false,
    scroll: false,
}
