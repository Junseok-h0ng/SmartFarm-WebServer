import React,{useEffect,useState} from 'react';
import {Form,Input,Upload,Avatar,message} from 'antd';
import { UploadOutlined, UserOutlined, InboxOutlined  } from '@ant-design/icons';
import config from '../../config/config';
import UploadButton from './Sections/UploadForm';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'

// const { Dragger } = Upload;

// const props = {
//   name: 'file',
//   multiple: true,
//   action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
//   onChange(info) {
//     const { status } = info.file;
//     if (status !== 'uploading') {
//       console.log(info.file, info.fileList);
//     }
//     if (status === 'done') {
//       message.success(`${info.file.name} file uploaded successfully.`);
//     } else if (status === 'error') {
//       message.error(`${info.file.name} file upload failed.`);
//     }
//   },
// };

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
            <div><br/>
                <div id='align'>
                <br/>
                    <Form>
                        {/* <Avatar icon={<UserOutlined />}/> Jason */}

                        <Input.TextArea type='text' name='upload' cols={55} rows={7} placeholder='게시물을 올려볼까요?'/>
                        
                        <Form.Item
                            name="image"
                            valuePropName="fileList"
                            getValueFromEvent
                            
                        > 
                        <table width='100%'>
                            <tr>
                                <td><UploadButton /></td>    
                                <td width='95%'><Button className="btn btn-success disabled btn-block" style={{ textAlign: "center"}} htmlType='submit'>전송</Button> </td>    
                            </tr>    
                        </table>              
                            
                            
                        </Form.Item>
                        
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default PostForm
