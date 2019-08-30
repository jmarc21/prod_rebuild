import React, { Component } from 'react';
import '../../reset.css'
import './header.css'
import Logo from './assets/prod_rebuild_logo.png';
import {Link} from 'react-router-dom';
var { Menu_links } = require('./config.js');

export default class Header extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }
    render() {

        var memberlinks = Menu_links.map((e,i) => {
            console.log(e.route);
            return <Link to={e.route} style={{ textDecoration: 'none', color: 'black' }}><div className="header-menu-link">
                {e.title}
            </div></Link>
        })

        return (
            <div className='header'>
                <div className="header-container">
                    <div className="header-logo-container">
                        <div style={{backgroundImage: `url(${Logo})`}} className="header-logo-image"></div>
                    </div>
                    <div className="header-menu-container">
                        {memberlinks}
                    </div>
                </div>
            </div>
        )
    }
}
