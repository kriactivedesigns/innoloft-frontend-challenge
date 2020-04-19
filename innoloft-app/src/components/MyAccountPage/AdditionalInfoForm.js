import React from 'react'
import './MyAccountPage.scss'
import { AdditionalInfoFormId } from '../../GlobalConstants'

function AdditionalInfoForm(props){

    const { firstname, lastname, housenumber, street, postalcode, country} = props.data

    const onChange = (e) => {
        props.onChange(e,AdditionalInfoFormId)
    }

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
                onChange={onChange}/>
            <input type="text" 
                placeholder="Last Name" 
                required
                name="lastname" 
                value={lastname}
                onChange={onChange}/>
            <input type="text" 
                placeholder="House No." 
                required
                name="housenumber" 
                value={housenumber}
                onChange={onChange}/>
            <input type="text" 
                placeholder="Street" 
                required
                name="street" 
                value={street}
                onChange={onChange}/>
            <input type="number" 
                placeholder="Postal Code" 
                required
                name="postalcode" 
                value={postalcode}
                onChange={onChange}/>
            <input type="text" 
                placeholder="Country" 
                required
                name="country" 
                value={country}
                onChange={onChange}/>

            <button type="submit" 
                    form={AdditionalInfoFormId}>
                        Save
            </button>
        </form>
    )
}

export default AdditionalInfoForm