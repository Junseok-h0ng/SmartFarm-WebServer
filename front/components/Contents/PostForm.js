import React,{useEffect,useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {Form,Input,Button,Upload} from 'antd';
import UploadButton from './Sections/UploadForm';
import {loadContents, postContents} from '../../_redux/slices/post';

function PostForm(props) {

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
        dispatch(postContents(data))
        .then((response)=>{
            setContents('');
            setFileList([]);
            props.refreshPostCard(response.payload);
        });
    }

    const handleCheckedImages = (images) =>{

        setFileList(images);
    }
    const uploadSetting = {
        onChange({ file, fileList }) {
            if (file.status !== 'uploading') {
              setFileList(fileList);
            }
        }
      };

    return (
        <div >

            <Form onFinish={onSubmitPost}>
                <Input.TextArea value={contents} onChange={onChangeContents} rows={4}/>
                <Form.Item
                    name="image"
                >
                <div style={{marginTop:'5px'}}>
                    <Upload {...uploadSetting} fileList={fileList}/>
                    <UploadButton handleCheckedImages={images=>handleCheckedImages(images)}/>
                    <Button style={{float:'right'}} type="primary" htmlType="submit">전송</Button>
                </div>
                </Form.Item>
            </Form>
        </div>
    )
}

export default PostForm
