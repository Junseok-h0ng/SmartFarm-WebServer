import React from 'react';
import {Card,Avatar,Checkbox} from 'antd';
import {  LikeOutlined, DislikeOutlined, MessageOutlined } from '@ant-design/icons';


function CardForm() {
    return (
        <div>
            <Card
                  actions={[
                    <LikeOutlined type="like" key="like" />,
                    <DislikeOutlined type="dislike" key="dislike" /> ,
                    <MessageOutlined  type="message" key="message"/>,
                ]}
            >
                <Card.Meta
                    avatar={<Avatar>fasd</Avatar>}
                    title={'123'}
                    description={
                        'asdfas'
                    }
                />
            </Card>
        </div>
    )
}

export default CardForm
