// 合并models里面多个js文件，好处不用每个读取引入了
const context=require.context('./',false,/\.js$/)
export default context
.keys()
.filter(item=>item!=='./index.js')
.map(key=>context(key))