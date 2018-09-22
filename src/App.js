import React, { Component } from 'react'
import { Container } from 'reactstrap'
import Main from './components/Main'
import Header from './components/Header'
import './App.css'
import './assets/style/styles.css'
import './assets/style/hamburgers.css'

class App extends Component {
  render () {
    return (
      <Container fluid>
        <Header />
        <Main />
      </Container>
    )
  }
}

export default App
