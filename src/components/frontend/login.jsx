import React, { Component } from 'react';
import '../../reset.css'
import './login.css'
import {Link} from 'react-router-dom';

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className='login'>
                <div className="login-prompt">Placeholder for Login</div>
                <Link to='/affiliations' style={{ textDecoration: 'none', color: 'black' }} ><div className="login-next">Login</div></Link>
            </div>
        )
    }
}
