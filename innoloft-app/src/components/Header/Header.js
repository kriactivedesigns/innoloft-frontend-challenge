import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeAsia, faEnvelope, faBell } from '@fortawesome/free-solid-svg-icons'
import logo from '../../assets/energie_loft_logo.png'
import './Header.scss'

class Header extends Component{
    render(){
        return (
            <header>
                <img src={logo} className="header-logo" alt="logo"/>
                <ul className="header-right-links">
                    <li className="language-link">
                        <FontAwesomeIcon icon={faGlobeAsia}/> <span>EN</span>
                    </li>
                    <li className="messages-link">
                        <FontAwesomeIcon icon={faEnvelope}/>
                    </li>
                    <li className="notification-link">
                        <FontAwesomeIcon icon={faBell}/>
                    </li>
                </ul>
            </header>
        )
    }
}

export default Header