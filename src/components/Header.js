import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'

class Header extends Component {
  render () {
    const { isActive } = this.props
    console.log(this.props)
    return (
      <Row>
        <Col>
          <div className='header-ctn'>
            <span
              className={`hamburger hamburger--collapse ${isActive ? 'is-active' : ''}`}
              onClick={e => this.props.onClickHandler(e)}
            >
              <span className='hamburger-box'>
                <span className='hamburger-inner' />
              </span>
            </span>
            <div className='logo'><span>YAY{' '}</span>POP</div>
            <div className='lang'>
              <span>
                EN{' '}
              </span>
              <span>
                /
              </span>
              <span>
                {' '}TR
              </span>
            </div>
          </div>
        </Col>
      </Row>
    )
  }
}

export default Header
