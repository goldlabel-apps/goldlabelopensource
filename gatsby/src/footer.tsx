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
        label: "Oliver",
        path: "/about/ai",
        icon: "oliver",
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
  {
    title: "Goldlabel Apps Ltd",
    textLines: [
      "321-323 High Road",
      "Chadwell Heath",
      "Essex RM6 6AX",
      "UK Ltd Co. 15460545",
      "oliver@goldlabel.pro"
    ],
  },

]
