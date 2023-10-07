import {ConfigShape} from "../types"

export const goldlabelConfig: ConfigShape = {
    goldlabelVersion: "1.0.0",
    siteUrl: "https://github.com/listingslab-software/open-source",
    siteDefaultLocale: "en",
    siteTitle: "Open Source",
    siteDescription: "Forever free",
    siteImage: "/png/mapbox.png",
    siteIcon: "/svg/iOS.svg",
    siteTwitter: "@listingslab",
    siteTheme: "#FFFFFF",
    siteKeywords: "listingslab, goldlabel, opensource, fullstack, react, javascript, node, pwa, free, github",
    themes: [
        {
            slug: "opensource",
            primaryColor: "#C5C5C5",
            secondaryColor: "#616161",
        },
    ],
    features: {
        lingua: {
            localeList: ["en", "pi", "mt", "de", "cn"], // "es"
            localeMeta: {
                en: {
                    default: "English",
                    localised: "Translate to English",
                },
                es: {
                    default: "",
                    localised: "",
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

