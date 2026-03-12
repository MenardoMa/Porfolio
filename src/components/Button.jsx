import React from 'react'

const Button = ({label, path, className}) => {
  return (
    <button className={className}>
      {label}
    </button>
  )
}

export default Button
