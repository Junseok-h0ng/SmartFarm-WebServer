import React,{useState} from 'react';
import {useDispatch} from 'react-redux';
import {Form,Input,Button,message} from 'antd';
import { addFarm, loadFarmInfo } from '../../_redux/slices/farm';

function AddFarm(props) {

    const dispatch = useDispatch();

    const [inputValue, setInputValue] = useState("");

    const onSubmitCommit = () =>{
        // 주소창이 빈칸일 경우
        if(inputValue === ""){return message.error('주소가 입력되지 않았습니다.')}

        setInputValue("");

        const data={
            userId: props.userId,
            ipAddress: inputValue
        }

        dispatch(loadFarmInfo({userId:props.userId}))
        .then(res=>{
            // 이미 주소가 등록되었는지 체크
            const hasAddress = res.payload.map(payload=>payload.ipAddress).indexOf(data.ipAddress);
            // 주소가 중복되있지 않으면 농장정보 등록
            if(hasAddress != 0){
                dispatch(addFarm(data))
                .then(res=>{
                    if(res.type === 'ADD_FARM/fulfilled'){
                        if(res.payload.success != false){
                            message.success('새로운 정보등록에 성공했습니다.');
                            console.log(res.payload);
                            props.refreshFarmData(res.payload);
                        }else{
                            message.error('스마트팜과 연결이 되지 않았습니다.');
                        }
                    }else{
                        //중복되면 에러 메세지 출력
                        message.error('이미 정보가 있습니다.');
                    }
                });
            }else{
                //중복되면 에러 메세지 출력
                message.error('이미 정보가 있습니다.');
            }
        });
       
    }

    const onChangeInputValue = (event) =>{
        setInputValue(event.target.value);
    }

    return (
        <div style={{marginTop:'20px'}}>
            <Form layout="horizontal" onFinish={onSubmitCommit}>
                <Form.Item>
                    <Input style={{width:'80%'}} placeholder={"스마트팜의 IP주소를 입력해주세요."} value={inputValue} onChange={onChangeInputValue}/>
                    <Button style={{width:'20%',color:'#5cb85c',borderColor: "#5cb85c"}} htmlType="submit">확인</Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default AddFarm
