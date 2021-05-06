import React from 'react';
import DashboardForm from '../../components/User/DashboardForm'
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
        <Menu.Item key="control"><Link href="/control">
            <Button classname="btn btn-outline-success">Control</Button>
            </Link></Menu.Item>         
        </Menu>
            <DashboardForm/>
        </div>

        </main>
    )
}

export default index
