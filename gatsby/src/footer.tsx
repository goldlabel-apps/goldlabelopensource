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
        label: "Who",
        path: "/the-5-ws/who",
      },
      {
        label: "What",
        path: "/the-5-ws/what",
      },
      {
        label: "When",
        path: "/the-5-ws/when",
      },
      {
        label: "Where",
        path: "/the-5-ws/where",
      },
      {
        label: "Why",
        path: "/the-5-ws/why",
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