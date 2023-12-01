import {ImageBgShape} from "../../types";
import React from "react";
import {
    Box,
} from "@mui/material";

export default function ImageBG(props:ImageBgShape) {
    const {src} = props;
    return (
        <Box sx={{
            width: 1366, 
            height: 768,
        }}> 
           <img alt="Flash background image" src={src} />
        </Box>
    )
};