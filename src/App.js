import React, { Component } from 'react'
import { Container } from 'reactstrap'
import Main from './components/Main'
import Header from './components/Header'
import Book from './components/Book'
import './App.css'
import './assets/style/styles.css'
import './assets/style/hamburgers.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isActive: false
    }
    this.rootOnClickHandler = this.rootOnClickHandler.bind(this)
  }

  rootOnClickHandler (e) {
    console.log(e)
    e.persist()
    if (e) {
      const { isActive } = this.state
      this.setState({
        isActive: !isActive
      })
    }
  }

  render () {
    const { isActive = false } = this.state
    return (
      <Container fluid>
        <Header onClickHandler={this.rootOnClickHandler} isActive={isActive} />
        <Main />
        <Book />
      </Container>
    )
  }
}

export default App
