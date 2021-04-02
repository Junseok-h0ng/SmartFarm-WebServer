import React from 'react';
import {Avatar,Button,Card} from 'antd';
import {useSelector} from 'react-redux';

function ProfileForm() {
    const user = useSelector(state => state.user);
    return (
        <div>
            <Card>
                <Button style={{float:'right'}}>제어창</Button>
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
