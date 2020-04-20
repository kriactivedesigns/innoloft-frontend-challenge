
import React from 'react'
import './MyAccountPage.scss'
import InputField from '../InputField/InputField'
import { AdditionalInfoFormId } from '../../GlobalConstants'
import { submitAccountInfo } from '../../redux'
import { useDispatch } from 'react-redux'

function AdditionalInfoForm(props){

    const dispatch = useDispatch()

    const [firstname,setFirstName] = React.useState(props.data.firstname)
    const [lastname,setLastName] = React.useState(props.data.lastname)
    const [housenumber,setHouseNumber] = React.useState(props.data.housenumber)
    const [street,setStreet] = React.useState(props.data.street)
    const [postalcode,setPostalCode] = React.useState(props.data.postalcode)
    const [country,setCountry] = React.useState(props.data.country)

    const onSubmit = (e) => {
        e.preventDefault()
        var info = {
            firstname,
            lastname,
            housenumber,
            street,
            postalcode,
            country
        }
        
        dispatch(submitAccountInfo(info))
    } 

    return(
        <form id={AdditionalInfoFormId}
            onSubmit={onSubmit}
            autoComplete="none">

            <InputField type="text" 
                placeholder="First Name" 
                name="firstname" 
                value={firstname}
                label="First Name"
                required
                onChange={(e) => {
                    setFirstName(e.target.value)
                }}/>
            <InputField type="text" 
                placeholder="Last Name" 
                name="lastname" 
                value={lastname}
                label="Last Name"
                required
                onChange={(e) => {
                    setLastName(e.target.value)
                }}/>
            <InputField type="text" 
                placeholder="House No." 
                name="housenumber" 
                label="House Number"
                value={housenumber}
                required
                onChange={(e) => {
                    setHouseNumber(e.target.value)
                }}/>
            <InputField type="text" 
                placeholder="Street" 
                label="Street"
                name="street" 
                value={street}
                required
                onChange={(e) => {
                    setStreet(e.target.value)
                }}/>
            <InputField type="number" 
                placeholder="Postal Code" 
                label="Postal Code"
                name="postalcode" 
                value={postalcode}
                required
                onChange={(e) => {
                    setPostalCode(e.target.value)
                }}/>
            <InputField type="text" 
                placeholder="Country" 
                label="Country"
                name="country" 
                value={country}
                required
                onChange={(e) => {
                    setCountry(e.target.value)
                }}/>

            <button type="submit" 
                    form={AdditionalInfoFormId}>
                        Save
            </button>
        </form>
    )
}

export default AdditionalInfoForm