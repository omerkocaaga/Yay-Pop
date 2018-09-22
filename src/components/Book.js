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
      <Row className='book'>
        {map(arr, (item, index) => {
          return (
            <Col lg='2' md='6' sm='6' xs='6' key={index} className='page-ctn'>
              <a>
                <img
                  className='mx-auto img-fluid'
                  src='https://via.placeholder.com/200x280'
                />
              </a>
              <div>{item}</div>

            </Col>
          )
        })}

      </Row>
    )
  }
}

export default Book
