import React, { Component } from 'react'
import { Container } from 'reactstrap'
import { Helmet } from 'react-helmet'
import Main from './components/Main'
import Header from './components/Header'
import Book from './components/Book'
import './App.css'
import './assets/style/styles.css'
import './assets/style/hamburgers.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.book = React.createRef()
    this.state = {
      isActive: false,
      scrollPages: false,
      menuType: ''
    }
    this.rootOnClickHandler = this.rootOnClickHandler.bind(this)
    this.rootScrollToHandler = this.rootScrollToHandler.bind(this)
    this.rootMenuHandler = this.rootMenuHandler.bind(this)
    this.rootHoverHandler = this.rootHoverHandler.bind(this)
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

  rootHoverHandler (type) {
    this.setState({
      hoverType: type
    })
  }

  render () {
    const {
      isActive = false,
      menuType = '',
      hoverType = '',
      scrollPages
    } = this.state
    console.log(scrollPages)
    return (
      <Container fluid>
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
          isActive={isActive}
          menuType={menuType}
        />
        <Main isActive={isActive} menuType={menuType} />
        <div ref={this.book}>
          <Book />

        </div>
      </Container>
    )
  }
}

export default App
