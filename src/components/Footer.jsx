import React from 'react'

import styled from 'styled-components'
import {Row, Col, ListGroup, ListGroupItem} from 'reactstrap'

import rmLogo from '../assets/RevelerLogoWhiteShadow.png'
import sitemap from '../assets/sitemap.xml'

const FooterDiv = styled.div `
background-color: black;
color: white;
text-align: center;

  #middleColumn {
    padding-top: 10vh;
    padding-bottom: 5vh;
    text-align: center;
    img {
      width: 30vw;
    }

    @media only screen and (max-width: 1200px) and (min-width: 700px)  {
      
      img {
        width: 30vw;
      }
    }

    @media only screen and (max-width: 700px) {
      padding-top: 3vh;
      padding-bottom: 2vh;

      img {
        width: 80vw;
      }
    }
  }

  #rmSitemap {
    position: relative;
    bottom: 15%;
    color: yellow;
    z-index: 9999;
    background-color: black;
  }

  .listGroupLabel {
    color: white;
    font-size: 3vw;
    font-family: 'Montserrat', sans-serif;

    @media only screen and (max-width: 1200px) and (min-width: 700px)  {
      font-size: 4vw;
    }

    @media only screen and (max-width: 700px) {
      font-size: 7vw;
    }

  }

  .listGroupContact {
    margin-top: 15%;
    text-align: center;

    @media only screen and (max-width: 1200px) and (min-width: 700px)  {
      margin-top: 10%;
    }

    @media only screen and (max-width: 700px) {
      margin-top: 5%;
    }
  }

  .listGroupItemContact {
    background-color: transparent;
    border-color: white;
    font-family: 'Montserrat', sans-serif;
    font-size: 1vw;

    @media only screen and (max-width: 1200px) and (min-width: 700px)  {
      font-size: 1.3vw;
    }

    @media only screen and (max-width: 700px) {
      font-size: 5vw;
    }
  }

  .faIcons {
    font-size: 2vw;

    @media only screen and (max-width: 1200px) and (min-width: 700px)  {
      font-size: 4vw;
    }

    @media only screen and (max-width: 700px) {
      font-size: 10vw;
    }
  }

  .footerPhoneNumber {
    font-size: 1.3vw;

    @media only screen and (max-width: 1200px) and (min-width: 700px)  {
      font-size: 2.4vw;
    }

    @media only screen and (max-width: 700px) {
      font-size: 9vw;
    }
  }

`


const Footer = () => {
  return (
    <FooterDiv>
      <Row>
        <Col lg="1" md="1" xs="0">
          
        </Col>
        <Col lg="3" md="3" xs="12">
        <div className="listGroupLabel">
          Contact
        </div>
          <ListGroup flush className="listGroupContact">
            <ListGroupItem className="listGroupItemContact"><div className="footerPhoneNumber">(719) 439-7950</div>Colorado Springs - Pueblo</ListGroupItem>
            <ListGroupItem className="listGroupItemContact"></ListGroupItem>
            <ListGroupItem className="listGroupItemContact"><div className="footerPhoneNumber">(720) 306-1354</div> Denver - Castle Rock</ListGroupItem>
            <ListGroupItem className="listGroupItemContact"></ListGroupItem>
          </ListGroup>
        </Col>
        <Col lg="4" md="4" xs="12" id="middleColumn">
          <img src={rmLogo} alt="Reveler Music, LLC Logo" />
        </Col>
        <Col lg="3" md="3" xs="12">
        <div className="listGroupLabel">
          Connect
        </div>
          <ListGroup flush className="listGroupContact">
            <ListGroupItem className="listGroupItemContact"><a href="https://www.facebook.com/revelermusicllc/"><i className="fa fa-facebook faIcons" /> <br />@revelermusicllc</a></ListGroupItem>
            <ListGroupItem className="listGroupItemContact"></ListGroupItem>
            <ListGroupItem className="listGroupItemContact"><a href="https://www.instagram.com/revelermusicllc/"><i className="fa fa-instagram " /> <br />@revelermusicllc</a></ListGroupItem>
            <ListGroupItem className="listGroupItemContact"></ListGroupItem>
          </ListGroup>
        </Col>
        <Col lg="1" md="1" xs="0">
          
        </Col>
      </Row>
      <div id="rmSitemap">
        <a href={sitemap} >Sitemap</a>
      </div>
    </FooterDiv>
  )
}

export default Footer

