import {
    ACCOUNT_INFO_ACTION_STARTED,
    ACCOUNT_INFO_ACTION_SUCCESS,
    ACCOUNT_INFO_ACTION_FAILED
} from './accountInfoActionTypes'

const initialState = {
    loading: false,
    info: null
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
            const newInfo = action.payload
            return {
                ...state,
                loading: false,
                info: {
                    ...state.info,
                    ...newInfo
                } 
            }
        }

        case ACCOUNT_INFO_ACTION_FAILED: {
            return {
                ...state,
                loading: false,
                info: null
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