import React from 'react'
import {Container} from 'reactstrap'

import styled from 'styled-components'

import backOfCardImg from '../assets/RMBackofBusinessCard.png'

const Page1Div = styled.div `
  color: white;
  padding-top: 3vh;
  padding-bottom: 3vh;
  background-color: #C5C5C7;

  .page1Container {

    img {
      width: 100%;
    }
  }

`


const Page1 = () => {
  return (
    <Page1Div className="page1">
      <Container className="page1Container" >
        <img src={backOfCardImg} alt="Remedy Music, LLC" />
      </Container>
    </Page1Div>
  )
}

export default Page1

