import request from '../axios/request'

export function getrecommend(){
  return request({
    url: '/products/recommend'
  })   
}

export function gethot(){
    return request({
      url: '/products/hot'
    })   
  }
