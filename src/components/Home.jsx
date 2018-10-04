import React from 'react'

import styled from 'styled-components'

import LandingPage from './LandingPage'
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'


const HomeDiv = styled.div `
  background-color:transparent;
  padding-top: 9vh;

  @media only screen and (max-width: 700px) {
    padding-top: 14vh;
  }
`

const Home = () => {
  return (
    <HomeDiv>
      <LandingPage />
      <Page1 />
      <Page2 />
      <Page3 />
    </HomeDiv>
  )
}

export default Home