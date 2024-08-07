import React from 'react'
import "App.css"

export default function ButtonGroup({children }) {

    // const cloneButton = React.cloneElement(children  , {color: "white" , customClasses: "circle"})


    const clonedButtons = React.Children.map(children, (child) =>
      React.cloneElement(child, { color: "white", customClasses: "circle" , callBackFunc : child.props.callBackFunc })
    );
  


  return (
    <div>{clonedButtons}</div>
  )
}
