// 1.导入所有的 svg 图标
// 2.导入 SvgIcon 的全局注册
import SvgIcon from '@/components/SvgIcon'

// https://webpack.docschina.org/guides/dependency-management/#requirecontext
const svgRequire = require.context('./svg', false, /\.svg$/)
// 此时返回了一个 Require 函数，可以接受一个 request 函数， 用户require 的导入
// 该函数提供了三个属性，可以通过 svgRequire.key() 获得所有的svg 图标
// 遍历图标， 把图标作为 request 参数传入到 svgRequire 导入函数中，完成本地svg 图标的导入
svgRequire.keys().forEach(svgIcon => svgRequire(svgIcon))

export default app => {
  app.component('svg-icon', SvgIcon)
}
