import React from 'react';
import ControlForm from '../../components/User/ControlForm'
import Link from 'next/link';
import {Menu} from 'antd';

function index() {
    return (       
        <main>
        <div>
            <Menu mode="horizontal" style={{padding:'0 30px'}}>
            <Menu.Item key="dashboard"><Link href="/dashboard"><a>Dashboard</a></Link></Menu.Item>                
            </Menu>
        </div>

        <div>
            <ControlForm/>
        </div>
            
        </main>
    )
}

export default index
