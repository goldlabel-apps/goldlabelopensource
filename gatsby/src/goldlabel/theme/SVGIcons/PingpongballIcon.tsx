import * as React from 'react'
import { useTheme, SvgIcon } from '@mui/material'

export default function PingpongballIcon(props: any) {
    let mainColor = 'black'
    const theme = useTheme()
    // mainColor = theme.palette.primary.main
    let color2 = theme.palette.primary.main

    return (
        <SvgIcon {...props}>
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g>
                    <rect
                        fillOpacity="0"
                        x="0"
                        y="0"
                        width="24"
                        height="24"
                    ></rect>
                    <g
                        transform="translate(1.000000, 1.000000)"
                        fillRule="nonzero"
                    >
                        <path
                            d="M11.9316955,0.00778516743 C18.2793961,0.234625 23.2318292,5.339499 22.9916183,11.4103978 C22.7565183,17.4812966 17.4207699,22.2190224 11.0730694,21.9921826 C4.72536881,21.7653428 -0.227064254,16.6604688 0.00803576687,10.58957 C0.248246659,4.51867123 5.58399495,-0.218565786 11.9316955,0.00778516743 Z"
                            fill={mainColor}
                        ></path>
                        <path
                            d="M8,12 C12.6203742,21.9973959 20,13.9133228 20,13.9133228 C14.7209979,15.4126605 8,12 8,12 Z"
                            fill={color2}
                        ></path>
                    </g>
                </g>
            </g>
        </SvgIcon>
    )
}
