import React from 'react'
import './MyAccountPage.scss'
import { MainInfoFormId } from '../../GlobalConstants'

function MainInfoForm(props){

    const [email,setEmail] = React.useState(props.data.email ? props.data.email : '')
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
            setEmail(e.target.value)
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

    const checkIfRequired = () => {
        const element = document.getElementById('password')
        if(element && element.value.length > 0){
            return true
        }
        else{
            return false
        }
    }

    return(
        <form id={MainInfoFormId}
            onSubmit={onSubmit}>

            <input placeholder="Email" 
                name="email" 
                type="email"
                onChange={onChange}
                value={email}/>

            <input placeholder="Password" 
                id="password"
                name="password" 
                type="password"
                value={password}
                onChange={onChange}/>

            <input placeholder="Confirm Password" 
                value={confirmPassword}
                required={checkIfRequired()}
                type="password"
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