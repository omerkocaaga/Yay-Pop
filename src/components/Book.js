import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import map from 'lodash.map'

class Book extends Component {
  render () {
    const arr = []
    const i = 82
    for (let index = 0; index < i; index++) {
      arr.push(index)
    }
    console.log(arr.length)
    return (
      <Row>
        <Col md='4'>
          <div className='pages'>
            <div className='page' />
            <div className='page' />
          </div>
        </Col>
      </Row>
    )
  }
}

export default Book
