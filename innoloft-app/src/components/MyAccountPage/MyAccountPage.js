import React, { Component } from 'react'
import MainInfoForm from './MainInfoForm'
import AdditionalInfoForm from './AdditionalInfoForm'
import './MyAccountPage.scss'
import { MainInfoFormId, AdditionalInfoFormId } from '../../GlobalConstants';
import { connect } from 'react-redux'
import { submitAccountInfo } from '../../redux'

const mapStateToProps = (store) => {
    return {
        accountInfo: store
    }
}

class MyAccountPage extends Component{

    constructor(props){
        super(props);
        this.state = {
            visibleTab: 'left',
            mainInfo:{
                email: this.props.accountInfo.info.email,
            },
            additionalInfo:{
                firstname: this.props.accountInfo.info.firstname,
                lastname: this.props.accountInfo.info.lastname,
                housenumber: this.props.accountInfo.info.housenumber,
                street: this.props.accountInfo.info.street,
                country: this.props.accountInfo.info.country,
                postalcode: this.props.accountInfo.info.postalcode
            }
        }

        this.handleChange = this.handleChange.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }

    handleTabSwitch(tab){
        this.setState({ visibleTab : tab })
    }

    handleChange(e, source){
        if(source === MainInfoFormId){
            this.setState({ mainInfo : { ...this.state.mainInfo , [e.target.name] : e.target.value }})
        }
        else if(source === AdditionalInfoFormId){
            this.setState({ additionalInfo : { ...this.state.additionalInfo , [e.target.name] : e.target.value }})
        }
    }

    submitForm(e){
        e.preventDefault()
        const id = e.target.id
        if(id === MainInfoFormId){
            const newPassword = e.target['password'].value;
            const newMainInfo = this.state.mainInfo
            if(newPassword.length > 0){
                newMainInfo['password'] = newPassword
            }
            this.props.dispatch(submitAccountInfo(newMainInfo))
        }
        else if(id === AdditionalInfoFormId){
            const newAdditionalInfo = this.state.additionalInfo
            this.props.dispatch(submitAccountInfo(newAdditionalInfo))
        }
    }

    render(){
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
                        <MainInfoForm onSubmit={this.submitForm}
                            data={this.state.mainInfo}
                            onChange={this.handleChange}/>
                    </div>
                    <div className={`info-tab ${this.state.visibleTab === "right" ? "" : "hidden" }`}>
                        <AdditionalInfoForm onSubmit={this.submitForm}
                            data={this.state.additionalInfo}
                            onChange={this.handleChange}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(MyAccountPage)