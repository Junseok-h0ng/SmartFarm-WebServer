import React,{useEffect,useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {Form,Input,Button,Upload} from 'antd';
import UploadButton from './Sections/UploadForm';
import {postContents} from '../../_redux/_reducer/postReducer';

function PostForm() {

    const [contents, setContents] = useState("");
    const [fileList, setFileList] = useState([])
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    const onChangeContents = (e) =>{
        setContents(e.currentTarget.value);
    }

    const onSubmitPost = () =>{

        const data = {
            writer: user.data._id,
            images: fileList.map(file=>{
                return {
                    src:file.src.slice(22),
                    name:file.name
                }
            }),
            contents
        }
        dispatch(postContents(data));
    }
    const props = {
        action: 'http://localhost:3000/upload',
        onChange({ file, fileList }) {
            if (file.status !== 'uploading') {
              setFileList(fileList);
            }
        }
    }
    const handleCheckedImages = (images) =>{
        setFileList(images);
    }
    return (
        <div>
            <Form onFinish={onSubmitPost}>
                <Input.TextArea value={contents} onChange={onChangeContents} rows={4}/>
                <Form.Item
                    name="image"
                >
                <div style={{marginTop:'5px'}}>
                    <Upload {...props} fileList={fileList}/>
                    <UploadButton handleCheckedImages={images=>handleCheckedImages(images)}/>
                    <Button style={{float:'right'}} type="primary" htmlType="submit">전송</Button>
                </div>
                </Form.Item>
            </Form>
        </div>
    )
}

export default PostForm
