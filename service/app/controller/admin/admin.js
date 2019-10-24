'use strict'

const Controller=require('egg').Controller;
class AdminController extends Controller{
    async index(){
        const {ctx}=this;
        this.ctx.body="test"
    }
}
module.exports=AdminController;