import { GET_USERS_LIST } from '../../Constants/ActionTypes';

export function getUsersListAction(data) {
  return {
    type: GET_USERS_LIST,
    result: data
  }
}
