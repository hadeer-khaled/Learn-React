import React from 'react'
import "App.css"

export default function ButtonGroup({children}) {

    const cloneButton = React.cloneElement(children  , {color: "white" , customClasses: "circle"})
  return (
    <div>{cloneButton}</div>
  )
}
