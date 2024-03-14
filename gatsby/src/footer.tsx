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
    title: "Find out more",
    links: [
      {
        label: "Fingerprint",
        path: "/about/fingerprint/",
        icon: "fingerprint",
      },
      {
        label: "Flash",
        path: "/about/flash/",
        icon: "flash",
      },
      {
        label: "AI",
        path: "/about/ai",
        icon: "openai",
      },
      {
        label: "Listingslab",
        path: "https://listingslab.com",
        target: "_blank",
        icon: "link",
      },
      {
        label: "Legal",
        path: "/legal",
        icon: "legal",
      },
      
    ],
  },
]
