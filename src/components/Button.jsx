import React from 'react'

const Button = ({label, path, className}) => {

  if (path !== "#" && path !== undefined) {
    return <a href={path} className={className}>{label}</a>;
  }

  return <button className={className}>{label}</button>;


}

export default Button
