import React from 'react';
import DashboardForm from '../../components/User/DashboardForm'
import Link from 'next/link';
import {Menu} from 'antd';
//import './Dashboard.css';

function index() {
    return (
        <main>
        <div>
        <Menu mode="horizontal" style={{padding:'0 30px'}}>
        <Menu.Item key="control"><Link href="/control"><a>Control</a></Link></Menu.Item>         
        </Menu>
        </div>
        <div>
            <DashboardForm/>
        </div>

        </main>
    )
}

export default index
