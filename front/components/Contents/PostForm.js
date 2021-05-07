import React,{useEffect,useState} from 'react';
import {Form,Input,Upload,Avatar,message} from 'antd';
import { UploadOutlined, UserOutlined, InboxOutlined  } from '@ant-design/icons';
import config from '../../config/config';
import UploadButton from './Sections/UploadForm';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'

const { Dragger } = Upload;

const props = {
  name: 'file',
  multiple: true,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

function PostForm() {

    return (
        <div>
            <style jsx>{`    

                #line {
                    border: 1.1px solid #a0a0a0;
                    border-radius: 1.2em;
                    // background-color: #59f80f;
                }
  
                #align {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    
            `}</style>
            <div id='line'><br/>
                <div id='align'>
                <br/>
                    <Form>
                        <Avatar icon={<UserOutlined />}/> Jason

                        <Input.TextArea type='text' name='upload' rows={6} placeholder='게시물을 올려볼까요?'/>
                        <Form.Item
                            name="image"
                            valuePropName="fileList"
                            getValueFromEvent
                            
                        >

                    <Dragger {...props}>
                        <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">사진 업로드</p>
                        <p className="ant-upload-hint">
                            파일을 끌어다 놓거나 클릭하여 해당 사진을 업로드 하세요!
                        </p>
                    </Dragger>

                            <Button className='btn-success btn-block disabled' style={{ textAlign: "center"}} htmlType='submit'>전송</Button> 
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default PostForm
