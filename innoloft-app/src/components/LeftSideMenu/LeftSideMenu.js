import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faBullhorn, faBuilding, faCog, faNewspaper, faChartArea } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import './LeftSideMenu.scss'

class LeftSideMenu extends Component{
    render(){
        return(
            <ul className="left-side-menu">
                <Link to="/">
                    <li>
                        <FontAwesomeIcon icon={faHome}/> <span>Home</span>
                    </li>
                </Link>
                <Link to="/myaccount">
                    <li>
                        <FontAwesomeIcon icon={faBullhorn}/> <span>My Account</span>
                    </li>
                </Link>
                <Link to="#">
                    <li>
                        <FontAwesomeIcon icon={faBuilding}/> <span>My Company</span>
                    </li>
                </Link>
                <Link to="#">
                    <li>
                        <FontAwesomeIcon icon={faCog}/> <span>My Settings</span>
                    </li>
                </Link>
                <Link to="#">
                    <li>
                        <FontAwesomeIcon icon={faNewspaper}/> <span>News</span>
                    </li>
                </Link>
                <Link to="#">
                    <li>
                        <FontAwesomeIcon icon={faChartArea}/> <span>Analytics</span>
                    </li>
                </Link>
            </ul>
        )
    }
}

export default LeftSideMenu