import request from '../axios/request'

export function getgoods(params){
  return request.get('/products',{params}) 
}