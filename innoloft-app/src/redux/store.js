import { createStore, applyMiddleware } from 'redux'
import accountInfoReducer from './accountInfo/accountInfoReducer'
import thunkMiddleware from 'redux-thunk'
import { getAccountInfo } from './'

const store = createStore(accountInfoReducer, applyMiddleware(thunkMiddleware))

store.subscribe(() => {})
store.dispatch(getAccountInfo())

export default store