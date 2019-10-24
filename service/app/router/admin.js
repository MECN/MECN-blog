'use strict'
module.exports=app=>{
    const {router,controller} =app;
    router.get('/admin/amdin',controller.admin.admin.index)
}