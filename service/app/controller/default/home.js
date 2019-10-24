'usr strict'

const Controller=require('egg').Controller;
class HomeController extends Controller{
    async index(){
        const { ctx } =this;
        this.ctx.body="mmmmmmmmmm"
    }
}

module.exports=HomeController