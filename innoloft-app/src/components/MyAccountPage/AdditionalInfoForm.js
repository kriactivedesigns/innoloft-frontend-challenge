import React from 'react'
import './MyAccountPage.scss'
import InputField from '../InputField/InputField'
import { AdditionalInfoFormId } from '../../GlobalConstants'

function AdditionalInfoForm(props){

    const [firstname,setFirstName] = React.useState(props.data.firstname ? props.data.firstname : '')
    const [lastname,setLastName] = React.useState(props.data.lastname ? props.data.lastname : '')
    const [housenumber,setHouseNumber] = React.useState(props.data.housenumber ? props.data.housenumber : '')
    const [street,setStreet] = React.useState(props.data.street ? props.data.street : '')
    const [postalcode,setPostalCode] = React.useState(props.data.postalcode ? props.data.postalcode : '')
    const [country,setCountry] = React.useState(props.data.country ? props.data.country : '')

    return(
        <form id={AdditionalInfoFormId}
            onSubmit={(e) => {
                props.onSubmit(e)
            }}>

            <InputField type="text" 
                placeholder="First Name" 
                name="firstname" 
                value={firstname}
                label="First Name"
                onChange={(e) => {
                    setFirstName(e.target.value)
                    props.onChange(e,AdditionalInfoFormId)
                }}/>
            <InputField type="text" 
                placeholder="Last Name" 
                name="lastname" 
                value={lastname}
                label="Last Name"
                onChange={(e) => {
                    setLastName(e.target.value)
                    props.onChange(e,AdditionalInfoFormId)
                }}/>
            <InputField type="text" 
                placeholder="House No." 
                name="housenumber" 
                label="House Number"
                value={housenumber}
                onChange={(e) => {
                    setHouseNumber(e.target.value)
                    props.onChange(e,AdditionalInfoFormId)
                }}/>
            <InputField type="text" 
                placeholder="Street" 
                label="Street"
                name="street" 
                value={street}
                onChange={(e) => {
                    setStreet(e.target.value)
                    props.onChange(e,AdditionalInfoFormId)
                }}/>
            <InputField type="number" 
                placeholder="Postal Code" 
                label="Postal Code"
                name="postalcode" 
                value={postalcode}
                onChange={(e) => {
                    setPostalCode(e.target.value)
                    props.onChange(e,AdditionalInfoFormId)
                }}/>
            <InputField type="text" 
                placeholder="Country" 
                label="Country"
                name="country" 
                value={country}
                onChange={(e) => {
                    setCountry(e.target.value)
                    props.onChange(e,AdditionalInfoFormId)
                }}/>

            <button type="submit" 
                    form={AdditionalInfoFormId}>
                        Save
            </button>
        </form>
    )
}

export default AdditionalInfoForm