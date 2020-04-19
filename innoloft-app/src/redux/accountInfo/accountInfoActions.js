import {
    ACCOUNT_INFO_ACTION_STARTED,
    ACCOUNT_INFO_ACTION_SUCCESS,
    ACCOUNT_INFO_ACTION_FAILED
} from './accountInfoActionTypes'

import axios from '../../__mock__/axios'

export const getAccountInfo = () => {
    return function (dispatch) {
        dispatch(accountActionStarted())
        axios.get('/acountinfo')
        .then(response => {
            const accountInfo = response
            dispatch(accountActionSuccess(accountInfo))
        })
        .catch(error => {
            console.log(error)
            dispatch(accountActionFailed())
        })
    }
} 

export const submitAccountInfo = (data) => {
    return function (dispatch) {
        dispatch(accountActionStarted())
        axios.post('/acountinfo',data)
        .then(response => {
            const accountInfo = response
            dispatch(accountActionSuccess(accountInfo))
            dispatch(getAccountInfo())
        })
        .catch(error => {
            console.log(error)
            dispatch(accountActionFailed())
        })
    }
}

const accountActionStarted = () => {
    return {
        type: ACCOUNT_INFO_ACTION_STARTED
    }
}

const accountActionSuccess = (data) => {
    return {
        type: ACCOUNT_INFO_ACTION_SUCCESS,
        payload: data
    }
}

const accountActionFailed = (error) => {
    return {
        type: ACCOUNT_INFO_ACTION_FAILED
    }
}