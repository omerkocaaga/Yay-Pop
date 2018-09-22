import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'

class Header extends Component {
  render () {
    return (
      <Row>
        <Col>
          <div className='header-ctn'>
            <span className='hamburger hamburger--collapse'>
              <span className='hamburger-box'>
                <span className='hamburger-inner' />
              </span>
            </span>
            <div className='logo'>YAY-POP</div>
            <div className='lang'>
              <span>
                TR{' '}
              </span>
              <span>
                /
              </span>
              <span>
                {' '}EN
              </span>
            </div>
          </div>
        </Col>
      </Row>
    )
  }
}

export default Header
