import React from 'react'
import "App.css"

export default function Button({children , color , customClasses , callBackFunc}) {
  return (
    <button style={{color}} 
            className={`${customClasses  ? 'button ' + customClasses : 'button' }`}
            onClick={()=>{callBackFunc(children)}} >
        {children}
    </button>
  )
}
