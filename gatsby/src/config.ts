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
    plugins: ["Geolocator", "Lingua", "Tings"],
}

