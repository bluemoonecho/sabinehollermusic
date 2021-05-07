import React, { Component } from 'react';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBContainer
} from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
// import { Link } from 'react-router-dom'


class Hamburger extends Component {
  state = {
    collapseID: ''
  };

  toggleCollapse = collapseID => () => {
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ''
    }));
  };

  render() {
    return (
        <div className='topPage'>
  
        <MDBContainer>
    
          <MDBNavbar
            color='light-blue lighten-4'
            style={{ marginTop: '10px'}}
            light
            className='Hamburger'
          >
            <MDBContainer>
              <MDBNavbarBrand
              fontSize='10px'
              ></MDBNavbarBrand>
              <MDBNavbarToggler
                onClick={this.toggleCollapse('navbarCollapse1')}
              />
              <MDBCollapse
                id='navbarCollapse1'
                isOpen={this.state.collapseID}
                navbar
              >
                <MDBNavbarNav left>
                  <MDBNavItem active>
                    <MDBNavLink to='/'>/</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to='/about'>about</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to='/work'>work</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to='/discography'>discography</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                    style={{ marginBottom: '50px'}} 
                    to='/videos'>videos
                    </MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBContainer>
          </MDBNavbar>
        </MDBContainer>
    </div>
    );
  }
}

export default Hamburger;