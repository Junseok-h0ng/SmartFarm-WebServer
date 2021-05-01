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

        const chartFilter = fileList.pop();
        let charts;
        //파일리스트에 차트정보가 있으면 차트값을 넣음
        if(chartFilter && chartFilter.start){
            charts = chartFilter;
        //파일리스트에 차트정보가 없으면 마지막 값을 다시 파일리스트에 넣어줌
        }else if(chartFilter != undefined){
            fileList.push(chartFilter);
        }
        

        const data = {
            writer: user.data._id,
            images: fileList.map(file=>{ 
                return {
                    src:file.src.slice(22),
                    name:file.name
                }
            }),
            charts: charts
            ,
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
        console.log(images);
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
