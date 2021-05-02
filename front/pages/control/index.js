import React from 'react';
import ControlForm from '../../components/User/ControlForm'
import Link from 'next/link';
import {Menu} from 'antd';

function index() {
    return (       
        <main>
        <br/>
        <div>
            <Menu mode="horizontal" style={{padding:'0 30px'}}>
            <Menu.Item key="dashboard"><Link href="/dashboard">
            <button type="button" class="btn btn-outline-info">Dashboard</button>
            </Link></Menu.Item>         
        </Menu>
        </div>

        <div>
            <ControlForm/>
        </div>
            
        </main>
    )
}

export default index
