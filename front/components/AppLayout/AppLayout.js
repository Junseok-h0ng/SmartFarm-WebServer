import React from 'react';

import Link from 'next/link';
import {Menu,Row,Col} from 'antd';

function AppLayout({children}) {

    return (
        <div>
            <Menu mode="horizontal" style={{padding:'0 30px'}}>
                <Menu.Item key="home"><Link href="/"><a>Home</a></Link></Menu.Item>
                <Menu.Item style={{float:'right'}}key="register"><Link href="/register"><a>Register</a></Link></Menu.Item>
                <Menu.Item style={{float:'right'}} key="login"><Link href="/login"><a>Login</a></Link></Menu.Item>
            </Menu>
            <Row style={{marginTop:'15px'}} gutter={8}>
                <Col xs={24} md={4}  lg={5} xl={6} xxl={7}>
                   
                </Col>
                <Col xs={24}  md={16} lg={14} xl={12} xxl={10}>
                    {children}
                </Col>
                <Col xs={24}  md={4} lg={5} xl={6} xxl={7}>
                  
                </Col>
            </Row>
            
        </div>
    )
}

export default AppLayout
