import React from 'react'

const ButtonWrapper = ({ title, handleClick }) => {
  return (
    <button onClick={handleClick}>
      {title}
    </button>
  )
}

export default ButtonWrapper
