import * as type from '../types';

let initial = {
  content: window.localStorage.getItem('CONTENT'),
  loading: false
}

export default (state = initial, action) => {
  switch (action.type) {
    case type.CONTENT:
      return {
        ...state,
        content: action.payload
      }
    case type.SHOW_LOADING:
      return {
        ...state,
        loading: true
      }
    case type.HIDE_LOADING:
      return {
        ...state,
        loading: false
      }
    default:
      return { ...state };
  }
}