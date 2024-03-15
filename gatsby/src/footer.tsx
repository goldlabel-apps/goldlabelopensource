import {glConfig} from "./config"
export type FooterLink = {
  path: string
  label: string
  icon?: string
  target?: string
}

export type FooterColumn = {
  title: string
  populate?: "sameKeywords" | "children" | "siblings"
  textLines?: Array<string>
  links?: Array<FooterLink> 
}

export type Footer = Array<FooterColumn>

export const footer: Footer = [
  {
    title: "Goldlabel Apps Ltd",
    textLines: [
      "321-323 High Road",
      "Chadwell Heath",
      "Essex RM6 6AX",
      "UK Ltd Co. 15460545",
      "ai@goldlabel.pro"
    ],
  },
  {
    title: "About",
    links: [
      {
        label: "Contact us",
        path: `mailto:${glConfig.siteEmail}`,
        target: "_self",
        icon: "email",
      },
      {
        label: "Legal",
        path: "/legal",
        icon: "legal",
      },
    ],
  },
  {
    title: "Learn more",
    links: [
      {
        label: "Fingerprints?",
        path: "/about/fingerprints",
        icon: "fingerprint",
      },
      {
        label: "Flash?",
        path: "/about/flash",
        icon: "flash",
      },
      {
        label: "AI?",
        path: "/about/ai",
        icon: "openai",
      },
    ],
  },
  {
    title: "Example Apps",
    links: [
      {
        label: "Listingslab",
        path: "https://listingslab.com",
        target: "_blank",
        icon: "pingpong",
      },
      {
        label: "Growspy",
        path: "https://growspy.app",
        target: "_blank",
        icon: "leaf",
      },
      {
        label: "Dive Malta",
        path: "https://divemalta.app",
        target: "_blank",
        icon: "diving",
      },
    ],
  },
]
