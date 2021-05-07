import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import spotify from './images/spotify.png';
// import facebook from './images/facebook-app-logo.png';
// import instagram from './images/instagram.png';
// import bandcamp from './images/bc-bandcamp-logo.png';
// import email from './images/email.png';
import { FiMail } from 'react-icons/fi'
import {FaSpotify} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaBandcamp} from 'react-icons/fa'


export default class Icons extends Component {
    render() {
        return (

        <div className='icons'>

            <a href='https://open.spotify.com/artist/6vql7C41bXHyWTYlBtHqTZ?si=ODrHsAkySJ24n367vIS7VA' 
                style={{ color: 'black'}} 
                rel="noreferrer" 
                target="_blank"> 
                <FaSpotify className="img-responsive" size={30}/>
            {/* <img style={{width: '30px'}} className="img-responsive" src={spotify} alt="spotify"/> */}
            </a>

            <a href='https://www.facebook.com/sabinehollermusic' 
                style={{ color: 'black', textDecoration: 'none' }} 
                rel="noreferrer" 
                target="_blank"> 
                <FaFacebook className="img-responsive" size={30}/>
            {/* <img style={{width: '30px'}} className="img-responsive" src={facebook} alt="facebook"/> */}
            </a>

            <a href='https://www.instagram.com/sabineholler/' 
                style={{ color: 'black', textDecoration: 'none' }} 
                rel="noreferrer" 
                target="_blank"> 
                <FaInstagram className="img-responsive" size={32}/>
            {/* <img style={{width: '30px'}} className="img-responsive" src={instagram} alt="instagram"/> */}
            </a>

            <a href='https://sabineholler.bandcamp.com/releases' 
                style={{ color: 'black', textDecoration: 'none' }} 
                rel="noreferrer" 
                target="_blank"> 
                    <FaBandcamp className="img-responsive" size={30}/>
            {/* <img style={{width: '35px'}} className="img-responsive" src={bandcamp} alt="bandcamp"/> */}
            </a>

            <a href="mailto:sabidasa@gmail.com" rel="noreferrer" style={{ color: 'black', textDecoration: 'none' }} target="_blank"> 
                <FiMail className="img-responsive" size={30}/>
            {/* <img style={{width: '30px'}} className="img-responsive" src={email} alt="email"/> */}
            </a>
        
        </div> 
                
        )
    }
}
