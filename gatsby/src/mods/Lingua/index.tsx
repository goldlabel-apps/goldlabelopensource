import Lingua from "./Lingua"
import MiniLinguaMenu from "./MiniLinguaMenu"
import {toggleLingua} from "./actions/toggleLingua"
import {auth} from "../../goldlabel/Auth/translations"
import {backoffice} from "../../mods/Backoffice/translations"
import {lingua} from "./translations/lingua"
import {contact} from "./translations/contact"
import {system} from "./translations/system"
import {theme} from "./translations/theme"
import {addListing} from "./translations/addListing"
import {tings} from "./translations/tings"
import {other} from "./translations/other"
import {weather} from "./translations/weather"
export {
    Lingua,
    MiniLinguaMenu,
    toggleLingua,
}

export const getTranslation = (slug: string, locale: string) => {
    const hasEntry = translations[slug]
    if (!hasEntry) return `No translation ${slug}`
    const hasTranslation = translations[slug][locale]
    if (!hasTranslation) return `No locale ${locale}, ${slug}`
    return translations[slug][locale]
}

export const translations: any = {
    HOME: {
        en: "Home",
        mt: "Dar",
        de: "Heim",
        cn: "家",
        it: "Casa",
        pi: "Smuggler's Den",
    },
    ...auth,
    ...backoffice,
    ...contact,
    ...system,
    ...lingua,
    ...theme,
    ...addListing,
    ...tings,
    ...other,
    ...weather,
}
