import React from 'react'

import styled from 'styled-components'

import BGimg from '../assets/landingPage.jpg'
import mobileBGimg from '../assets/mobleBgs/landingPage.jpg'

const Page4Div = styled.div `
    min-height: 50vh;
    background-image: url(${BGimg});
    background-size: 100% 100%;
    background-position: center center;
    background-attachment: fixed;

    @media only screen and (max-width: 700px) {
      background-image: url(${mobileBGimg});
    }

`


const Page4 = () => {
  return (
    <Page4Div>
      Page 4
    </Page4Div>
  )
}

export default Page4

