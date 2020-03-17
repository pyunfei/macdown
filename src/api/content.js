import axios from '../lib/request';

export const createContent = ({ create_At, title, flag, content, }) => axios.request({
  method: 'POST',
  url: '/content/create',
  data: {
    create_At,
    title,
    flag,
    content,
  }
})

export const getContent = ({ pageSize,pageNum }) => axios.request({
  method: 'GET',
  url: '/content/all',
  params: {
    pageSize,
    pageNum,
  }
})

export const itemContent = ({ id }) => axios.request({
  method: 'GET',
  url: '/content/detail'+ id,
})

export const updateContent = ({ id, create_At, title, flag, content, hot }) => axios.request({
  method: 'PUT',
  url:'/content/update/' + id,
  data: {
    create_At,
    title,
    flag,
    content,
    hot
  }
})