import React from 'react'
import {Row, Col, Card, CardTitle, CardText, CardBody } from 'reactstrap'

import styled from 'styled-components'

import BGimg from '../assets/landingPage.jpg'
import mobileBGimg from '../assets/mobleBgs/landingPage.jpg'

import liveMusicImg from '../assets/sliders.png'
import openMicImg from '../assets/guitar-player.png'
import djImg from '../assets/dj.png'
import karaokeImg from '../assets/singer.png'

const Page2Div = styled.div `
    min-height: 15vh;
    background-image: url(${BGimg});
    background-size: 100% 100%;
    background-position: center center;
    background-attachment: fixed;

    @media only screen and (max-width: 700px) {
      background-image: url(${mobileBGimg});
    }

    padding: 2vw;

    .colStyle {
      text-align: center;
      color: white;

      img {
        width: 5vw;
      }

      @media only screen and (max-width: 1200px) and (min-width: 700px)  {
        padding-top: 2vh;

        img {
          width: 10vw;
        }
      }

      @media only screen and (max-width: 700px) {
        padding-top: 2vh;

        img {
          width: 23vw;
        }
      }

    }

    .servicesCard {
      background: rgba(0, 0, 0, 0.8);
      height: 100%;
      
    }

    .servicesTitle {
      font-family: 'Montserrat', sans-serif;
      font-size: 2.5vw;
      font-weight: 800;
      font-variant: small-caps;

      @media only screen and (max-width: 1200px) and (min-width: 700px)  {
        font-size: 5vw;
      }

      @media only screen and (max-width: 700px) {
        font-size: 10vw;
      }
    }

    .servicesDescription {
      font-family: 'PT Serif', serif;
      font-size: .8vw;
      font-weight: 600;

      @media only screen and (max-width: 1200px) and (min-width: 700px)  {
        font-size: 1.8vw;
      }

      @media only screen and (max-width: 700px) {
        font-size: 3.5vw;
      }
      
    }

`


const Page2 = () => {
  return (
    <Page2Div>
      <Row>
        <Col className="colStyle" xl="3" md="6" xs="12">
          <Card className="servicesCard" body outline color="secondary">
            <div >
              <img src={liveMusicImg} alt="Live Music icon" />
            </div>
            <CardBody>
              <CardTitle className="servicesTitle" >Live Music</CardTitle>
              <CardText className="servicesDescription justify-content-center" >With music brands to cover any event or occasion, Reveler Music offers Live Music services for Family Friendly or 21+.</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col className="colStyle" xl="3" md="6" xs="12">
          <Card className="servicesCard" body outline color="secondary">
            <div >
             <img src={openMicImg} alt="Open Mic icon" />
            </div>
            <CardBody>
              <CardTitle className="servicesTitle" >Open Mics</CardTitle>
              <CardText className="servicesDescription justify-content-center" >With professional modern sound equipment, Reveler Music offers talented Open Mic services for Music or Comedy events.</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col className="colStyle" xl="3" md="6" xs="12">
          <Card className="servicesCard" body outline color="secondary">
            <div >
              <img src={karaokeImg} alt="mixer icon" />
            </div>
            <CardBody>
              <CardTitle className="servicesTitle" >Karaoke</CardTitle>
              <CardText className="servicesDescription justify-content-center" >With 77,000+ songs of all skill level, Reveler Music offers entertaining and fun karaoke services for occasion, event or genre.</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col className="colStyle" xl="3" md="6" xs="12">
          <Card className="servicesCard" body outline color="secondary">
            <div >
              <img src={djImg} alt="mixer icon" />
            </div>
            <CardBody>
              <CardTitle className="servicesTitle" >DJ</CardTitle>
              <CardText className="servicesDescription justify-content-center">With more than 30 years of music experience, Reveler Music offers spectacular dynamic DJ services to create the perfect experience.</CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Page2Div>
  )
}

export default Page2

