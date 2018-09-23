import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import logo from '.././assets/img/logo.png'
import logo_2x from '.././assets/img/logo@2x.png'
import onagore from '.././assets/img/onagore.png'
import onagore_2x from '.././assets/img/onagore@2x.png'

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
                className={`${isEnglish ? 'en' : ''} ${menuType === 'kunye'}`}
                onClick={e => this.props.englishHandler(e)}
              >
                EN
              </span>
              <span>
                {'  '}{'  '}/{'  '}{'  '}
              </span>
              <span
                className={`${isTurkish ? 'tr' : ''} ${menuType === 'kunye'}`}
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
                {isTurkish &&
                  <span
                    className={`${menuType === 'hakkinda' ? 'active' : ''} ${menuType === 'kunye'}`}
                  >
                    HAKKINDA
                  </span>}
                {isEnglish &&
                  <span
                    className={`${menuType === 'hakkinda' ? 'active' : ''} ${menuType === 'kunye'}`}
                  >
                    ABOUT
                  </span>}

              </li>
              <li
                onClick={e => this.props.menuHandler('icindekiler')}
                // onMouseEnter={e => this.props.hoverHandler('icindekiler')}
                // onMouseLeave={e => this.props.hoverHandler('')}
              >
                {isTurkish &&
                  <span
                    className={`${menuType === 'icindekiler' ? 'active' : ''} ${menuType === 'kunye'}`}
                  >
                    İÇİNDEKİLER
                  </span>}
                {isEnglish &&
                  <span
                    className={`${menuType === 'icindekiler' ? 'active' : ''} ${menuType === 'kunye'}`}
                  >
                    TABLE OF CONTENTS
                  </span>}
              </li>
              <li
                onClick={e => this.props.menuHandler('kunye')}
                // onMouseEnter={e => this.props.hoverHandler('kunye')}
                // onMouseLeave={e => this.props.hoverHandler('')}
              >
                {isTurkish &&
                  <span
                    className={`${menuType === 'kunye' ? 'kunye' : ''} ${menuType === 'kunye'}`}
                  >
                    KÜNYE
                  </span>}
                {isEnglish &&
                  <span
                    className={`${menuType === 'kunye' ? 'kunye' : ''} ${menuType === 'kunye'}`}
                  >
                    PEOPLE
                  </span>}

              </li>
              <li onClick={e => this.props.scrollToHandler(e)}>
                {isTurkish &&
                  <span className={`${menuType === 'kunye'}`}>SAYFALAR</span>}
                {isEnglish &&
                  <span className={`${menuType === 'kunye'}`}>PAGES</span>}
              </li>
              <a href='#'>
                <li>
                  {isTurkish &&
                    <span className={`${menuType === 'kunye'}`}>İNDİR</span>}
                  {isEnglish &&
                    <span className={`${menuType === 'kunye'}`}>DOWNLOAD</span>}

                </li>
              </a>
            </ul>}
          <a href='http://onagore.com' className='onagore-ctn'>
            {!isActive && <span>Bir</span>}
            <img
              className='img-fluid onagore'
              src={onagore}
              srcSet={`${onagore_2x}, 2x`}
            />
            {!isActive && <span>Projesi</span>}
          </a>

        </Col>
      </Row>
    )
  }
}

export default Header
