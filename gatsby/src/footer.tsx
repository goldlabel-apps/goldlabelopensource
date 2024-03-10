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
        label: "Artificial Intelligence",
        path: "/how/ai",
      },
      {
        label: "WordPress",
        path: "/how/wordpress/",
      },
      {
        label: "Terms & Conditions",
        path: "/terms",
      },
    ],
  },
  {
    title: "5 Goldlabel Ws",
    links: [
      {
        label: "Who?",
        path: "/who",
      },
      {
        label: "What?",
        path: "/what",
      },
      {
        label: "When?",
        path: "/when",
      },
      {
        label: "Where?",
        path: "/where",
      },
      {
        label: "Why?",
        path: "/why",
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
  {
    title: "More Like This",
    populate: "sameKeywords",
    links: [
    ],
  },
]
