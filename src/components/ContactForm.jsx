import React, { Component } from 'react'
import { Form, Button, Label, Input, Row, Col, Container, Card, CardTitle, CardText } from 'reactstrap'

import {db} from '../firebase/firebase'

import styled from 'styled-components'

const ContactFormsDiv = styled.div `
background-color: black;

    .contactFormPageHeader {
        color: white;
        text-align: center;
        font-size: 4vw;
        padding: 2vh;
        font-family: 'PT Sans', sans-serif;
    }

    .newContactFormContainerDiv {
        text-align: center;
        color: white;
        font-family: 'PT Sans', sans-serif;
        font-size: 2vw;
    }

    .contactFormButtonRow {
        
    }

    .newContactFormButtonDiv {
        padding-top: 3vh;
        padding-bottom: 3vh;
    }

    .contactCards {
        
        background-color: transparent;
        margin-left: 20%;
        margin-right: 20%;
        margin-top: 3vh;
        border-color: white;
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
      <ContactFormsDiv>
        <div className="" >
        <div className="contactFormPageHeader">
            Contact Reveler Music
        </div>
                <Row>
                    <Col md="8" xs="12">
                    <Form onSubmit={this.handleSubmit}>
                        <Container className="newContactFormContainerDiv" >
                        <Row>   
                            <Col>
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
                            <Col>
                                <Label 
                                for="lNameCompanyName"
                                className="asLabel"
                                >
                                    Last Name or Company Name
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
                            <Col>
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
                            <Col>
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
                            <Col>
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
                            <Col>
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
                    <Col md="4" xs="12" id="MainColumn2">
                        <div>
                        <Card className="contactCards" body inverse>
                            <CardTitle>
                            Colorado Springs - Pueblo
                            <br />
                            (719) 439-7950
                            </CardTitle>
                        </Card>
                        
                        <Card className="contactCards" body inverse>
                            <CardTitle>
                            Denver - Castle Rock
                            <br />
                            (720) 306-1354
                            </CardTitle>
                        </Card>
                        <Card className="contactCards" body inverse>
                            <CardTitle>Other Contacts</CardTitle>
                            <CardText>Email - contact@revelermusic.com
                            <br />Facebook - @revelermusicllc
                            <br />Instagram - @revelermusicllc
                            </CardText>
                        </Card>
                        </div>
                    </Col>
                </Row>
        </div>
      </ContactFormsDiv>
    )
  }
}
