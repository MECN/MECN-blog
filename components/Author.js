import React from 'react';
import '../static/style/components/author.css'
import {Avatar,Divider } from 'antd'
const Author=()=>{
    return (
        <div className="author-div comm-box">
            <div> <Avatar size={130} src="../static/img/logo1.png"  /></div>
            <div className="author-introduction">
                苦逼程序员，专注于WEB和移动前端开发。要努力奋斗赚钱的傻X。此地维权无门，此时无能为力，此心随波逐流。
                <Divider>社交账号</Divider>
                <div className="link">
                    <Avatar size={28} icon="github" className="account"  /> https://github.com/MECN
                </div>
                <div className="link">
                    <Avatar size={28} icon="qq"  className="account" /> 1121255081
                </div>
                <div className="link">
                    <Avatar size={28} icon="wechat"  className="account"  /> czq58TN
                </div>
            </div>
        </div>
    )
}
export default Author;