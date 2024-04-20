import React from "react"
import ReactPlayer from "react-player"

export default function VideoPlayer(props: any) {
  // https://www.npmjs.com/package/react-player
  const {options} = props
  if (!options) return null
  let w = "100%"
  let h = 180
  const {
    url,
    width,
    height,
  } = options
  if (height) h = height
  if (width) w = width

  return <>
    <ReactPlayer 
      url={url}
      height={h}
      width={w}
    />
    {/* <pre>
      {JSON.stringify(options, null, 2)}
    </pre> */}
  </>

}
