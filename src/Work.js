import React, { Component } from 'react'
import Iframe from 'react-iframe'


export default class Work extends Component {
    render() {
        return (
        <div className="workDiv">

            <h4>FEATURED WORK:</h4>
            <hr></hr>


{/* <!--MAWN--> */}

        <div className="mawnworkDiv">
		<h4> Mawn </h4>	
        <hr />
		<p> Sound Design electronic music project, written, produced and mixed by Sabine Holler and Björn Eichhorn. </p>

        <Iframe 
        className='mawnBandcamp'
         width = '100%'
        height= '42px'
        src="https://bandcamp.com/EmbeddedPlayer/album=1702514394/size=small/bgcol=ffffff/linkcol=0687f5/transparent=true/" seamless>
        <a href="https://mawn.bandcamp.com/album/dois">Dois by Mawn</a>
        </Iframe>     
        <Iframe 
         className='mawnBandcamp'
         width = '100%'
        height= '42px'
         src="https://bandcamp.com/EmbeddedPlayer/album=3942767518/size=small/bgcol=ffffff/linkcol=0687f5/transparent=true/" seamless>
         <a href="https://mawn.bandcamp.com/album/um">Um by Mawn</a>
         </Iframe>
         </div>
      
        <br></br>
        <br></br>
        <div className="paraisoDiv">
	    <h4> Paraiso for Natalia Stuyk </h4>
        <hr />	
		<p> The electornic piece was created for the release of 
        Natalia Stuyk opening at Melissa Galery in Soho, NY. Unmastered version.</p>
        <Iframe 
        className="paraisoPlayer"
        width="100%" 
        height="20px" 
        scrolling="no" 
        frameborder="no" 
        allow="autoplay" 
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/887357143%3Fsecret_token%3Ds-KdGXm8REfNi&color=%237c8cac&inverse=false&auto_play=false&show_user=true">
        </Iframe>
        </div>
        <hr />
        <br></br>
        <br></br>
        <div className="religare">


        <h4> Religare </h4>
        <hr />	
		<p> The documentary explores the visual and sonic landscapes  of 5 different religious rituals in Brazil. Directed, Edited and Mixed by Sabine Holler </p>
            <div className="videoWraper">
                <Iframe
                className ='videoPlayer'
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/2O7vH0FslaU" 
                frameborder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </Iframe>
            </div>
        </div>

        <br></br>
        <br></br>

        <div className="religare">

        <h4> Tathy Yazigi Soundtracks </h4>
        <hr />
        <p> Series of soundtracks for the videos of the brazilian performance artist Tathy Yazigi. <br>
        </br>Composed by Sabine Holler and Alessandra Duarte, Mixed by Sabine Holler.</p>
        <div className="videoWraper">
        <Iframe
        className ='videoPlayer'
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/1tnMPm3NhMw" 
        frameborder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
        </Iframe>
        </div>
        <br></br>

        <div className="videoWraper">
        <Iframe
        className ='videoPlayer'
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/Z1IYHHSrgdA" 
        frameborder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
        </Iframe>
        </div>
        </div>


    </div>
  
        )
    }
}
