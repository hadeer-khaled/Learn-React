import React from 'react'
import "App.css"

export default function ShapeTwo({data}) {
  return (
    <>
        <div className='shapetwo'>
          <p>{data.name}</p>
          <p>{data.age}</p>
        </div>
    </>
  )
}
