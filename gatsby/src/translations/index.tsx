import {auth} from "./groups/auth"
import {lingua} from "./groups/lingua"
import {contact} from "./groups/contact"
import {system} from "./groups/system"
import {theme} from "./groups/theme"
import {addListing} from "./groups/addListing"
import {tings} from "./groups/tings"
import {other} from "./groups/other"

export const getTranslation = (slug: string, locale: string) => {
    const hasEntry = translations[slug]
    if (!hasEntry) return `No slug ${slug}`
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
