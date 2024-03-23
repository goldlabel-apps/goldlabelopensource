import {Config} from "./goldlabel/types"

export const glConfig: Config = {
    version: "4.3.6",
    siteUrl: "https://free.goldlabel.pro",
    siteTitle: "Goldlabel",
    siteDescription: "Free & Open Source on Github",
    siteKeywords: "Goldlabel, Open Source, Free, Github",
    siteDisplayname: "AI",
    siteEmail: "ai@goldlabel.pro",
    siteIcon: "/svg/iOS.svg",
    siteImage: "/webp/coupland/coupland.webp",
    siteAvatar: "https://free.goldlabel.pro/svg/iOS.svg",
    siteRepo: "https://github.com/listingslab-software/goldlabelopensource",
    siteTheme: "#FFFFFF",
    isomorphic: {
        forms: { enabled: false },
        lingua: { enabled: false },
        flash: { 
            enabled: true,
            hero: false,
            scenes: [
                "ReinventingFlash",
                "NewScene",
            ],
        },
        fingerprint: { 
            enabled: true,
            toggle: true,
        },
        theme: {
            enabled: true,
            toggle: true,
            paletteMode: "dark",
            color: "#C09F52",
            font: "noka",
        },
        geo: {
            enabled: true,
            lightTheme: "mapbox://styles/listingslab/clmrnpplw00ej01nsfv8l4q25",
            darkTheme: "mapbox://styles/listingslab/clmrnt68o02a801qxevn0bt6u",
            default: {
                lat: 52.196844,
                lng: 0.985493,
                zoom: 6,
                label: "Hello World",
                icon: "geo",
            }
        },
    },    
}
