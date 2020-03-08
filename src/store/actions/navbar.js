import * as type from '../types';
import { replaceStyle } from '../../util/helper';
import * as CONSTANT from '../../util/constant';
import TEMPLATE from '../../template';


const setCodeId = (payload) => {
  window.localStorage.setItem(type.CODE_ID, payload);
  replaceStyle(CONSTANT.CODE_THEME_ID, TEMPLATE.code[payload])
  return {
    type: type.CODE_ID,
    payload
  }
}

// const setCodeStyle = (payload) => {
//   replaceStyle(CONSTANT.CODE_THEME_ID, TEMPLATE.code[payload]);
//   return {
//     type: 'code'
//   }
// }


export default { setCodeId }