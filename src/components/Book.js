import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import { images } from '../utilities/data.json'
import map from 'lodash.map'

class Book extends Component {
  render () {
    const arr = []
    const i = 82
    for (let index = 0; index < i; index++) {
      arr.push(index)
    }
    return (
      <Row className='book'>
        {map(images, (image, index) => {
          let { url } = image
          return (
            <Col key={index} lg='2' md='6' sm='6' xs='6' className='page-ctn'>
              <a href='#'>
                <img
                  className='mx-auto img-fluid'
                  src={process.env.PUBLIC_URL + url}
                />
              </a>

              <div>{index}</div>
            </Col>
          )
        })}

      </Row>
    )
  }
}

export default Book
