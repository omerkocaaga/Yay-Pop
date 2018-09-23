import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'

class Header extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    const { isActive, menuType } = this.props
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
            {menuType === '' &&
              <div className='logo'><span>YAY{' '}</span>POP</div>}
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
          {isActive &&
            <ul className='menu-ctn'>
              <li onClick={e => this.props.menuHandler('hakkinda')}>
                HAKKINDA
              </li>
              <li onClick={e => this.props.menuHandler('icindekiler')}>
                İÇİNDEKİLER
              </li>
              <li onClick={e => this.props.menuHandler('kunye')}>KÜNYE</li>
              <li onClick={e => this.props.scrollToHandler(e)}>SAYFALAR</li>
              <a href='#'><li>İNDİR</li></a>
            </ul>}
        </Col>
      </Row>
    )
  }
}

export default Header
