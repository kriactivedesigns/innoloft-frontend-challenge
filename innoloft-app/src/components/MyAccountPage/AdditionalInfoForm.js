import React from 'react'
import './MyAccountPage.scss'
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

            <input type="text" 
                placeholder="First Name" 
                required
                name="firstname" 
                value={firstname}
                onChange={(e) => {
                    setFirstName(e.target.value)
                    props.onChange(e,AdditionalInfoFormId)
                }}/>
            <input type="text" 
                placeholder="Last Name" 
                required
                name="lastname" 
                value={lastname}
                onChange={(e) => {
                    setLastName(e.target.value)
                    props.onChange(e,AdditionalInfoFormId)
                }}/>
            <input type="text" 
                placeholder="House No." 
                required
                name="housenumber" 
                value={housenumber}
                onChange={(e) => {
                    setHouseNumber(e.target.value)
                    props.onChange(e,AdditionalInfoFormId)
                }}/>
            <input type="text" 
                placeholder="Street" 
                required
                name="street" 
                value={street}
                onChange={(e) => {
                    setStreet(e.target.value)
                    props.onChange(e,AdditionalInfoFormId)
                }}/>
            <input type="number" 
                placeholder="Postal Code" 
                required
                name="postalcode" 
                value={postalcode}
                onChange={(e) => {
                    setPostalCode(e.target.value)
                    props.onChange(e,AdditionalInfoFormId)
                }}/>
            <input type="text" 
                placeholder="Country" 
                required
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