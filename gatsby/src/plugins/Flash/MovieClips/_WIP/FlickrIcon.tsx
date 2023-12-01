import React from "react";
import {
    useTheme,
} from "@mui/material";

const FlickrIcon = () => {
    let c = `#000`;
    const theme = useTheme();
    c = theme.palette.primary.main;

    return (<>
            <svg width="24px" height="24px" viewBox="0 0 24 24">
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="flickr">
                        <rect fill="none" x="0" y="0" width="24" height="24"></rect>
                        <path d="M19.8571429,2 L4.14285714,2 C2.95982143,2 2,2.95982143 2,4.14285714 L2,19.8571429 C2,21.0401786 2.95982143,22 4.14285714,22 L19.8571429,22 C21.0401786,22 22,21.0401786 22,19.8571429 L22,4.14285714 C22,2.95982143 21.0401786,2 19.8571429,2 Z M8,15 C6.34173228,15 5,13.6582677 5,12 C5,10.3417323 6.34173228,9 8,9 C9.65826772,9 11,10.3417323 11,12 C11,13.6582677 9.65826772,15 8,15 Z M16,15 C14.3417323,15 13,13.6582677 13,12 C13,10.3417323 14.3417323,9 16,9 C17.6582677,9 19,10.3417323 19,12 C19,13.6582677 17.6582677,15 16,15 Z" fill={c} fillRule="nonzero"></path>
                    </g>
                </g>
            </svg>
        </>
    )
};
export default FlickrIcon;
