'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  };

  async list(){
    const {ctx } =this;
    console.log(ctx)
    this.ctx.body="this is test"
  }

}

module.exports = HomeController;
