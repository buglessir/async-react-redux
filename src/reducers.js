import { combineReducers } from 'redux'

function loadingReducer(state = false, action) {
    switch(action.type) {
        case 'LOADING':
            return action.loading
        default:
            return state
    }
}

function itemsReducer(state = [], action) {
    switch(action.type) {
        case 'ITEMS':
            return action.data
        default:
            return state
    }
}

const rootReducer = combineReducers({
    loadingReducer,
    itemsReducer
})

export default rootReducer
