import {CoreShape} from "../types"
import {allHosts} from "./allHosts"
export const coreState: CoreShape = {
    user: null,
    allHosts,
    authing: false,
    authed: false,
    display: null,
    notifyr: null,
    activeCategory: null,
    frontmatter: null,
    scrollDirection: "down",
}
