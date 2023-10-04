import {ConfigShape} from "../types"

export const goldlabelConfig: ConfigShape = {
    siteUrl: "https://divemalta.app",
    siteTitle: "Divemalta",
    siteDescription: "Diving Holiday Guide for the Maltese Islands",
    siteKeywords: "diving, travel, guide, weather, malta",
    siteImage: "/png/default.png",
    siteIcon: "/svg/iOS.svg",
    siteTwitter: "@visitmalta",
    siteTheme: "#FFFFFF",
    siteDefaultLocale: "en",
    themes: [
        {
            slug: "seagreen",
            primaryColor: "#24C3B2",
            secondaryColor: "#1e1e1e",
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

