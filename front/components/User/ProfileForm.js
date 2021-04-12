import React from 'react';
import Link from 'next/link';
import {Avatar,Button,Card} from 'antd';
import {useSelector} from 'react-redux';
import PostForm from '../Contents/PostForm';

function ProfileForm(props) {
    const user = props.user;
    return (
        <div>
            <Card>
                <Button style={{float:'right' ,marginLeft:'10px'}}>제어창</Button>
                <Button style={{float:'right'}}><Link href="/user"><a>유저 프로필</a></Link></Button>
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
