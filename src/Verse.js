import React from 'react'

function Verse({verse}) {
  return (
    <div>
        <h1>{verse.verse}</h1>
        <p>{verse.quote}</p>
        <small>{verse.likes} likes</small>
    </div>
  )
}

export default Verse