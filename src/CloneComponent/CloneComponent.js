import React from 'react'
import Button from './Button'
import ButtonGroup from './ButtonGroup'
import "App.css"


export default function CloneComponent() {

  const callBackFunc = (val)=>{
    console.log(val)
  }
  return (
    <>
        <div>CloneComponent</div>

        <Button callBackFunc={callBackFunc} color={"red"}>Single Button</Button>

        <ButtonGroup>
            <Button callBackFunc={callBackFunc}> 1  </Button>
            <Button callBackFunc={callBackFunc}> 2 </Button>
            <Button callBackFunc={callBackFunc}> 3  </Button>
        </ButtonGroup>
    </>
  )
}
