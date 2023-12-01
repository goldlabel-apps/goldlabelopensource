import * as React from "react";
import {useTheme} from "@mui/material";

export default function TemplateSVG(props: any) {
    const theme = useTheme()
    const bgColor = theme.palette.secondary.main;
    const gridColor = '#fff';

    return (
        <svg {...props} viewBox="0 0 512 512">
            <g id="TemplateSVG" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g transform="translate(2.000000, 2.000000)">
                    <path id="templateSVGgrid" d="M0,0 L512,512 M512,0 L0,512 M33,0 L33,512 M159,0 L159,512 M256,0 L256,512 M353,0 L353,512 M479,0 L479,512 M0,479 L512,479 M0,353 L512,353 M0,256 L512,256 M0,159 L512,159 M0,33 L512,33 M256,479 C379.159499,479 479,379.159499 479,256 C479,132.840501 379.159499,33 256,33 C132.840501,33 33,132.840501 33,256 C33,379.159499 132.840501,479 256,479 Z M256,393 C331.663011,393 393,331.663011 393,256 C393,180.336989 331.663011,119 256,119 C180.336989,119 119,180.336989 119,256 C119,331.663011 180.336989,393 256,393 Z M256,353 C309.571621,353 353,309.571621 353,256 C353,202.428379 309.571621,159 256,159 C202.428379,159 159,202.428379 159,256 C159,309.571621 202.428379,353 256,353 Z" strokeOpacity="0.5" stroke={gridColor} strokeWidth="2" strokeLinecap="square"></path>
                    <rect id="templateSVGBg" fill={bgColor} fillOpacity="0.33" x="0" y="0" width="512" height="512"></rect>
                </g>
            </g>
        </svg>
    )
};
