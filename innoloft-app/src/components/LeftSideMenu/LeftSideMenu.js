import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faBullhorn, faBuilding, faCog, faNewspaper, faChartArea } from '@fortawesome/free-solid-svg-icons'
import { NavLink, Link } from 'react-router-dom'
import './LeftSideMenu.scss'

class LeftSideMenu extends Component{
    render(){
        return(
            <ul className="left-side-menu">
                <NavLink exact to="/">
                    <li>
                        <FontAwesomeIcon icon={faHome}/> <span>Home</span>
                    </li>
                </NavLink>
                <NavLink exact to="/myaccount">
                    <li>
                        <FontAwesomeIcon icon={faBullhorn}/> <span>My Account</span>
                    </li>
                </NavLink>
                <NavLink exact to="_blank_1">
                    <li>
                        <FontAwesomeIcon icon={faBuilding}/> <span>My Company</span>
                    </li>
                </NavLink>
                <NavLink exact to="_blank_2">
                    <li>
                        <FontAwesomeIcon icon={faCog}/> <span>My Settings</span>
                    </li>
                </NavLink>
                <NavLink exact to="_blank_3">
                    <li>
                        <FontAwesomeIcon icon={faNewspaper}/> <span>News</span>
                    </li>
                </NavLink>
                <NavLink exact to="_blank_4">
                    <li>
                        <FontAwesomeIcon icon={faChartArea}/> <span>Analytics</span>
                    </li>
                </NavLink>
            </ul>
        )
    }
}

export default LeftSideMenu