import * as React from "react"
import { useTheme, lighten, SvgIcon } from "@mui/material"

export default function Goldlabel(props: any) {
    const { color } = props
    const theme = useTheme()
    let c: string = theme.palette.secondary.main
    if (color) c = color

    return (
        <SvgIcon {...props}>
            <title>Goldlabel</title>
            <defs>
                <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1">
                    <stop stopColor={"#0CF3DA"} offset="0%"></stop>
                    <stop stopColor={lighten("#0CF3DA", 0.25)} offset="100%"></stop>
                </linearGradient>
            </defs>
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Goldlabel">
                    <rect fill="none" x="0" y="0" width="24" height="24"></rect>
                    <g transform="translate(1, 4)" fill={c} fillRule="nonzero">
                        <path d="M23,8.5 L17.6013889,15.7553571 C17.324537,16.1196429 16.9944445,16.4181548 16.6111111,16.6508929 C16.2277778,16.883631 15.8018519,17 15.3333334,17 L1.91666665,17 C1.38958335,17 0.938368055,16.8216518 0.563020835,16.4649553 C0.18767361,16.1082589 0,15.6794643 0,15.1785714 L0,1.82142856 C0,1.32053569 0.18767361,0.891741091 0.563020835,0.535044655 C0.938368055,0.178348218 1.38958335,0 1.91666665,0 L15.3333334,0 C15.8018519,0 16.2277778,0.116369042 16.6111111,0.349107127 C16.9944445,0.581845212 17.324537,0.880357127 17.6013889,1.24464287 L23,8.5 Z"></path>
                    </g>
                </g>
            </g>
        </SvgIcon>
    )
}
