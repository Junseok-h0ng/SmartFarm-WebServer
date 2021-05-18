import React,{useEffect,useState} from 'react';
import {Form,Input,Upload,Avatar,message} from 'antd';
import { UploadOutlined, UserOutlined, InboxOutlined  } from '@ant-design/icons';
import config from '../../config/config';
import UploadButton from './Sections/UploadForm';

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

                #up_btn {
                    color: #5cb85c;;
                    padding: 5px;
                    border: 2px solid #5cb85c;
                    background-color: rgba(0,0,0,0); 
                    border-radius: 8px;
                    width: 100%;
                }

                #textarea {
                    margin-left: auto;
                    margin-right: auto;
                    width: 85%;       
                }
                    
            `}</style>
            <div><br/>
                <div id='textarea'>
                <br/>
                    <Form >
                        {/* <Avatar icon={<UserOutlined />}/> Jason */}

                        <Input.TextArea type='text' name='upload' rows={8} placeholder='게시물을 올려볼까요?'/>
                        
                        <Form.Item
                            name="image"
                            valuePropName="fileList"
                            getValueFromEvent
                            
                        > 
                        <table width='100%'>
                            <tr>
                                <td><UploadButton /></td>    
                                <td width='95%'><button id='up_btn' htmlType='submit'>전송</button> </td>    
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
