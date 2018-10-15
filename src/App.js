import React, { Component } from 'react'
import { Container } from 'reactstrap'
import { Helmet } from 'react-helmet'
import Main from './components/Main'
import Header from './components/Header'
import Book from './components/Book'
import './App.css'
import './assets/style/styles.css'
import './assets/style/hamburgers.css'
import poster from './assets/img/poster.png'
import poster_2x from './assets/img/poster@2x.png'

class App extends Component {
  constructor (props) {
    super(props)
    this.book = React.createRef()
    this.state = {
      isActive: false,
      scrollPages: false,
      menuType: '',
      isEnglish: false,
      isTurkish: true,
      isModalActive: true
    }
    this.rootOnClickHandler = this.rootOnClickHandler.bind(this)
    this.rootScrollToHandler = this.rootScrollToHandler.bind(this)
    this.rootMenuHandler = this.rootMenuHandler.bind(this)
    this.rootEnglishHandler = this.rootEnglishHandler.bind(this)
    this.rootTurkishHandler = this.rootTurkishHandler.bind(this)
    // this.rootHoverHandler = this.rootHoverHandler.bind(this)
  }

  componentDidUpdate () {
    const { scrollPages = false } = this.state
    if (scrollPages) {
      const { current: { offsetTop } } = this.book
      window.scrollTo({ top: offsetTop, behavior: 'smooth' })
      this.setState({
        scrollPages: false
      })
    }
  }

  rootOnClickHandler (e) {
    e.persist()
    if (e) {
      const { isActive = false } = this.state
      this.setState({
        isActive: !isActive,
        scrollPages: false,
        menuType: '',
        hoverType: ''
      })
    }
  }

  rootScrollToHandler (e) {
    if (e) {
      this.setState({
        scrollPages: true
      })
    }
  }

  rootMenuHandler (type) {
    this.setState({
      menuType: type
    })
  }

  rootEnglishHandler (e) {
    this.setState({
      isEnglish: true,
      isTurkish: false
    })
  }

  rootTurkishHandler (e) {
    this.setState({
      isEnglish: false,
      isTurkish: true
    })
  }

  // rootHoverHandler (type) {
  //   this.setState({
  //     hoverType: type
  //   })
  // }

  render () {
    const {
      isActive = false,
      menuType = '',
      hoverType = '',
      isEnglish = false,
      isTurkish = true,
      isModalActive = true
    } = this.state
    return (
      <div>
        {isModalActive &&
          <div className='modal-ctn'>
            <img
              className='mx-auto img-fluid wall'
              src={poster}
              srcSet={`${poster_2x}, 2x`}
              alt={poster}
            />
            <span
              onClick={() => {
                this.setState({ isModalActive: false })
              }}
            >
              X
            </span>
          </div>}

        <Container
          fluid
          className={`${menuType === 'kunye' ? 'key-black-text' : ''}`}
        >
          <Helmet>
            <body
              className={`${isActive ? 'magenta' : ''} ${hoverType === 'hakkinda' ? 'cyan' : ''} ${hoverType === 'icindekiler' ? 'yellow' : ''} ${hoverType === 'kunye' ? 'key-black' : ''} ${menuType === 'hakkinda' ? 'cyan' : ''} ${menuType === 'icindekiler' ? 'yellow' : ''} ${menuType === 'kunye' ? 'key-black' : ''}`}
            />
          </Helmet>
          <Header
            onClickHandler={this.rootOnClickHandler}
            scrollToHandler={this.rootScrollToHandler}
            menuHandler={this.rootMenuHandler}
            hoverHandler={this.rootHoverHandler}
            englishHandler={this.rootEnglishHandler}
            turkishHandler={this.rootTurkishHandler}
            isActive={isActive}
            menuType={menuType}
            isEnglish={isEnglish}
            isTurkish={isTurkish}
          />
          <Main
            isActive={isActive}
            menuType={menuType}
            isEnglish={isEnglish}
            isTurkish={isTurkish}
          />
          <div ref={this.book}>
            <Book />

          </div>
        </Container>
      </div>
    )
  }
}

export default App
