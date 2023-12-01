import * as React from "react";
import {useTheme} from "@mui/material";

export default function WhatSVG(props: any) {
    const theme = useTheme()
    let color = theme.palette.primary.main;
    if (props.color) color = props.color;
    
    return (
        <svg {...props} viewBox="0 0 344 90">
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g transform="translate(0.680000, 0.000000)" fill={color} fillRule="nonzero">
                    <path d="M70.08,90 L100.32,90 L120.96,0 L95.28,0 L84.6,58.08 L80.28,58.08 L72.6,27.96 L72.6,12.36 L48.48,12.36 L48.48,28.08 L40.68,58.08 L36.48,58.08 L25.68,0 L0,0 L20.76,90 L50.88,90 L60.48,54.48 L70.08,90 Z M176.536,90 L202.216,90 L202.216,0 L176.536,0 L176.536,33.48 L154.096,33.48 L154.096,0 L128.536,0 L128.536,90 L154.096,90 L154.096,52.68 L176.536,52.68 L176.536,90 Z M266.288,90 L292.448,90 L271.808,0 L230.408,0 L209.648,90 L235.808,90 L239.408,70.44 L262.688,70.44 L266.288,90 Z M248.168,22.56 L253.928,22.56 L259.208,51.48 L242.888,51.48 L248.168,22.56 Z M327.366,90 L327.366,20.52 L343.206,20.52 L343.206,0 L285.846,0 L285.846,20.52 L301.806,20.52 L301.806,90 L327.366,90 Z"></path>
                </g>
            </g>
        </svg>
    )
};
