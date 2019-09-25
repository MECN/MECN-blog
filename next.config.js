// 让Next.js可以加载CSS文件
const withCss=require('@zeit/next-css')
if(typeof require!=='undefined'){
    require.extensions['.css']=file=>{}
}
module.exports=withCss({})