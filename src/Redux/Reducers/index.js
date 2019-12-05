import { combineReducers } from 'redux';
import Loading from './Loading';
import Users from './Users';

const rootReducer = combineReducers({
    loading: Loading,
    users: Users
});

export default rootReducer;
