import * as React from 'react'
import { useTheme, SvgIcon } from '@mui/material'

export default function ChromeIcon(props: any) {
    const theme = useTheme()
    let color1 = theme.palette.primary.main
    return (
        <SvgIcon {...props}>
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="ChromeIcon">
                <rect id="bg" fill="none" x="0" y="0" width="24" height="24"></rect>
                <g fill={color1} fillRule="nonzero">
                    <g id="google-chrome">
                        <path d="M11,19.8 L14.806,13.2 L14.795,13.2 C15.169,12.54 15.4,11.803 15.4,11 C15.4,9.68 14.806,8.503 13.882,7.7 L19.151,7.7 C19.569,8.723 19.8,9.834 19.8,11 C19.8,15.862 15.862,19.8 11,19.8 M2.2,11 C2.2,9.394 2.629,7.898 3.377,6.6 L7.194,13.2 L7.205,13.2 C7.964,14.509 9.35,15.4 11,15.4 C11.495,15.4 11.968,15.301 12.419,15.147 L9.779,19.701 C5.5,19.107 2.2,15.444 2.2,11 M14.3,11 C14.3,12.826 12.826,14.3 11,14.3 C9.174,14.3 7.7,12.826 7.7,11 C7.7,9.174 9.174,7.7 11,7.7 C12.826,7.7 14.3,9.174 14.3,11 M11,2.2 C14.256,2.2 17.094,3.971 18.612,6.6 L11,6.6 C8.866,6.6 7.095,8.118 6.688,10.131 L4.07,5.588 C5.676,3.531 8.184,2.2 11,2.2 M11,0 C4.928,0 0,4.928 0,11 C0,17.072 4.928,22 11,22 C17.072,22 22,17.072 22,11 C22,4.928 17.072,0 11,0 Z"></path>
                    </g>
                </g>
            </g>
        </g>
        </SvgIcon>
    )
}
