import React, { Component } from 'react';
import '../../reset.css';
import './landing.css'
import Header from './header.jsx';
import Logo from './assets/prod_rebuild_logo.png';
import Background from './assets/home-background.jpg';

export default class Landing extends Component {
    render() {
        return (
            <div className='home'>
                <Header/>
                <div className="home-landing-container" style={{backgroundImage: `url(${Background})`}}>
                    <div className="home-logo-container">
                        <div style={{backgroundImage: `url(${Logo})`}} className="home-logo-image"></div>
                    </div>
                    <div className="home-content-container">
                        Prodigy Network
                    </div>
                </div>
            </div>
        )
    }
}
