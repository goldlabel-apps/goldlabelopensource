import {ConfigShape} from "../types"

export const goldlabelConfig: ConfigShape = {
    goldlabelVersion: "1.0.5",
    siteUrl: "https://github.com/listingslab-software/open-source",
    siteDefaultLocale: "en",
    siteTitle: "Open Source",
    siteDescription: "Forever free",
    siteImage: "/png/mapbox.png",
    siteIcon: "/svg/iOS.svg",
    siteTwitter: "@listingslab",
    siteTheme: "#FFFFFF",
    siteKeywords: "listingslab, goldlabel, opensource, fullstack, react, javascript, node, pwa, free, github",
    theme: {
        slug: "opensource",
        primaryColor: "#C5C5C5",
        secondaryColor: "#616161",
    },
    features: {
        backoffice: {
            enabled: true,
            collections: [
                "Tings",
                "Listings",
            ]
        },
        geolocator: {
            enabled: true,
            mapbox: {
                enabled: true,
                lightTheme: "mapbox://styles/listingslab/clmm7rfpk01u801pj5gf51dr5",
                darkTheme: "mapbox://styles/listingslab/clmq3wus3020o01nzdlm4gvmh",
                apiKey: process.env.REACT_APP_MAPBOX
            },
            weather: {
                enabled: false,
                fbId: "CTKHpFCdRd1FNLG6Be8X",
            },
        },
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

