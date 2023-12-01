import React from "react";
import { 
    IconButton, 
    useTheme,
} from "@mui/material";
import {
    pingpongballAS,
    useFeatureDispatch,
} from "../../../../Features";

const Pingpongball = (props: any) => {
    const theme = useTheme();
    const dispatch = useFeatureDispatch();
    const ballColor = theme.palette.secondary.main;
    const smileColor = theme.palette.primary.main;

    return (
        <IconButton
            style={{ width: 100, height: 100 }}
            onClick={(e: React.MouseEvent) => {
                e.preventDefault();
                dispatch(pingpongballAS("BOINK"));
            }}>
            <svg {...props} viewBox="0 0 100 100">
                <g stroke="none" fill="none" fillRule="evenodd">
                    <g fillRule="nonzero">
                        <path
                            d="M0.0349381169,48.1344091 C1.0793333,20.5394147 24.278239,-0.993480845 51.8769372,0.0353871247 C79.4756354,1.06647727 101.007953,24.2704499 99.9635579,51.8654444 C98.9413839,79.4604389 75.7424782,100.995557 48.14378,99.9644664 C20.5450818,98.9333763 -0.98723589,75.7294036 0.0349381169,48.1344091"
                            fill={ballColor}
                        ></path>
                        <path
                            d="M86.8686869,66.0164494 C63.3175833,72.508427 33.3333333,57.7319588 33.3333333,57.7319588 C53.9461139,101.019652 86.8686869,66.0164494 86.8686869,66.0164494"
                            fill={smileColor}
                        ></path>
                    </g>
                </g>
            </svg>
        </IconButton>
    )
}

export default Pingpongball;
