import React from "react"

const Audio = ({url, id}) => {
  return(
    <audio src={url} id={id} />
  )
}

export default Audio