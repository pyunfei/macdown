import * as type from '../types';

let initial = {
  codeId: window.localStorage.getItem('CODE_ID') || 'atomOneDark',
}

export default (state = initial, action) => {
  switch (action.type) {
    case type.CODE_ID:
      return {
        ...state,
        content: action.payload
      }
    default:
      return { ...state };
  }
}