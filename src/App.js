import React from 'react'

import styled from 'styled-components'


import Main from './navigation/Main'

import BGimg from './assets/landingPage.jpg'
import mobileBGimg from './assets/mobleBgs/landingPage.jpg'

const AppDiv = styled.div `
height: 100vh;
background-image: url(${BGimg});
background-size: 100% 100%;
background-position: center center;
background-attachment: fixed;

@media only screen and (max-width: 700px) {
  background-image: url(${mobileBGimg});
}
`



const App = () => {
  return (
    <AppDiv>
      <Main />
    </AppDiv>
  )
}

App.propTypes = {

}

export default App

