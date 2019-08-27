import React, { Component } from 'react';
import '../../reset.css'
import './header.css'
var { Menu_links } = require('./config.js');

export default class Header extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }
    render() {

        console.log(Menu_links);

        return (
            <div className='header'>

            </div>
        )
    }
}
