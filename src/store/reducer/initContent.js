import * as type from '../types';

let initial = {
  content: window.localStorage.getItem('CONTENT'),
}

export default (state = initial, action) => {
  switch (action.type) {
    case type.CONTENT:
      return {
        ...state,
        content: action.payload
      }
    default:
      return { ...state };
  }
}