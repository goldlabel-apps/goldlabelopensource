import React from "react";
import ReactPlayer from "react-player";
import {
    Box,
} from "@mui/material";

export type VideoBgShape = {
    id: string;
    title?: string;
    desktopURL?: string;
    mobileURL?: string;
};

export default function VideoBG(props:any) {
    const mcId = props.data;

    const video: VideoBgShape = {
        id: "videoId_fireworks_001",
        title: "Melliha Fireworks",
        desktopURL: "https://firebasestorage.googleapis.com/v0/b/brndwgn-content.appspot.com/o/fireworks.mp4?alt=media&token=d1aa21b2-1516-4641-86f5-74c46e845c04",
        mobileURL: "https://firebasestorage.googleapis.com/v0/b/brndwgn-content.appspot.com/o/fireworks_mobile.mp4?alt=media&token=800ad676-04dd-44c5-bb1d-3c5a94476669",
    }
    const {desktopURL} = video;

    return (
        <Box sx={{
            width: 1920, 
            height: 1080,
        }}> 
            <ReactPlayer 
                playing muted
                url={desktopURL}
                width={1920}
                height={1080}
                loop={true}
                onReady={()=>{}}
                onPlay={()=>{}}
            />
        </Box>
    )
};
