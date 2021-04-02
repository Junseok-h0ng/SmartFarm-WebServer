import React,{useEffect,useState} from 'react';
import {Form,Input,Button,Upload} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import config from '../../config/config';
import UploadButton from './Sections/UploadForm';

function PostForm() {

    return (
        <div>
            <Form>
                <Input.TextArea rows={4}/>
                <Form.Item
                    name="image"
                    valuePropName="fileList"
                    getValueFromEvent
                >
                <div style={{marginTop:'5px'}}>
                    <Button style={{float:'right'}} type="primary" htmlType="submit">전송</Button>
                    <UploadButton/>
                </div>

                </Form.Item>
            </Form>
        </div>
    )
}

export default PostForm
