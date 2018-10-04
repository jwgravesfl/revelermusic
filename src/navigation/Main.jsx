import React, { Component } from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import NavBar from './NavBar'
import Home from '../components/Home'
import LandingPage from '../components/LandingPage'
import Page1 from '../components/Page1'
import Page2 from '../components/Page2'
import Page3 from '../components/Page3'

import styled from 'styled-components'


const MainDiv = styled.div `

background-color: transparent;



`


export default class Main extends Component {
  render() {
    return (
      <MainDiv>
      <NavBar /> 
      <div id="mainViewer">
      <BrowserRouter>
       
      <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/landingPage" component={LandingPage} />
          <Route path="/page1" component={Page1} />
          <Route path="/page2" component={Page2} />
          <Route path="/page3" component={Page3} />
        </Switch>
      </BrowserRouter>
      </div>
      </MainDiv>
    )
  }
}
