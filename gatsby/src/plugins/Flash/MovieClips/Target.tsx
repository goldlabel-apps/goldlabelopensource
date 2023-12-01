import React from "react";
import { 
    useTheme,
    IconButton,
} from "@mui/material";
import {
    useRAAFDispatch,
} from "../../@raaf";


const Target = (props: any) => {
    const theme = useTheme();
    const secondary = theme.palette.secondary.main;
    const primary = theme.palette.primary.main;
    const dispatch = useRAAFDispatch()
    return (
        <IconButton
            style={{ width: 250, height: 250 }}
            onClick={(e: React.MouseEvent) => {
                e.preventDefault();
                alert("call you? ok.");
            }}>
                <svg {...props} viewBox="0 0 250 250">
                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g id="RAAFRoundel">
                            <circle id="blue" fill={secondary} fillRule="nonzero" cx="125" cy="125" r="125"></circle>
                            <circle id="white" fill="#FFFFFF" fillRule="nonzero" cx="125" cy="125" r="83.3333333"></circle>
                            <circle id="red" fill={primary} fillRule="nonzero" cx="125" cy="125" r="41.6666667"></circle>
                            <line x1="4.5" y1="127.5" x2="245.5" y2="124.5" id="horz" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="square"></line>
                            <line x1="125" y1="2.5" x2="125.5" y2="245.5" id="vert" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="square"></line>
                        </g>
                    </g>
                </svg>
        </IconButton>
    )
}

export default Target;
