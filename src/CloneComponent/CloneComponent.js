import React from 'react'
import Button from './Button'
import ButtonGroup from './ButtonGroup'
import "App.css"


export default function CloneComponent() {

  return (
    <>
        <div>CloneComponent</div>

        <Button color={"red"}>Single Button</Button>

        <ButtonGroup>
            <Button>First</Button>
        </ButtonGroup>
    </>
  )
}
