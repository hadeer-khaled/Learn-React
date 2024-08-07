import React from 'react'
import "App.css"

export default function Button({children , color , customClasses}) {
  return (
    <button style={{color}} className={`${customClasses  ? 'button ' + customClasses : 'button' }`}>
        {children}
    </button>
  )
}
