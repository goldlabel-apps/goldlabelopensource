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
    title: "How it works",
    links: [
      {
        label: "Isomorphic",
        path: "/about/isomorphic/",
      },
      {
        label: "Fingerprint",
        path: "/about/fingerprint/",
      },
      {
        label: "Flash",
        path: "/about/flash/",
      },
      {
        label: "Open AI",
        path: "/about/ai",
      },
      {
        label: "Cookies",
        path: "/cookies",
      },
    ],
  },
  
  {
    title: "Company",
    textLines: [
      "Goldlabel Apps Ltd",
      "321-323 High Road",
      "Chadwell Heath",
      "Essex RM6 6AX",
      "UK Ltd Co. 15460545"
    ],
  },

]
