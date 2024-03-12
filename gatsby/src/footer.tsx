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
        path: "/how/isomorphic/",
      },
      {
        label: "Fingerprint",
        path: "/how/fingerprint/",
      },
      {
        label: "Flash",
        path: "/how/flash/",
      },
      {
        label: "Open AI",
        path: "/how/ai",
      },
      {
        label: "WordPress",
        path: "/how/wordpress/",
      },
      {
        label: "Cookies",
        path: "/terms",
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
