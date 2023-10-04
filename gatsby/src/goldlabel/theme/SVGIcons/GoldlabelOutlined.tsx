import * as React from 'react'
import { useTheme, SvgIcon } from '@mui/material'

export default function GoldlabelOutlined(props: any) {
    const theme = useTheme()
    let color1 = theme.palette.primary.main
    // const {color} = props
    // if (color) color1 = color

    return (
        <SvgIcon {...props}>
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g>
                    <rect fill="none" x="0" y="0" width="24" height="24"></rect>
                    <path d="M20.8235294,12.5 L16.8746732,18.0482143 C16.6721677,18.3267857 16.430719,18.5550595 16.1503268,18.7330357 C15.8699346,18.9110119 15.5583878,19 15.2156863,19 L5.40196078,19 C5.01642158,19 4.68637663,18.8636161 4.41182598,18.5908482 C4.13727533,18.3180803 4,17.9901786 4,17.6071429 L4,7.39285713 C4,7.00982141 4.13727533,6.68191966 4.41182598,6.40915179 C4.68637663,6.13638393 5.01642158,6 5.40196078,6 L15.2156863,6 C15.5583878,6 15.8699346,6.08898809 16.1503268,6.26696427 C16.430719,6.44494046 16.6721677,6.67321427 16.8746732,6.95178573 L20.8235294,12.5 Z" id="ticket-outline" stroke={color1} strokeWidth="2" fillRule="nonzero"></path>
                </g>
            </g>
        </SvgIcon>
    )
}
