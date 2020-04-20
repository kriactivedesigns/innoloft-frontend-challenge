import React from 'react'
import styles from './styles.module.scss'

function InputField(props){
    return(
        <div className={styles.container}>
            <label className={styles.label}>{props.label}</label>
            <input className={styles.input}  {...props}/>
            <label className={styles.error}>{props.error}</label>
        </div>
    )
}

export default InputField