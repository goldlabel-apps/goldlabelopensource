// import {Footer, FooterColumn, FooterLink} from "../../../types"

export type FooterLink = {
  path: string
  label: string
  icon?: string
  target?: string
}

export type FooterColumn = {
  title: string
  textLines?: Array<string>
  links?: Array<FooterLink> 
}

export type Footer = Array<FooterColumn>

/*
[YouTube](https://www.youtube.com/c/listingslab) or 
[Twitter](https://twitter.com/listingslab). 
*/
export const footer: Footer = [

  {
    title: "Legal",
    links: [
      {
        label: "Terms & Conditions",
        path: "/terms",
      },
      {
        label: "Privacy",
        path: "/privacy",
      },
      {
        label: "Cookies",
        path: "/cookies",
      },
      {
        label: "GDPR",
        path: "/gdpr",
      },
    ],
  },


  {
    title: "See us socially",
    links: [
      {
        label: "GitHub",
        path: "https://github.com/listingslab-software",
        target: "_blank"
      },
      {
        label: "LinkedIn",
        path: "https://www.linkedin.com/in/listingslab",
        target: "_blank"
      },
      {
        label: "Flickr",
        path: "https://www.flickr.com/photos/listingslab",
        target: "_blank"
      },
      {
        label: "Facebook",
        path: "https://www.facebook.com/listingslabspage",
        target: "_blank"
      },
    ],
  },

  {
    title: "About",
    links: [
      {
        label: "What is Goldlabel?",
        path: "/what",
      },
      {
        label: "When is Goldlabel?",
        path: "/when",
      },
      {
        label: "How is Goldlabel?",
        path: "/how",
      },
    ],
  },

  {
    title: "Company",
    textLines: [
      "Goldlabel Apps Ltd",
      "321-323 High Road",
      "Chadwell Heath",
      "Essex RM6 6AX"
    ],
  },
]