import * as React from 'react'
import { useTheme, SvgIcon } from '@mui/material'

export default function BlokeyIcon(props: any) {
    // const { color } = props
    const theme = useTheme()
    let color1 = theme.palette.primary.main

    return (
        <SvgIcon {...props}>
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <rect
                    fillOpacity="0"
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                ></rect>
                <g
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd">
                    <g>
                        <g
                            transform="translate(2.000000, 0.000000)"
                            fill={color1}
                            fillRule="nonzero"
                        >
                            <circle cx="9.5" cy="2.5" r="2.5"></circle>
                            <path
                                d="M13.8086797,7.02649999 C13.3557457,6.578 12.5776284,5.75000002 11.0678484,5.75000002 C10.8239609,5.75000002 9.41870416,5.75000002 8.11797064,5.75000002 C4.92420536,5.73850001 2.32273838,3.1625 2.32273838,0 L0,0 C0,3.634 2.45048899,6.71600001 5.80684598,7.71649999 L5.80684598,23 L8.12958435,23 L8.12958435,16.1 L10.4523227,16.1 L10.4523227,23 L12.7750611,23 L12.7750611,9.25750001 L17.3624694,13.8 L19,12.1785 L13.8086797,7.02649999 Z"></path>
                        </g>
                    </g>
                </g>
            </g>
        </SvgIcon>
    )
}
