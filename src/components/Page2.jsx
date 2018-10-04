import React from 'react'

import styled from 'styled-components'

import BGimg from '../assets/landingPage.jpg'
import mobileBGimg from '../assets/mobleBgs/landingPage.jpg'

const Page2Div = styled.div `
height: 100vh;
background-image: url(${BGimg});
background-size: 100% 100%;
background-position: center center;
background-attachment: fixed;

@media only screen and (max-width: 700px) {
  background-image: url(${mobileBGimg});
}

`


const Page2 = () => {
  return (
    <Page2Div>
      Page 2
    </Page2Div>
  )
}

export default Page2

