import { login } from '@/api/sys'
import md5 from 'md5'

export default {
  namespaced: true,
  state: () => ({}),
  mutations: {},
  actions: {
    /**
     * 登录请求的动作
     */
    login (context, userinfo) {
      const { username, password } = userinfo
      return new Promise((resolve, reject) => {
        login({
          username,
          password: md5(password)
        }).then(data => {
          resolve()
        }).catch(err => {
          reject(err)
        })
      })
    }
  }
}
