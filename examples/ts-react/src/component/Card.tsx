import React, { FC, SyntheticEvent } from 'react'

type CardProps = {
  title: string,
  description: string
  numVotos?: number
  children: React.ReactNode
  handleClick?: (e: SyntheticEvent) => void
}

const Card: FC<CardProps> = (props) => {
  const { title, description, children, handleClick } = props
  return(
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      {children}

      <button onClick={handleClick}>
        Ver detalle
      </button>
    </div>
  )
}

export default Card
