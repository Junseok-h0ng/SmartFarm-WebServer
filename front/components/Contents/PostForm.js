import React,{useEffect,useState} from 'react';
import {Form,Input,Button,Upload} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import UploadForm from './Sections/UploadSection'
import axios from 'axios';
import config from '../../config/config';

function PostForm() {

    const [img, setImg] = useState(null)

    const onChange = (e) =>{
        setImg(e.target.files[0])
        console.log(img);
    }

    const onClickUpload = async () =>{
        const formData = new FormData();
        formData.append('img',img);
        const response = await axios.post(config.back_url+"/upload",formData);
        console.log(response);
    }
    return (
        <div>
            <Form>
                <Input.TextArea rows={4}/>
                <Form.Item
                    name="image"
                    valuePropName="fileList"
                    getValueFromEvent
                >
                <Button style={{float:'right'}} type="primary" htmlType="submit">전송</Button>
                <input type="file" onChange={onChange}/>
                <Button onClick={onClickUpload}></Button>
                {/* <UploadForm/> */}
                </Form.Item>
                

            </Form>
        </div>
    )
}

export default PostForm
