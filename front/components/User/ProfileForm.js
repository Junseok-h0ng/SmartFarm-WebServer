import React from 'react';
import Link from 'next/link';
import {Avatar,Button,Card} from 'antd';
import {MenuOutlined,EditOutlined} from '@ant-design/icons'

function ProfileForm(props) {
    const user = props.user;
    return (
        <div>
            <Card>
                <Button style={{float:'right',marginLeft:'10px'}}><Link href="/farm"><a><MenuOutlined /></a></Link></Button>
                <Button style={{float:'right'}}><Link href="/user"><a><EditOutlined /></a></Link></Button>
                <Card.Meta
                    avatar={<Avatar>{user.data.name[0]}</Avatar>}        
                    title={user.data.name}
                    description={user.data.email}
                />
            </Card>
        </div>
    )
}

export default ProfileForm
