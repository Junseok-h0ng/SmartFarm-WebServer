import React from 'react';
import ControlForm from '../../components/User/ControlForm'
import Link from 'next/link';
import {Menu} from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button} from 'react-bootstrap'

function index() {
    return (       
        <main>
        <br/>
        <div>
            <Menu mode="horizontal" style={{padding:'0 30px'}}>
            <Menu.Item key="dashboard"><Link href="/dashboard">
            <Button type="button" class="btn btn-outline-info">Dashboard</Button>
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
