import React from 'react'
import './MyAccountPage.scss'
import { MainInfoFormId } from '../../GlobalConstants'

function MainInfoForm(props){
    return(
        <form id={MainInfoFormId}
            onSubmit={(e) => {
                props.onSubmit(e)
            }}>

            <input placeholder="Email" name="email" onChange={props.onChange}/>
            <input placeholder="Password" name="password" onChange={props.onChange}/>
            <input placeholder="Confirm Password" name="passwordconfirmation" onChange={props.onChange}/>

            <button type="submit" 
                    form="main-information-form">
                        Save
            </button>
        </form>
    )
}

export default MainInfoForm