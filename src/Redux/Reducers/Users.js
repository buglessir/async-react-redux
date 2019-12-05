import { GET_USERS_LIST } from '../../Constants/ActionTypes';

var initialValues = {
  list: []
};

function usersReducer(state = initialValues, action) {
  switch (action.type) {
    case GET_USERS_LIST:
      return {
        ...state,
        list: action.result
      };
    default:
      return state;
  }
}

export default usersReducer;
