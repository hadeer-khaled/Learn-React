import React from 'react'
import "App.css"

export default function ShapeOne({data}) {
  return (
    <>
        <div className='shapeone'>
          <p>{data.name}</p>
          <p>{data.age}</p>
        </div>
    </>
  )
}
