import React from 'react'
import "App.css"
import ShapeOne from './ShapeOne'
import ShapeTwo from './ShapeTwo'


export default function DynamicComponent() {
    const data = [
      { componentName : ShapeOne,
        data:{id: 1, name:"hadeer" , age : 24}
      },
      {
        componentName : ShapeTwo,
        data: {id: 2, name:"rahma" , age : 20}
      },
    ];

    const child  = data.map((el)=> <el.componentName data={el.data} key={el.data.id}></el.componentName>)
    
    return (
      <div>
          {child}
      </div>
    )
}
