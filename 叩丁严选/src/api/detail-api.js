import request from '../axios/request'
export function getDetail(id){
  return request({
    url: '/products/' + id,
    // params: id
  })
}
