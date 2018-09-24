import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import { images } from '../utilities/data.json'
import map from 'lodash.map'

class Book extends Component {
  render () {
    return (
      <Row className='book'>
        {map(images, (image, index) => {
          let { url, url_2x, pdf } = image
          return (
            <Col key={index} lg='2' md='6' sm='6' xs='6' className='page-ctn'>
              <a href={process.env.PUBLIC_URL + pdf}>
                <img
                  className='mx-auto img-fluid'
                  src={process.env.PUBLIC_URL + url}
                  srcSet={`${process.env.PUBLIC_URL + url_2x}, 2x`}
                  alt={index}
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
