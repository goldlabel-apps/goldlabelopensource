import * as React from 'react'
import { useTheme, SvgIcon } from '@mui/material'

export default function WindowsIcon(props: any) {
    const theme = useTheme()
    let color1 = theme.palette.primary.main
    return (
        <SvgIcon {...props}>
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="SVG">
                    <rect fill="none" x="0" y="0" width="24" height="24"></rect>
                    <g transform="translate(1, 1)" fill={color1} fillRule="nonzero">
                        <path d="M0,3.11483532 L8.99070253,1.89416748 L8.99463272,10.5397066 L0.00821298799,10.5907239 L0,3.11483532 Z M8.98641972,11.5358411 L8.99339823,20.1889149 L0.0069785205,18.9572212 L0.0064746562,11.477799 L8.98641972,11.5358411 Z M10.0763034,1.73448256 L21.9972287,0 L21.9972287,10.4297506 L10.0763034,10.5240973 L10.0763034,1.73448256 Z M22,11.6172156 L21.9972036,22 L10.0762782,20.3226806 L10.0595751,11.5977762 L22,11.6172156 Z"></path>
                    </g>
                </g>
            </g>
        </SvgIcon>
    )
}
