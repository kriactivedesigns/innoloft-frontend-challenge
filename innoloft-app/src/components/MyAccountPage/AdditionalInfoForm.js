import React from 'react'
import './MyAccountPage.scss'
import { AdditionalInfoFormId } from '../../GlobalConstants'

function AdditionalInfoForm(props){
    return(
        <form id={AdditionalInfoFormId}
            onSubmit={(e) => {
                props.onSubmit(e)
            }}>

            <input type="text" placeholder="First Name" name="firstname" onChange={props.onChange}/>
            <input type="text" placeholder="Last Name" name="lastname" onChange={props.onChange}/>
            <input type="text" placeholder="House No." name="housenumber" onChange={props.onChange}/>
            <input type="text" placeholder="Street" name="street" onChange={props.onChange}/>
            <input type="number" placeholder="Postal Code" name="postalcode" onChange={props.onChange}/>
            <input type="text" placeholder="Country" name="country" onChange={props.onChange}/>

            <button type="submit" 
                    form="main-information-form">
                        Save
            </button>
        </form>
    )
}

export default AdditionalInfoForm