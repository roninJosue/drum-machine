import React from "react"

const Audio = ({url, id}) => {
  return(
    <audio className='clip' src={url} id={id} />
  )
}

export default Audio