import {
    ACCOUNT_INFO_ACTION_STARTED,
    ACCOUNT_INFO_ACTION_SUCCESS,
    ACCOUNT_INFO_ACTION_FAILED
} from './accountInfoActionTypes'

const initialState = {
    loading: false,
    info: {}
}

const accountInfoReducer = (state = initialState, action) => {
    switch (action.type){
        case ACCOUNT_INFO_ACTION_STARTED : {
            return {
                loading: true
            }
        }

        case ACCOUNT_INFO_ACTION_SUCCESS : {
            return {
                loading: false,
                info: action.payload
            }
        }

        case ACCOUNT_INFO_ACTION_FAILED: {
            return {
                loading: false,
                info: {}
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