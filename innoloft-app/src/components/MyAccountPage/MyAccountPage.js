import React, { Component } from 'react'
import MainInfoForm from './MainInfoForm'
import AdditionalInfoForm from './AdditionalInfoForm'
import './MyAccountPage.scss'
import { MainInfoFormId, AdditionalInfoFormId } from '../../GlobalConstants';

class MyAccountPage extends Component{

    constructor(props){
        super(props);
        this.state = {
            visibleTab: 'left'
        }

        this.handleChange = this.handleChange.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }

    handleTabSwitch(tab){
        this.setState({ visibleTab : tab })
    }

    handleChange(e){
        this.setState({[e.target.name]:[e.target.value]})
    }

    submitForm(e){
        e.preventDefault()
        const id = e.target.id
        if(id === MainInfoFormId){
            const mainInfo = {
                email: this.state.email,
                password: this.state.password
            }
            console.log(mainInfo)
        }
        else if(id === AdditionalInfoFormId){
            const additionalInfo = {
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                housenumber: this.state.housenumber,
                street: this.state.street,
                postalcode: this.state.postalcode,
                country: this.state.country
            }
            console.log(additionalInfo)
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
                            onChange={this.handleChange}/>
                    </div>
                    <div className={`info-tab ${this.state.visibleTab === "right" ? "" : "hidden" }`}>
                        <AdditionalInfoForm onSubmit={this.submitForm}
                            onChange={this.handleChange}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default MyAccountPage