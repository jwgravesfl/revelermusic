import React, {Component} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

import logoImg from '../assets/RevelerLogoWhiteShadow.png'

import styled from 'styled-components'

const NavBarDiv = styled.div `

  #logoImg {
    width: 8vw;
    padding: 0;
    margin: 0;

    @media only screen and (max-width: 700px) {
      width: 25vw;
    }
  }

  .contactUsNavLink {
    font-family: 'News Cycle', sans-serif;
    font-size: 3vw;
    color: white;
    margin-right: 10vw;
    font-weight: 800;
  }

  .regNavLink {
    font-family: 'News Cycle', sans-serif;
    font-weight: 600;
    font-size: 1.5vw;
    font-variant: small-caps;
    border-top: 5px solid white;
    border-bottom: 5px solid white;
    
    @media only screen and (max-width: 1200px) and (min-width: 700px)  {

    }

    @media only screen and (max-width: 700px) {
      border-top: none;
      border-bottom: none;
      font-size: 7vw;
      background-color: black;
    }
  }

`

export default class NavBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <NavBarDiv>
        <Navbar id="navBarStyle" dark expand="md" fixed="top" >
          <NavbarBrand href="/" className="clearPadMar" ><img src={logoImg} alt="" id="logoImg" /> </NavbarBrand>
          <NavbarToggler color="white" onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#rmContactForm" className="regNavLink" onClick={this.toggle} >Contact Us!</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#page1" className="regNavLink" onClick={this.toggle}>Business Card</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#page2" className="regNavLink" onClick={this.toggle}>Services</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#page3" className="regNavLink" onClick={this.toggle}>Reveler Process</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret className="regNavLink">
                  Social Media
                </DropdownToggle>
                <DropdownMenu right style={{backgroundColor: "transparent"}}>
                  <DropdownItem>
                    <NavLink href="https://www.instagram.com/revelermusicllc/" className="" onClick={this.toggle}>Instagram</NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <NavLink href="https://www.facebook.com/revelermusicllc/" className="" onClick={this.toggle}>Facebook</NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </NavBarDiv>
    );
  }
}