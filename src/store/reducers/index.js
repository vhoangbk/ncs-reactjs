import {
  FETCH_LIST_SAGA,
  FETCH_DATA_SAGA,
  FETCH_LIST_SAGA_SUCCESS,
  FETCH_LIST_SAGA_FAIL,
  FETCH_DATA_SAGA_SUCCESS, FETCH_DATA_SAGA_FAIL
} from '../actions';

export const defaultState = {
  loading: false,
  list: [],
  data: {}
};

export default function appReducer(state = defaultState, action) {
  switch (action.type) {
    case FETCH_LIST_SAGA: {
      return {
        ...state,
        loading: true,
      }
    }
    case FETCH_LIST_SAGA_SUCCESS: {
      return {
        ...state,
        loading: false,
        list: action.data
      }
    }
    case FETCH_LIST_SAGA_FAIL: {
      return {
        ...state,
        loading: false,
      }
    }
    case FETCH_DATA_SAGA: {
      return {
        ...state,
        loading: true,
      }
    }
    case FETCH_DATA_SAGA_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.data
      }
    }
    case FETCH_DATA_SAGA_FAIL: {
      return {
        ...state,
        loading: false,
      }
    }
    default:
      return state;
  }
}
