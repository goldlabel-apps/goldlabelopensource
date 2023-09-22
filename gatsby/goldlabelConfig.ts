import {ConfigShape} from "./types"

export const goldlabelConfig: ConfigShape = {
    siteUrl: "https://github.com/listingslab-software/open-source",
    siteDefaultLocale: "en",
    siteTitle: "Open Source",
    siteDescription: "Fullstack JavaScript Since 1998",
    siteImage: "/png/default.png",
    siteIcon: "/svg/iOS.svg",
    siteTwitter: "@machine_v4",
    siteTheme: "#121212",
    siteKeywords: "listingslab, goldlabel, opensource, fullstack, react, javascript, node, pwa, free, github",
    themes: [
        {
            slug: "goldlabel",
            primaryColor: "#C09F52",
            secondaryColor: "#87703B",
        },
    ],
    localeList: ["en", "mt", "de", "cn"],
    localeMeta: {
        en: {
            default: "English",
            localised: "Translate to English",
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
    },
}

