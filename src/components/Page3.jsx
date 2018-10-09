import React from 'react'

import {Row, Col, Container} from 'reactstrap'
import styled from 'styled-components'

import chooseServiceImg from '../assets/multimedia.png'
import visualizeImg from '../assets/view.png'
import implementImg from '../assets/implement.png'
import partyDownImg from '../assets/toast.png'

const Page3Div = styled.div `
  background-color: black;
  color: white;
  text-align: center;
  padding-top: 5vh;
  padding-bottom: 5vh;

  #page3Container {
    text-align: center;
  }

  #page3ProcessHeaderSection {
    width: 100%
  }

  #page3ProcessHeaderTitle {
    width: 100%;
    font-family: 'PT Sans', sans-serif;
    font-weight: 900;
    font-style: italic;
    font-size: 3vw;
    font-variant: small-caps;

    @media only screen and (max-width: 1200px) and (min-width: 700px)  {
      font-size: 5vw;
    }

    @media only screen and (max-width: 700px) {
      font-size: 7vw;
    }
  }

  #page3ProcessHeaderDescription {
    font-family: 'Playfair Display', serif;
    font-size: 1.2vw;

    @media only screen and (max-width: 1200px) and (min-width: 700px)  {
      font-size: 2.4vw;
    }

    @media only screen and (max-width: 700px) {
      font-size: 3.7vw;
    }
  }

  .page3ProcessTitlesJobs {
    font-family: 'Codystar', cursive;
    font-size: 1vw;

    @media only screen and (max-width: 1200px) and (min-width: 700px)  {
      font-size: 2.5vw;
    }

    @media only screen and (max-width: 700px) {
      font-size: 5vw;
    }
  }

  .page3ProcessCards {

    img {
      width: 60%;
      padding: 1vh;
    }
  
    

    @media only screen and (max-width: 1200px) and (min-width: 700px)  {
      padding: 2vw;
      
      img {
        width: 30%;
      }
    }

    @media only screen and (max-width: 700px) {
      padding: 2vw;

      img {
        width: 60%;
      }
    }
  }

  .page3ProcessTitles {
    font-size: 1.2vw;
    font-family: 'PT Sans', sans-serif;

    @media only screen and (max-width: 1200px) and (min-width: 700px)  {
      font-size: 3.2vw;
    }

    @media only screen and (max-width: 700px) {
      font-size: 7vw;
    }
  }

`


const Page3 = () => {
  return (
    <Page3Div>
      <div className="work-area bg-1">
          <Container id="page3Container" className="" >
              <Row>
                <div className="section-title" id="page3ProcessHeaderSection">
                  <h2 id="page3ProcessHeaderTitle">The Reveler Process</h2>
                  <p id="page3ProcessHeaderDescription" >
                    Reveler's goal is to provide an amazing experience at a fair price. 
                      <br />
                    In order to guarantee the perfect experience within the budget, Reveler has a <br /><strong>4 step Experience Guarantee Process!</strong>
                  </p>
                </div>
              </Row>
              <Row>
                  <Col className="" xl="3" md="6" xs="12">
                      <div className="work-wrap page3ProcessCards">
                        <div className="page3ProcessTitlesJobs" >Together</div>
                        <div className="page3ProcessTitles" >Choose a Service</div>
                        <img src={chooseServiceImg} alt="Choose Service icon" />
                      </div>
                  </Col>
                  <Col className="" xl="3" md="6" xs="12">
                      <div className="work-wrap page3ProcessCards">
                        <div className="page3ProcessTitlesJobs" >Together</div>
                        <div className="page3ProcessTitles">Visualize the Experience</div>
                        <img src={visualizeImg} alt="Visualize Experience icon" />
                      </div>
                  </Col>
                  <Col className="" xl="3" md="6" xs="12">
                      <div className="work-wrap page3ProcessCards">
                        <div className="page3ProcessTitlesJobs " >Our Job</div>
                        <div className="page3ProcessTitles" >Implement the Plan</div>
                        <img src={implementImg} alt="Implement Plan icon" />
                      </div>
                  </Col>
                  <Col className="" xl="3" md="6" xs="12">
                      <div className="work-wrap page3ProcessCards">
                        <div className="page3ProcessTitlesJobs" >Your Job</div>
                        <div className="page3ProcessTitles" >Party Down</div>  
                        <img src={partyDownImg} alt="Party Down icon" />
                      </div>
                  </Col>
              </Row>
          </Container>
      </div>
    </Page3Div>
  )
}

export default Page3

