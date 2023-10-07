// https://www.npmjs.com/package/react-youtube
// https://developers.google.com/youtube/player_parameters

import React from "react"
import YouTube from "react-youtube"

export default function YouTubePlayer(props: any) {
    const {url} = props
    const opts = {
        height: "213",
        width: '100%',
        playerVars: {
          autoplay: 0,
          color: "white",
          controls: 0,
          loop: 1,
        },
    }
    return <YouTube 
                videoId={url}
                opts={opts} 
                onReady={() => {
                    // console.log("ready.")
                }} 
            />
}

