import React from 'react';
import DashboardForm from '../../components/User/DashboardForm'
import ControlForm from '../../components/User/ControlForm'
import Link from 'next/link';
import {Menu} from 'antd';
// import 'bootstrap/dist/css/bootstrap.min.css'
// import {Button} from 'react-bootstrap'

function index() {
    return (
        <main>
        <br/>
        <div>
            <DashboardForm/><br/>
            <ControlForm/>
        </div>

        </main>
    )
}

export default index
