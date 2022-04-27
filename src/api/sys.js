import request from '@/utils/request'
/**
 * 封装登录
 * return promise
 */
export const login = data => {
  return request({
    url: '/sys/login',
    method: 'POST',
    data
  })
}
