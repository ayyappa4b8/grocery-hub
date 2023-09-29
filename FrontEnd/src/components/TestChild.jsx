import React from 'react'
import { Button } from 'react-bootstrap'

const TestChild = (props) => {
  return (
    <div><Button onClick={props.incCount}>Inc Click</Button>
    <Button onClick={props.decCount}>Dec Click</Button></div>
  )
}

export default TestChild