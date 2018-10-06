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

    .colStyle {
      text-align: center;
      color: white;

      img {
        width: 5vw;
      }

    }

    .servicesTitle {

    }

`


const Page2 = () => {
  return (
    <Page2Div>
      <Row>
        <Col className="colStyle">
          <Card style={{ backgroundColor: "transparent" }} >
            <div >
              <img top src={liveMusicImg} alt="Live Music icon" />
            </div>
            <CardBody>
              <CardTitle>Live Music</CardTitle>
              <CardText>With music brands to cover any event or occasion, Reveler Music offers Live Music services for Family Friendly or 21+ atmospheres.</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col className="colStyle">
          <Card inverse color="primary"  >
            <div >
              <img src={openMicImg} alt="Open Mic icon" />
            </div>
            <CardBody>
              <CardTitle>Open Mics</CardTitle>
              <CardText>Description</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col className="colStyle">
          <Card inverse color="primary"  >
            <div >
             <img src={karaokeImg} alt="mixer icon" />
            </div>
            <CardBody>
              <CardTitle>Karaoke</CardTitle>
              <CardText>With music 77,000+ songs for all genres, Reveler Music offers exciting karaoke services for occasion or event.</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col className="colStyle">
          <Card inverse color="primary"  >
            <div >
              <img src={djImg} alt="mixer icon" />
            </div>
            <CardBody>
              <CardTitle>DJ</CardTitle>
              <CardText>Description</CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Page2Div>
  )
}

export default Page2

