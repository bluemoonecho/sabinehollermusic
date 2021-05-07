import React, { Component } from 'react'
import capa from './images/capa_final.jpg'

export default class Home extends Component {
    render() {
        return (
            <div>
                <h2>SABINE HOLLER</h2>
            <img 
                className='capa'
                width = '70%'
                src = {capa}>
            </img>
            

            </div>
        )
    }
}
