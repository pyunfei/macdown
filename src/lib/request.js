import Axios from 'axios'
import store from '../store';
import actions from '../store/actions/initContent';

class Ajax {
  constructor() {

    // this.baseURL =  'http://120.79.37.193:3000'
    this.baseURL =  'http://localhost:3001'
    this.queue = {}
    // this.withCredentials = true 
    this.timeout = 5000
  }
  mergeConfig(config) {
    return {
      baseURL: this.baseURL, 
      withCredentials: this.withCredentials, 
      ...config 
    }
  }
  setInterceptor(instance, url) {
    instance.interceptors.request.use((config) => {
      // let token = localStorage.getItem('token')
      // if (token) {
      //   if (!config.headers) config.headers = {}
      //   config.headers.Authorization = 'Bearer ' + token
      // }
      this.queue[url] = true 
      // store.commit(LOADING);
      store.dispatch(actions.showLoading())
      console.log('loading')
      return config
    })
    instance.interceptors.response.use(config => {
      delete this.queue[url]
      if (!Object.keys(this.queue).length) {
        // store.commit(NOLOADING)
        store.dispatch(actions.hideLoading())
        console.log('no-loading')
      }
      return config.data 
    })

  }
  request(config) {
    config = this.mergeConfig(config)
    let instance = Axios.create() 
    this.setInterceptor(instance, config.url)
    return instance(config)
  }
}
export default new Ajax()