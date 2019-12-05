import { LOADING } from '../../Constants/ActionTypes';

export function loadingAction(boolean) {
  return {
    type: LOADING,
    status: boolean
  }
}
