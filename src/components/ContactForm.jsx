import React, { Component } from 'react'
import { Form, Button, Label, Input, Row, Col, Container, Card } from 'reactstrap'

import {db} from '../firebase/firebase'

import styled from 'styled-components'

const ContactFormsDiv = styled.div `
background-color: black;

    .contactFormPageHeader {
        color: white;
        text-align: center;
        font-size: 4vw;
        padding-top: 2vh;
        font-family: 'PT Sans', sans-serif;

      @media only screen and (max-width: 1200px) and (min-width: 700px)  {
        font-size: 6vw;
      }

      @media only screen and (max-width: 700px) {
        font-size: 8vw;
      }
    }

    .newContactFormContainerDiv {
        text-align: center;
        color: white;
        font-family: 'PT Sans', sans-serif;
        font-size: 2vw;

        @media only screen and (max-width: 1200px) and (min-width: 700px)  {
          font-size: 2.5vw;
        }
  
        @media only screen and (max-width: 700px) {
          font-size: 6.5vw;
        }
    }

    .contactFormButtonRow {
        
    }

    .asLabel {
        padding-top: 1vh;
    }

    .asInput {

    }

    .newContactFormButtonDiv {
        padding-top: 3vh;
        padding-bottom: 3vh;
    }

    .contactCards {
        
        background-color: transparent;
        margin-left: 10%;
        margin-right: 20%;
        margin-top: 3vh;
        background-color: rgb(26, 26, 28, 1);

        @media only screen and (max-width: 1200px) and (min-width: 700px)  {
            margin-left: 5%;
            margin-right: 10%;
        }
  
        @media only screen and (max-width: 700px) {
            margin-left: 5%;
            margin-right: 5%;
        }
    }

    .contactCardsWords {
        font-family: 'PT Sans', sans-serif;
        font-size: 1vw;

        @media only screen and (max-width: 1200px) and (min-width: 700px)  {
          font-size: 1.9vw;
        }
  
        @media only screen and (max-width: 700px) {
          font-size: 4.2vw;
        }
    }

`


export default class ContactForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fName: '',
      lNameCompanyName: '',
      dateOfEvent: '',
      phoneNumber: '',
      bestTimeToCall: '',
      emailAddress: '',
      zipCodeOfVenue: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
      this.setState({
        [e.target.name]: e.target.value
      });
    }

  handleSubmit(e) {
    e.preventDefault()
    const newContactFormsRef = db.ref('ContactForms')
    const contactForm = {
      fname: this.state.fName,
      lNameCompanyName: this.state.lNameCompanyName,
      dateOfEvent: this.state.dateOfEvent,
      phoneNumber: this.state.phoneNumber,
      bestTimeToCall: this.state.bestTimeToCall,
      emailAddress: this.state.emailAddress,
      zipCodeOfVenue: this.state.zipCodeOfVenue
    }
    newContactFormsRef.push(contactForm)
    this.setState({
        fName: '',
        lNameCompanyName: '',
        dateOfEvent: '',
        phoneNumber: '',
        bestTimeToCall: '',
        emailAddress: '',
        zipCodeOfVenue: '',
    })
  }

  componentDidMount() {
    const ContactFormsRef = db.ref('ContactForms')
    ContactFormsRef.on('value', (snapshot) => {
      let contactForms = snapshot.val()
      let newState = []
      for (let contactForm in contactForms) {
        newState.push({
          id: contactForm,
          fName: contactForms[contactForm].fName,
          lNameCompanyName: contactForms[contactForm].lNameCompanyName,
          dateOfEvent: contactForms[contactForm].dateOfEvent,
          phoneNumber: contactForms[contactForm].phoneNumber,
          bestTimeToCall: contactForms[contactForm].bestTimeToCall,
          emailAddress: contactForms[contactForm].emailAddress,
          zipCodeOfVenue: contactForms[contactForm].zipCodeOfVenue,
        })
      }
      this.setState({
        contactForms: newState
      })
    })
  }
  
  render() {

    return (
      <ContactFormsDiv id="rmContactForm">
        <div className="" >
        <div className="contactFormPageHeader">
            Contact Reveler Music
        </div>
                <Row>
                    <Col xl="8" lg="7" md="6" xs="12">
                    <Form onSubmit={this.handleSubmit}>
                        <Container className="newContactFormContainerDiv" >
                        <Row>   
                            <Col lg="6" xs="12">
                                <Label 
                                for="fname"
                                className="asLabel"
                                >
                                    First Name
                                </Label>
                                <Input
                                    type="text" 
                                    name="fname" 
                                    placeholder="fname"
                                    id="fname" 
                                    onChange={this.handleChange} 
                                    value={this.state.fname}
                                    className="asInput"
                                />  
                            </Col>
                            <Col lg="6" xs="12">
                                <Label 
                                for="lNameCompanyName"
                                className="asLabel"
                                >
                                    Last/Company Name
                                </Label>
                                <Input
                                    type="text" 
                                    name="lNameCompanyName" 
                                    placeholder="Add Last Name or Company Name"
                                    id="lNameCompanyName" 
                                    onChange={this.handleChange} 
                                    value={this.state.lNameCompanyName}
                                    className="asInput"
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col lg="6" xs="12">
                                <Label 
                                for="dateOfEvent"
                                className="asLabel"
                                >
                                    Date of Event
                                </Label>
                                <Input
                                    type="text" 
                                    name="dateOfEvent" 
                                    placeholder="Date of Event"
                                    id="dateOfEvent" 
                                    onChange={this.handleChange} 
                                    value={this.state.dateOfEvent}
                                    className="asInput"
                                />
                                
                            </Col>
                            <Col lg="6" xs="12">
                                <Label 
                                for="phoneNumber"
                                className="asLabel"
                                >
                                    Phone Number
                                </Label>
                                <Input
                                    type="text" 
                                    name="phoneNumber" 
                                    placeholder="Phone Number"
                                    id="phoneNumber" 
                                    onChange={this.handleChange} 
                                    value={this.state.phoneNumber}
                                    className="asInput"
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col lg="6" xs="12">
                                <Label 
                                for="bestTimeToCall"
                                className="asLabel"
                                >
                                    Best Time to Call
                                </Label>
                                <Input
                                    type="text" 
                                    name="bestTimeToCall" 
                                    placeholder="Best Time to Call"
                                    id="bestTimeToCall" 
                                    onChange={this.handleChange} 
                                    value={this.state.bestTimeToCall}
                                    className="asInput"
                                />
                            </Col>
                            <Col lg="6" xs="12">
                                <Label 
                                for="emailAddress"
                                className="asLabel"
                                >
                                    Email Address
                                </Label>
                                <Input
                                    type="text" 
                                    name="emailAddress" 
                                    placeholder="Email Address"
                                    id="emailAddress" 
                                    onChange={this.handleChange} 
                                    value={this.state.emailAddress}
                                    className="asInput"
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Label 
                                for="message"
                                className="asLabel"
                                >
                                    Message
                                </Label>
                                <Input
                                    type="textarea" 
                                    name="message" 
                                    placeholder="Message"
                                    id="message" 
                                    onChange={this.handleChange} 
                                    value={this.state.message}
                                    className="asInput"
                                    rows="5"
                                />
                            </Col>
                        </Row>
                       
                            <div className="newContactFormButtonDiv">
                                <Button type="submit">Send Message</Button>
                            </div>
                   
                        
                        </Container>
                        </Form>
                    </Col>
                    <Col xl="4" lg="5" md="6" xs="12" id="MainColumn2">
                        <div>
                        <Card className="contactCards" body inverse>
                            <div className="contactCardsWords">
                            Colorado Springs - Pueblo
                            <br />
                            (719) 439-7950
                            </div>
                        </Card>
                        
                        <Card className="contactCards" body inverse>
                            <div className="contactCardsWords">
                            Denver - Castle Rock
                            <br />
                            (720) 306-1354
                            </div>
                        </Card>
                        <Card className="contactCards" body inverse>
                            <div className="contactCardsWords">Other Contacts</div>
                            <div className="contactCardsWords">Email - contact@revelermusic.com
                            <br />Facebook - @revelermusicllc
                            <br />Instagram - @revelermusicllc
                            </div>
                        </Card>
                        </div>
                    </Col>
                </Row>
        </div>
      </ContactFormsDiv>
    )
  }
}
