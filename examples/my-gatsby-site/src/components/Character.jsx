import React from 'react'

const Character = (props) => {
  return(
    <div>
      <h2>{props.name}</h2>
      <img src={props.image?.file?.url} alt={props.name} />
    </div>
  )
}

export default Character
