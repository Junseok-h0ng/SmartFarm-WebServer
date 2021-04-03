import React,{useEffect,useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {Form,Input,Button} from 'antd';
import UploadButton from './Sections/UploadForm';
import {postContents} from '../../_redux/_reducer/postReducer';

function PostForm() {

    const [contents, setContents] = useState("");
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    const onChangeContents = (e) =>{
        setContents(e.currentTarget.value);
    }

    const onSubmitPost = () =>{
        const data = {
            writer: user.data._id,
            contents
        }
        dispatch(postContents(data));
    }

    return (
        <div>
            <Form onFinish={onSubmitPost}>
                <Input.TextArea value={contents} onChange={onChangeContents} rows={4}/>
                <Form.Item
                    name="image"
                    valuePropName="fileList"
                    getValueFromEvent
                >
                <div style={{marginTop:'5px'}}>
                    <UploadButton/>
                    <Button style={{float:'right'}} type="primary" htmlType="submit">전송</Button>
                </div>

                </Form.Item>
            </Form>
        </div>
    )
}

export default PostForm
