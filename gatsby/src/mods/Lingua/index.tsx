
import Lingua from "./Lingua"
import LinguaDialog from "./LinguaDialog"
import {toggleLingua} from "./actions/toggleLingua"
import {auth} from "./translations/auth"
import {lingua} from "./translations/lingua"
import {contact} from "./translations/contact"
import {system} from "./translations/system"
import {theme} from "./translations/theme"
import {addListing} from "./translations/addListing"
import {tings} from "./translations/tings"
import {other} from "./translations/other"
export {
    Lingua,
    LinguaDialog,
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
    },
    ...auth,
    ...contact,
    ...system,
    ...lingua,
    ...theme,
    ...addListing,
    ...tings,
    ...other,
}
