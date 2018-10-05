import React from 'react'

import styled from 'styled-components'

import RMLogo from '../assets/RevelerLogoWhiteShadow.png'
import JHLogo from '../assets/J&Heather.png'
import CDLogo from '../assets/421CDLogo.png' 

import InstagramLogo from '../assets/instagramLogo.png'

const LandingPageDiv = styled.div `
height: 100vh;
color: white;

#jName {
  font-size: 2.5vw;
  position: absolute;
  top: 65%;
  left: 20%;
  font-family: 'Allerta Stencil', sans-serif;
  font-weight: 500;
}

#heatherName {
  text-align: center;
  font-size: 2.5vw;
  position: absolute;
  top: 35%;
  left: 70%;
  font-family: 'Allerta Stencil', sans-serif;
  font-weight: 500;
}

#rmLogo {
  position: absolute;
  top: 7%;
  left: 47%;

  img {
    width: 32vw;
  }
}

#jhLogo {
  position: absolute;
  top: 58%;
  left: 40%;

  img {
    width: 16vw;
  }
}

#cdLogo {
  position: absolute;
  top: 68%;
  left: 60%;

  img {
    width: 16vw;
  }
}

#landingPageWordsAtBottom {
  position: absolute;
  font-size: 2vw;
  left: 10%;
  bottom: 5%;
  color: white;
  font-family: 'Luckiest Guy', cursive;
}

#heatherLoveInstagram {
  position: absolute;
  font-size: 1.5vw;
  left: 65%;
  top: 53%;
  color: white;
  font-family: 'Luckiest Guy', cursive;

  img {
    width: 3vw;
  }

}


`

const LandingPage = () => {
  return (
    <LandingPageDiv>
      <div id="jName">
        J. Graves
      </div>
      <div id="heatherName">
        Heather <br /> Love
      </div>
      <div id="heatherLoveInstagram">
      <img src={InstagramLogo} alt="Instagram Logo" /> <br /> @xheatherlovex
    </div>
      <div id="rmLogo">
        <img src={RMLogo} alt="Reveler Music Logo" />
      </div>
      <div id="jhLogo">
      <img src={JHLogo} alt="Reveler Music Logo" />
    </div>
    <div id="cdLogo">
    <img src={CDLogo} alt="Reveler Music Logo" />
  </div> 
  <div id="landingPageWordsAtBottom">
  Corporate, Wedding, Family Friendly or 21+
  <br />
  Live Music, Open Mic, Karaoke and DJ Services
</div> 
    </LandingPageDiv>
  )
}

export default LandingPage