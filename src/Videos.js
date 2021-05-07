import React, { Component } from 'react'
import Iframe from 'react-iframe'



export default class Videos extends Component {
    render() {
        return (
            <div className="videosDiv">

        <h4>VIDEOS:</h4>       
        <h5> Hot Sauce </h5>
            <div className="videoWraper">
                <Iframe
                className ='videoPlayer'
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/m-n-s2XTryk" 
                frameborder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
                />
            </div>

        <h5> Bad Habits </h5>
            <div className="videoWraper">
                <Iframe
                    className ='videoPlayer'
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/gU9Q4hgkjrw" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen  
                    />
            </div>

        <h5> Planetarium </h5>
            <div className="videoWraper">        
                <Iframe
                className ='videoPlayer'
                // width="853"
                // height="480"
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/hOrohxVkPg8"
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"       
                title="Planetarium"
                allowfullscreen
                />
            </div>

        <h5> Everything I Want To Be </h5>
            <div className="videoWraper">
                <Iframe
                className ='videoPlayer'
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/X5JgCG19O6o"
                frameborder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen               
                />
            </div>

        <h5> The Hanged Woman </h5>
        <div className="videoWraper">s
            <Iframe
            className ='videoPlayer'
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/y8SmpeAeaCo" 
            frameborder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
            />
        </div>
                
    </div>
        )
    }
}
