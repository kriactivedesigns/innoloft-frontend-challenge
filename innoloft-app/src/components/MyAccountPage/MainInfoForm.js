import React from 'react'
import './MyAccountPage.scss'
import { MainInfoFormId } from '../../GlobalConstants'

function MainInfoForm(props){

    const { email } = props.data

    const [password,setPassword] = React.useState('')
    const [confirmPassword,reenterPassord] = React.useState('')

    const onChange = (e) => {
        if(e.target.name == 'password'){
            setPassword(e.target.value)
        }
        else if(e.target.name == 'passwordconfirmation'){
            reenterPassord(e.target.value)
        }
        else{
            props.onChange(e,MainInfoFormId)
        }
    }

    const onSubmit = (e) => {
        if(password != confirmPassword){
            e.preventDefault()
            console.log("Passwords do not match!");
        }
        else{
            props.onSubmit(e)
        }
    }

    return(
        <form id={MainInfoFormId}
            onSubmit={onSubmit}>

            <input placeholder="Email" 
                name="email" 
                onChange={onChange}
                value={email}/>

            <input placeholder="Password" 
                name="password" 
                value={password}
                onChange={onChange}/>

            <input placeholder="Confirm Password" 
                value={confirmPassword}
                name="passwordconfirmation" 
                onChange={onChange}/>

            <button type="submit" 
                    form={MainInfoFormId}>
                        Save
            </button>
        </form>
    )
}

export default MainInfoForm