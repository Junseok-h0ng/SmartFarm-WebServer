import React from 'react';

import Link from 'next/link';
import {Menu,Row,Col} from 'antd';
import LoginForm from '../User/LoginForm';

function AppLayout({children}) {

    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item key="home"><Link href="/"><a>Home</a></Link></Menu.Item>
            </Menu>
            <Row style={{marginTop:'15px'}} gutter={8}>
                <Col xs={24} md={5}>
                    <LoginForm/>
                </Col>
                <Col xs={24} md={14}>
                    {children}
                </Col>
                <Col xs={24} md={5}>
                    빈 공간
                </Col>
            </Row>
            
        </div>
    )
}

export default AppLayout
