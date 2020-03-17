import * as type from '../types';
import { replaceStyle, addStyleLabel } from '../../util/helper';
import * as CONSTANT from '../../util/constant';
import TEMPLATE from '../../template';


const initConfig = () => {
  addStyleLabel(CONSTANT.STYLE_LABELS);
  replaceStyle(CONSTANT.BASIC_THEME_ID, TEMPLATE.basic)
  replaceStyle(CONSTANT.MARKDOWN_THEME_ID, TEMPLATE.style['normal'])
  replaceStyle(CONSTANT.CODE_THEME_ID, TEMPLATE.code['atomOneLight']);
  window.localStorage.removeItem('CONTENT')
  return {
    type: 'init'
  }
}

const setContent = (payload) => {
  window.localStorage.setItem(type.CONTENT, payload);
  return {
    type: type.CONTENT,
    payload
  }
}

const showLoading = () => {
  return { type: type.SHOW_LOADING }
}

const hideLoading = () => {
  return { type: type.HIDE_LOADING }
}

export default { initConfig, setContent, showLoading, hideLoading }