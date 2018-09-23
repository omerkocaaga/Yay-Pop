import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import logo from '.././assets/img/logo.png'
import logo_2x from '.././assets/img/logo@2x.png'

class Header extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    const { isActive, menuType, isEnglish, isTurkish } = this.props
    return (
      <Row>
        <Col>
          <div className='header-ctn'>
            <span
              className={`hamburger hamburger--collapse ${isActive ? 'is-active' : ''}`}
              onClick={e => this.props.onClickHandler(e)}
            >
              <span className='hamburger-box'>
                <span
                  className={`hamburger-inner ${menuType === 'kunye' ? 'white-bg' : ''}`}
                />
              </span>

            </span>
            {menuType === '' &&
              <img
                className='logo mx-auto img-fluid'
                src={logo}
                srcSet={`${logo_2x}, 2x`}
              />}
            <div className='lang'>
              <span
                className={isEnglish ? 'en' : ''}
                onClick={e => this.props.englishHandler(e)}
              >
                EN
              </span>
              <span>
                {'  '}{'  '}/{'  '}{'  '}
              </span>
              <span
                className={isTurkish ? 'tr' : ''}
                onClick={e => this.props.turkishHandler(e)}
              >
                TR
              </span>
            </div>
          </div>
          {isActive &&
            <ul className='menu-ctn'>
              <li
                onClick={e => this.props.menuHandler('hakkinda')}
                // onMouseEnter={e => this.props.hoverHandler('hakkinda')}
                // onMouseLeave={e => this.props.hoverHandler('')}
              >
                {isTurkish && <span>HAKKINDA</span>}
                {isEnglish && <span>ABOUT</span>}

              </li>
              <li
                onClick={e => this.props.menuHandler('icindekiler')}
                // onMouseEnter={e => this.props.hoverHandler('icindekiler')}
                // onMouseLeave={e => this.props.hoverHandler('')}
              >
                {isTurkish && <span>İÇİNDEKİLER</span>}
                {isEnglish && <span>TABLE OF CONTENTS</span>}
              </li>
              <li
                onClick={e => this.props.menuHandler('kunye')}
                // onMouseEnter={e => this.props.hoverHandler('kunye')}
                // onMouseLeave={e => this.props.hoverHandler('')}
              >
                {isTurkish && <span>KÜNYE</span>}
                {isEnglish && <span>PEOPLE</span>}

              </li>
              <li onClick={e => this.props.scrollToHandler(e)}>
                {isTurkish && <span>SAYFALAR</span>}
                {isEnglish && <span>PAGES</span>}
              </li>
              <a href='#'>
                <li>
                  {isTurkish && <span>İNDİR</span>}
                  {isEnglish && <span>DOWNLOAD</span>}

                </li>
              </a>
            </ul>}
        </Col>
      </Row>
    )
  }
}

export default Header
