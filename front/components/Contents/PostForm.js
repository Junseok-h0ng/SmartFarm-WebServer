import React,{useEffect,useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {Form,Input,Button,Upload, message} from 'antd';
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
        
        if(contents === ""){return message.error('글의 내용이 빈칸입니다.')}

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
        <div>
            <style jsx>{`
                #align {
                    margin-left: auto;
                    margin-right: auto;
                    width: 95%; 
                }
            `}</style>
            <div id='align'>
                <br/>
                <Form onFinish={onSubmitPost}>
                    <Input.TextArea id="textarea" value={contents} onChange={onChangeContents} cols={60} rows={7} placeholder='다른사람들과 공유 해보세요!'/>
                    <Form.Item
                        name="image"
                    >
                    <div style={{marginTop:'5px'}}>
                        <Upload {...uploadSetting} fileList={fileList}/>
                        <table width='100%'>
                            <tr>
                                <td><UploadButton handleCheckedImages={images=>handleCheckedImages(images)} userId={user.data._id}/></td>
                                <td width='95%'><Button style={{width:'100%',float:'right',color:'#5cb85c', borderColor: "#5cb85c"}}  htmlType="submit">전송</Button></td>
                            </tr>
                        </table>
                    </div>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default PostForm
