import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Navbar as Nav} from 'react-bootstrap'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Icons from './Icons'


export default class NavBar extends Component {
    render() {
        return (
            <div>
     <Nav className='nav justify-content'>

            <Nav.Brand>
            <Link  className='navLink' to='/'>/</Link>
            </Nav.Brand>

            <Nav.Brand>
            <Link className='navLink' to='/about'>about</Link>
            </Nav.Brand>

            <Nav.Brand>
            <Link className='navLink' to='/work'>work</Link>
            </Nav.Brand>

            <Nav.Brand>
            <Link className='navLink' to='/discography'>discography</Link>
            </Nav.Brand>

            <Nav.Brand>
            <Link className='navLink' to='/videos'>videos</Link>
            </Nav.Brand>
            <Icons></Icons>

    </Nav>
   
                
            </div>
        )
    }
}



// import React, { Component } from 'react';
// import {
//   MDBNavbar,
//   MDBNavbarBrand,
//   MDBNavbarNav,
//   MDBNavItem,
//   MDBNavLink,
//   MDBNavbarToggler,
//   MDBCollapse,
//   MDBContainer
// } from 'mdbreact';
// import { BrowserRouter as Router } from 'react-router-dom';

// class hamburgerMenuPage extends Component {
//   state = {
//     collapseID: ''
//   };

//   toggleCollapse = collapseID => () => {
//     this.setState(prevState => ({
//       collapseID: prevState.collapseID !== collapseID ? collapseID : ''
//     }));
//   };

//   render() {
//     return (
//       <Router>
//         <MDBContainer>
//           <MDBNavbar
//             color='light-blue lighten-4'
//             style={{ marginTop: '20px' }}
//             light
//           >
//             <MDBContainer>
//               <MDBNavbarBrand>Navbar</MDBNavbarBrand>
//               <MDBNavbarToggler
//                 onClick={this.toggleCollapse('navbarCollapse1')}
//               />
//               <MDBCollapse
//                 id='navbarCollapse1'
//                 isOpen={this.state.collapseID}
//                 navbar
//               >
//                 <MDBNavbarNav left>
//                   <MDBNavItem active>
//                     <MDBNavLink to='#!'>Home</MDBNavLink>
//                   </MDBNavItem>
//                   <MDBNavItem>
//                     <MDBNavLink to='#!'>Link</MDBNavLink>
//                   </MDBNavItem>
//                   <MDBNavItem>
//                     <MDBNavLink to='#!'>Profile</MDBNavLink>
//                   </MDBNavItem>
//                 </MDBNavbarNav>
//               </MDBCollapse>
//             </MDBContainer>
//           </MDBNavbar>
//         </MDBContainer>
//       </Router>
//     );
//   }
// }

// export default hamburgerMenuPage;




// export default class NavBar extends Component {
//     render() {
//         return (
//             <>

//         <Breadcrumb>
//         <Breadcrumb.Item 
//         href='/'>/
//         </Breadcrumb.Item>

//         <Breadcrumb.Item 
//         href='/about'>
//             about
//         </Breadcrumb.Item>

//         <Breadcrumb.Item 
//         href='/discography'>
//             discography
//         </Breadcrumb.Item>

//         </Breadcrumb>  


//         </>
        
//         )
//     }
// }