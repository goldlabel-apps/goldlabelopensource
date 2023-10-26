import {ConfigShape} from "../types"

export const glConfig: ConfigShape = {
    siteEmail: "listingslab@gmail.com",
    siteDisplayname: "Milky",
    siteUrl: "https://github.com/listingslab-software/open-source",
    siteFacebook: "https://www.facebook.com/listingslabspage",
    siteTitle: "Open Source",
    siteDescription: "Forever free",
    siteKeywords: "listingslab, goldlabel, opensource, fullstack, react, javascript, node, pwa, free, github",
    siteImage: "/jpg/diving/wreck-p29_seagreen.jpg",
    siteIcon: "/svg/iOS.svg",
    siteTwitter: "@listingslab",
    siteTheme: "#C5C5C5",
    theme: {
        slug: "opensource",
        primaryColor: "#C5C5C5",
        secondaryColor: "#616161",
    },
    plugins: {
        backoffice: {
            enabled: true,
        },
        lingua: {
            enabled: false,
            localeList: ["en", "pi", "mt", "de", "cn", "es"],
            localeMeta: {
                en: {
                    default: "English",
                    localised: "Translate to English",
                },
                es: {
                    default: "Spanish",
                    localised: "Traducir al español",
                },
                de: {
                    default: "Deutsch",
                    localised: "Ins Deutsche übersetzen",
                },
                cn: {
                    default: "简体中文",
                    localised: "翻译成简体中文",
                },
                mt: {
                    default: "Malti",
                    localised: "Ittraduci ghall-Malti",
                },
                pi: {
                    default: "Pirate",
                    localised: "Translate to Pirate",
                },
            },
        }
    },
}

