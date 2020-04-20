import React from 'react'
import './MyAccountPage.scss'
import { MainInfoFormId } from '../../GlobalConstants'
import InputField from '../InputField/InputField'
import { submitAccountInfo } from '../../redux'
import { useDispatch } from 'react-redux'

function MainInfoForm(props){

    const dispatch = useDispatch()
    
    const [email,setEmail] = React.useState(props.data)
    const [password,setPassword] = React.useState('')
    const [confirmPassword,reenterPassord] = React.useState('')
    const [confirmPasswordError,setConfirmPasswordError] = React.useState("")

    const onSubmit = (e) => {
        
        e.preventDefault()

        var info = {
            email
        }
        
        if(password.length > 0 && password === confirmPassword){
            info = {
                ...info,
                password
            }
        }else if(password != confirmPassword){
            setConfirmPasswordError("Error: Passwords do not match!")
            window.alert("Error: Passwords do not match!")
            return
        }else{
            setConfirmPasswordError("")
        }

        dispatch(submitAccountInfo(info))

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

            <InputField placeholder="Email" 
                name="email" 
                id="email" 
                type="email"
                required
                onChange={(e) => {
                    setEmail(e.target.value)
                }}
                value={email}
                label="E-Mail"/>

            <InputField placeholder="Password" 
                id="password"
                name="password" 
                type="password"
                value={password}
                label="Password"
                onChange={(e) => {
                    setPassword(e.target.value)
                    if(confirmPassword != e.target.value){
                        setConfirmPasswordError("Error: Passwords do not match!")
                    }else{
                        setConfirmPasswordError("")
                    }
                }}/>

            <InputField placeholder="Confirm Password" 
                value={confirmPassword}
                error={confirmPasswordError}
                required={checkIfRequired()}
                type="password"
                id="passwordconfirmation"
                name="passwordconfirmation" 
                label="Confirm Password"
                onChange={(e) => {
                    reenterPassord(e.target.value)
                    if(password != e.target.value){
                        setConfirmPasswordError("Error: Passwords do not match!")
                    }else{
                        setConfirmPasswordError("")
                    }
                }}/>

            <button type="submit" 
                    form={MainInfoFormId}>
                        Save
            </button>
        </form>
    )
}

export default MainInfoForm