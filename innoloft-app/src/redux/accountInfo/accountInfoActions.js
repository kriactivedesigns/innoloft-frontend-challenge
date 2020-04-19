import {
    ACCOUNT_INFO_ACTION_STARTED,
    ACCOUNT_INFO_ACTION_SUCCESS,
    ACCOUNT_INFO_ACTION_FAILED
} from './accountInfoActionTypes'

export const getAccountInfo = () => {
    return function (dispatch) {
        dispatch(accountActionStarted())
        const data = {}
        dispatch(accountActionSuccess(data))
    }
} 

export const submitAccountInfo = (data) => {
    return function (dispatch) {
        dispatch(accountActionStarted())
        dispatch(accountActionSuccess(data))
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