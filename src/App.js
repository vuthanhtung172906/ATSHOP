import React, { Component } from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import Header from './components/Header'
import Sections from './components/Sections'
import {DataProvider} from "./components/Context"

export class App extends Component {
  render() {
    return (
      <DataProvider>
            <div className="app">
              <Router>
                <Header/>
                <Sections/>
              </Router>
            </div>
      </DataProvider>
    )
  }
}

export default App
