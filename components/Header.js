import React from 'react'
import '../static/style/components/header.css'
import {Row,Col,Icon,Menu} from 'antd'
/* 
xs: <576px响应式栅格。
sm：≥576px响应式栅格.
md: ≥768px响应式栅格.
lg: ≥992px响应式栅格.
xl: ≥1200px响应式栅格.
xxl: ≥1600px响应式栅格.
*/
const Header=()=>(
    <Row type="flex" justify="center" className="header">
        <Col xs={24} sm={24} md={10} lg={15} xl={12}>
            <span className="header-logo">MECN</span>
            <span className="header-txt">专注前端开发,每天认真学习。</span>
        </Col>
        <Col className="menu-div" xs={0} sm={0} md={14} lg={8} xl={6}>
            <Menu mode="horizontal">
            <Menu.Item key="home">
                    <Icon type="home" />
                    首页
                </Menu.Item>
                <Menu.Item key="video">
                    <Icon type="youtube" />
                    视频
                </Menu.Item>
                <Menu.Item key="life">
                    <Icon type="smile" />
                    生活
                </Menu.Item>
            </Menu>
        </Col>
    </Row>
)
export default Header;