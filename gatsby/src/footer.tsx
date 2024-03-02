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

export const footer: Footer = [
  {
    title: "Legal",
    links: [
      {
        label: "Terms",
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
    title: "5 Goldlabel Ws",
    links: [
      {
        label: "Who?",
        path: "/5ws/who",
      },
      {
        label: "What?",
        path: "/5ws/what",
      },
      {
        label: "When?",
        path: "/5ws/when",
      },
      {
        label: "Where?",
        path: "/5ws/where",
      },
      {
        label: "Why?",
        path: "/5ws/why",
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