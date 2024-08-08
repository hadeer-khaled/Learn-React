import React from 'react'
import "App.css"

export default function ShapeOne({item}) {
  return (
    <>
        <div className='shapeone'>
          <p>{item.name}</p>
        </div>
    </>
  )
}
