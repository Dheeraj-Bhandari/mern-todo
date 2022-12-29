import {createStore, combineReducers, applyMiddleware} from "redux"
import {composeWithDevTools} from 'redux-devtools-extension'
import { todosReducers } from "./reducer/todosReducer"
import { tabReducer } from "./reducer/tabReducer"
import thunk from "redux-thunk"
const reducer = combineReducers({
    todos:todosReducers,
    currentTab: tabReducer
})

const middleware = [thunk]

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;