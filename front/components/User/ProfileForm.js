import React from 'react';
import {Avatar,Button,Card} from 'antd';

function ProfileForm() {
    return (
        <div>
            <Card>
                <Button style={{float:'right'}}>제어창</Button>
                <Card.Meta
                    avatar={<Avatar>{'U'}</Avatar>}        
                    title={'username'}
                    description={'email@naver.com'}
                />
            </Card>
        </div>
    )
}

export default ProfileForm
