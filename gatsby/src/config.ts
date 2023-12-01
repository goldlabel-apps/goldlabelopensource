import {ConfigShape} from "./types"

export const glConfig: ConfigShape = {
    siteTitle: "Goldlabel",
    siteDescription: "Open Source",
    siteEmail: "listingslab@gmail.com",
    siteDisplayname: "Milky",
    siteUrl: "https://goldlabel-open-source.web.app/",
    siteFacebook: "https://www.facebook.com/listingslabspage",
    siteKeywords: "listingslab, goldlabel, opensource, fullstack, react, javascript, node, pwa, free, github",
    siteImage: "/png/goldlabel.png",
    siteIcon: "/svg/iOS.svg",
    siteTwitter: "@listingslab",
    siteTheme: "#22939C",
    theme: {
        slug: "teal",
        primaryColor: "#22939C",
        secondaryColor: "#126970",
        defaultDarkmode: false,
    },
    mapbox: {
        light: "mapbox://styles/listingslab/clmrnpplw00ej01nsfv8l4q25",
        dark: "mapbox://styles/listingslab/clmrnt68o02a801qxevn0bt6u"
    },
    debuggerEnabled: true,
    darkmodeEnabled: true,
    membersOnly: false,
    sharing: true,
}

