import React, { Component } from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import NavBar from './NavBar'
import Page1 from '../components/Page1'
import Page2 from '../components/Page2'
import Page3 from '../components/Page3'

export default class Main extends Component {
  render() {
    return (
      
      <BrowserRouter>
        <Switch>
        <NavBar />
          <Route exact path="/" component={Page1} />
          <Route path="/page2" component={Page2} />
          <Route path="/page3" component={Page3} />
        </Switch>
      </BrowserRouter>
    )
  }
}
