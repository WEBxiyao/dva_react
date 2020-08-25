import request from '../utils/request';

export function query() {
  return request('/api/users');  
}
export function getProduct(){
  return request('/api/product');
}
export function getLogin(){
  return request('/api/login');
}
