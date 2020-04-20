import React, { Component } from 'react'
import MainInfoForm from './MainInfoForm'
import AdditionalInfoForm from './AdditionalInfoForm'
import './MyAccountPage.scss'
import { getAccountInfo } from '../../redux'
import { connect } from 'react-redux'

const mapStateToProps = (store) => {
    return {
        accountInfo: store.info
    }
}

class MyAccountPage extends Component{

    constructor(props){
        super(props);
        this.state = {
            visibleTab: 'left',
        }
    }

    componentWillMount(){
        this.props.dispatch(getAccountInfo())
    }

    handleTabSwitch(tab){
        this.setState({ visibleTab : tab })
    }

    render(){

        if(this.props.accountInfo){
            
            const { email, firstname, lastname, housenumber, street, country, postalcode } = this.props.accountInfo

            return(
                <div className="main-container">
                    <div className="info-container">
                        <div className="info-header">
                            <button type="button" 
                                className={`${this.state.visibleTab === "left" ? "active" : "" }`}
                                onClick={() => this.handleTabSwitch('left')}>Main Information</button>
                            <button type="button" 
                                className={`${this.state.visibleTab === "right" ? "active" : "" }`}
                                onClick={() => this.handleTabSwitch('right')}>Additional Information</button>
                        </div>
                        <div className={`info-tab ${this.state.visibleTab === "left" ? "" : "hidden" }`}>
                            <MainInfoForm data={email}/>
                        </div>
                        <div className={`info-tab ${this.state.visibleTab === "right" ? "" : "hidden" }`}>
                            <AdditionalInfoForm data={{  firstname, 
                                                         lastname, 
                                                         housenumber, 
                                                         street, 
                                                         country, 
                                                         postalcode  }}/>
                        </div>
                    </div>
                </div>
            )
        }
        else{
            return null
        }
    }
}

export default connect(mapStateToProps)(MyAccountPage)