import {
    ACCOUNT_INFO_ACTION_STARTED,
    ACCOUNT_INFO_ACTION_SUCCESS,
    ACCOUNT_INFO_ACTION_FAILED
} from './accountInfoActionTypes'

const initialState = {
    loading: false,
    data: null
}

const accountInfoReducer = (state = initialState, action) => {
    switch (action.type){
        case ACCOUNT_INFO_ACTION_STARTED : {
            return {
                ...state,
                loading: true
            }
        }

        case ACCOUNT_INFO_ACTION_SUCCESS : {
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        }

        case ACCOUNT_INFO_ACTION_FAILED: {
            return {
                ...state,
                loading: false,
                data: null
            }
        }

        default: {
            return {
                state
            }
        }
    }
}

export default accountInfoReducer